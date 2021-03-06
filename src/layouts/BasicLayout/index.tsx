import React, { useState } from 'react';
import { Shell, ConfigProvider } from '@alifd/next';
import enUS from '@alifd/next/lib/locale/en-us';
import PageNav from './components/PageNav';
import Logo from './components/Logo';
import Footer from './components/Footer';

(function () {
  const throttle = function (type: string, name: string, obj: Window = window) {
    let running = false;

    const func = () => {
      if (running) {
        return;
      }

      running = true;
      requestAnimationFrame(() => {
        obj.dispatchEvent(new CustomEvent(name));
        running = false;
      });
    };

    obj.addEventListener(type, func);
  };

  throttle('resize', 'optimizedResize');
})();

export default function BasicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const getDevice = (width: number) => {
    const isPhone =
      typeof navigator !== 'undefined' &&
      navigator &&
      navigator.userAgent.match(/phone/gi);

    if (width < 680 || isPhone) {
      return 'phone';
    } else if (width < 1280 && width > 680) {
      return 'tablet';
    } else {
      return 'desktop';
    }
  };

  const [device, setDevice] = useState(getDevice(NaN));
  window.addEventListener('optimizedResize', (e) => {
    setDevice(getDevice(e && e.target && e.target.innerWidth));
  });
  return (
    <ConfigProvider device={device} locale={enUS}>
      <Shell
        type="dark"
        style={{
          minHeight: '100vh',
        }}
      >
        <Shell.Branding>
          <Logo
            image="https://i.loli.net/2020/05/08/VuJI6wTh5GftmDi.png"
            text="Machine Learning ModelCI Application Demo"
          />
        </Shell.Branding>
        <Shell.Navigation
          direction="hoz"
          style={{
            marginRight: 10,
          }}
        />
        <Shell.Action />
        <Shell.Navigation>
          <PageNav />
        </Shell.Navigation>

        <Shell.Content>{children}</Shell.Content>
        <Shell.Footer>
          <Footer />
        </Shell.Footer>
      </Shell>
    </ConfigProvider>
  );
}
