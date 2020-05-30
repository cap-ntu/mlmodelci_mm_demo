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
          }}
          message=" Mask R-CNN Application on Image Object Detection "
        />
        <Divider orientation="left">Model Information</Divider>
        <div style={{ textAlign: 'left' }}>
          <Descriptions
            style={{ width: '92%', margin: '0 auto', marginTop: '20px' }}
            column={4}
            size="small"
          >
            <Descriptions.Item label="Profiling Device">
              <Tag color="magenta">Nvidia RTX 2080Ti</Tag>
            </Descriptions.Item>
            <Descriptions.Item label="Profiling Batch Size">
              <Tag color="purple">1</Tag>
            </Descriptions.Item>
            <Descriptions.Item label="Profiling Number of Batches">
              <Tag color="blue">6400</Tag>
            </Descriptions.Item>
            <Descriptions.Item label="Average GPU Utilization">
              <Tag color="volcano"> 43.3939 %</Tag>
            </Descriptions.Item>
            <Descriptions.Item label="Throughput">
              <Tag color="gold">14.718 req/sec</Tag>
            </Descriptions.Item>
            <Descriptions.Item label="50th Percentile Latency">
              <Tag color="green">66.6826 ms</Tag>
            </Descriptions.Item>
            <Descriptions.Item label="95th Percentile Latency">
              <Tag color="cyan">68.38 ms </Tag>
            </Descriptions.Item>
            <Descriptions.Item label="99th Percentile Latency">
              <Tag color="geekblue">70.1145 ms</Tag>
            </Descriptions.Item>
          </Descriptions>
        </div>
        <Divider orientation="left">Test Panel</Divider>

        <div style={{ display: 'flex', marginTop: '20px', marginLeft: '50px' }}>
          <Search
            style={{ width: '80%' }}
            placeholder="input testing image url"
            enterButton="Load Image and Test"
            size="medium"
            onSearch={(value) => console.log(value)}
          />

          <Button style={{ marginLeft: '10px' }}>
            Use Default Image and Test
          </Button>
        </div>

        <Divider orientation="left">Tested Results</Divider>

        <div style={{ display: 'flex', marginTop: '20px' }}>
          <Alert
            style={{ width: '40%', marginLeft: '90px' }}
            message="Image Before"
            type="info"
          />

          <Alert
            style={{ width: '40%', marginLeft: '80px' }}
            message="Image Processed"
            type="success"
          />
        </div>

        <div style={{ marginTop: '20px' }}>
          <img src="" alt="right" height="38%" />

          <img style={{ marginLeft: '80px' }} height="38%" src="" alt="right" />
        </div>
      </div>
    );
  }
}
