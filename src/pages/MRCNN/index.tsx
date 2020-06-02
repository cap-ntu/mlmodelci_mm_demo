import React from 'react';
import Button from 'antd/lib/button';
import { Input, Table, Alert, Divider, Descriptions, Tag } from 'antd';
import axios from 'axios';
import qs from 'qs';

import './index.css';

const { Search } = Input;

export default class MRCNN extends React.Component {
  private judgeColumns = [
    {
      title: 'positive',
      dataIndex: 'pos',
      key: 'pos',
      render: (text, record, index) => {
        text = (text * 100).toFixed(5);
        const { pos, neg, neutral } = record;
        return pos > neg && pos > neutral ? (
          <div style={{ color: 'red', fontWeight: 'bold' }}>{text}%</div>
        ) : (
          <div>{text}%</div>
        );
      },
    },
    {
      title: 'negative',
      dataIndex: 'neg',
      key: 'neg',
      render: (text, record, index) => {
        const { pos, neg, neutral } = record;
        text = (text * 100).toFixed(5);
        return neg > pos && neg > neutral ? (
          <div style={{ color: 'red', fontWeight: 'bold' }}>{text}%</div>
        ) : (
          <div>{text}%</div>
        );
      },
    },
    {
      title: 'neutral',
      dataIndex: 'neutral',
      key: 'neutral',
      render: (text, record, index) => {
        const { pos, neg, neutral } = record;
        text = (text * 100).toFixed(5);
        return neutral > pos && neutral > neg ? (
          <div style={{ color: 'red', fontWeight: 'bold' }}>{text}%</div>
        ) : (
          <div>{text}%</div>
        );
      },
    },
  ];

  constructor() {
    super();
    this.state = {
      textForJudge: '',
      isJudging: false,
    };
  }

  // private loadImageToCanvas = (url) => {
  //   if (!url) {
  //     return;
  //   }

  //   this.setState({
  //     imageLoadingError: false,
  //     imageLoading: true,
  //     loadingPercent: 0,
  //     classifyPercent: 0,
  //     topK: null,
  //   });

  //   loadImage(
  //     url,
  //     (img) => {
  //       if (img.type === 'error') {
  //         this.setState({
  //           imageLoadingError: true,
  //           imageLoading: false,
  //           modelRunning: false,
  //           url: null,
  //         });
  //       } else {
  //         const ctx = document.getElementById('input-canvas').getContext('2d');
  //         ctx.drawImage(img, 0, 0);
  //         this.setState({
  //           imageLoadingError: false,
  //           imageLoading: false,
  //           modelRunning: true,
  //         });
  //         setTimeout(() => {
  //           this.runModel();
  //         }, 1000);
  //       }
  //     },
  //     {
  //       maxWidth: 299,
  //       maxHeight: 299,
  //       cover: true,
  //       crop: true,
  //       canvas: true,
  //       crossOrigin: 'Anonymous',
  //     }
  //   );
  // };

  public render() {
    return (
      <div style={{ padding: 24, background: '#fff', textAlign: 'center' }}>
        <Alert
          style={{
            margin: '0 0 2rem 0',
            textAlign: 'left',
            width: '100%',
            fontSize: 20,
          }}
          message=" Mask R-CNN Application on Image Object Detection "
        />
        <Divider orientation="left" style={{ fontSize: 25 }}>
          Model Information
        </Divider>
        <div style={{ textAlign: 'left' }}>
          <Descriptions
            style={{ width: '92%', margin: '0 auto', marginTop: '20px' }}
            column={4}
            size="middle"
          >
            <Descriptions.Item
              label={
                <a
                  style={{
                    whiteSpace: 'nowrap',
                    fontSize: 20,
                    color: 'black',
                  }}
                >
                  Profiling Device
                </a>
              }
            >
              <Tag
                color="magenta"
                style={{ height: '30px', textAlign: 'center', fontSize: 20 }}
              >
                Nvidia RTX 2080Ti
              </Tag>
            </Descriptions.Item>
            <Descriptions.Item
              label={
                <a
                  style={{
                    whiteSpace: 'nowrap',
                    fontSize: 20,
                    color: 'black',
                  }}
                >
                  Profiling Batch Size
                </a>
              }
            >
              <Tag
                color="purple"
                style={{ height: '30px', textAlign: 'center', fontSize: 20 }}
              >
                1
              </Tag>
            </Descriptions.Item>
            <Descriptions.Item
              label={
                <a
                  style={{
                    whiteSpace: 'nowrap',
                    fontSize: 20,
                    color: 'black',
                  }}
                >
                  Profiling Number of Batches
                </a>
              }
            >
              <Tag
                color="blue"
                style={{ height: '30px', textAlign: 'center', fontSize: 20 }}
              >
                6400
              </Tag>
            </Descriptions.Item>
            <Descriptions.Item
              label={
                <a
                  style={{
                    whiteSpace: 'nowrap',
                    fontSize: 20,
                    color: 'black',
                  }}
                >
                  Average GPU Utilization
                </a>
              }
            >
              <Tag
                color="volcano"
                style={{ height: '30px', textAlign: 'center', fontSize: 20 }}
              >
                43.3939 %
              </Tag>
            </Descriptions.Item>
            <Descriptions.Item
              label={
                <a
                  style={{
                    whiteSpace: 'nowrap',
                    fontSize: 20,
                    color: 'black',
                  }}
                >
                  Throughput
                </a>
              }
            >
              <Tag
                color="gold"
                style={{ height: '30px', textAlign: 'center', fontSize: 20 }}
              >
                14.718 req/sec
              </Tag>
            </Descriptions.Item>
            <Descriptions.Item
              label={
                <a
                  style={{
                    whiteSpace: 'nowrap',
                    fontSize: 20,
                    color: 'black',
                  }}
                >
                  50th Percentile Latency
                </a>
              }
            >
              <Tag
                color="green"
                style={{ height: '30px', textAlign: 'center', fontSize: 20 }}
              >
                66.6826 ms
              </Tag>
            </Descriptions.Item>
            <Descriptions.Item
              label={
                <a
                  style={{
                    whiteSpace: 'nowrap',
                    fontSize: 20,
                    color: 'black',
                  }}
                >
                  95th Percentile Latency
                </a>
              }
            >
              <Tag
                color="cyan"
                style={{ height: '30px', textAlign: 'center', fontSize: 20 }}
              >
                68.38 ms{' '}
              </Tag>
            </Descriptions.Item>
            <Descriptions.Item
              label={
                <a
                  style={{
                    whiteSpace: 'nowrap',
                    fontSize: 20,
                    color: 'black',
                  }}
                >
                  99th Percentile Latency
                </a>
              }
            >
              <Tag
                color="geekblue"
                style={{ height: '30px', textAlign: 'center', fontSize: 20 }}
              >
                70.1145 ms
              </Tag>
            </Descriptions.Item>
          </Descriptions>
        </div>
        <Divider orientation="left" style={{ fontSize: 25 }}>
          Test Panel
        </Divider>

        <div style={{ display: 'flex', marginTop: '20px', marginLeft: '50px' }}>
          <Search
            style={{ width: '80%' }}
            placeholder="input testing image url"
            enterButton="Load Image and Test"
            size="large"
            onSearch={(value) => console.log(value)}
          />

          <Button type="primary" size="large" style={{ marginLeft: '10px' }}>
            Default Image to Test
          </Button>
        </div>

        <Divider orientation="left" style={{ fontSize: 25 }}>
          Tested Results (before and after)
        </Divider>
        <img src="" alt="left" width="45%" />
        <img style={{ marginLeft: '20px' }} width="45%" src="" alt="right" />
      </div>
    );
  }
}
