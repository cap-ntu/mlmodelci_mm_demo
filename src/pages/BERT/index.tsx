import React from 'react';
import Button from 'antd/lib/button';
import { Input, Table, Alert, Divider, Descriptions, Tag } from 'antd';
import axios from 'axios';
import qs from 'qs';

import './index.css';

const { TextArea } = Input;

export default class BERT extends React.Component {
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

  /**
   * @description
   *
   * @param {text}
   */
  private loadTextToJudge = (text) => {
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    const targetUrl = '';

    this.setState({ isJudging: true });

    axios
      .post(
        proxyUrl + targetUrl,
        qs.stringify({
          text,
          language: 'english',
        })
      )
      .then((response) => {
        this.setState({
          sentimentData: response.data,
          isJudging: false,
        });
      })
      .catch((error) => {
        console.log(error);
        this.setState({ isJudging: false });
      });
  };

  public render() {
    return (
      <div style={{ padding: 24, background: '#fff', textAlign: 'center' }}>
        <Alert
          style={{
            margin: '0 0 2rem 0',
            textAlign: 'left',
            width: '100%',
          }}
          message="BERT Application on Descriptive Text Sentiment Analysis"
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
              <Tag color="volcano"> 27.1429 %</Tag>
            </Descriptions.Item>
            <Descriptions.Item label="Throughput">
              <Tag color="gold">91.04303 req/sec</Tag>
            </Descriptions.Item>
            <Descriptions.Item label="50th Percentile Latency">
              <Tag color="green">11.08014 ms</Tag>
            </Descriptions.Item>
            <Descriptions.Item label="95th Percentile Latency">
              <Tag color="cyan">11.45675 ms </Tag>
            </Descriptions.Item>
            <Descriptions.Item label="99th Percentile Latency">
              <Tag color="geekblue">11.98774 ms</Tag>
            </Descriptions.Item>
          </Descriptions>
        </div>
        <Divider orientation="left">Test Panel</Divider>
        <p className="text-small">
          Please type any texts in the area below, and click the
          <strong> Click to Judge</strong> button to analyse the sentiments.
          <Button
            loading={this.state.isJudging}
            type="primary"
            style={{ marginLeft: '20px' }}
            onClick={() => {
              this.loadTextToJudge(this.state.textForJudge);
              this.setState({
                isJudging: true,
              });
            }}
          >
            Click to Judge!
          </Button>
        </p>
        <TextArea
          style={{
            width: '80%',
            marginTop: '1rem',
            height: '150px',
            marginBottom: '1rem',
          }}
          placeholder="Please enter a text description to analyse the sentiments"
          autosize={{ minRows: 3, maxRows: 6 }}
          onChange={(e) => this.setState({ textForJudge: e.target.value })}
        />
        <br />
        <Divider orientation="left">Tested Results</Divider>
        {this.state.sentimentData ? (
          <div>
            <Table
              style={{
                marginTop: '1rem',
                marginLeft: '10%',
                marginRight: '10%',
              }}
              rowKey={(record) => record.pos}
              dataSource={[this.state.sentimentData.probability]}
              columns={this.judgeColumns}
              pagination={false}
              bordered
            />
            <div
              style={{
                marginTop: 20,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <div style={{ margin: '10px 20px 0 0' }}>
                The test result is: {this.state.sentimentData.label}
              </div>
              {this.state.sentimentData.label === 'neg' && (
                <img
                  style={{ width: 30, height: 30 }}
                  src="https://i.loli.net/2019/06/12/5d00aceccf1b942555.png"
                  alt="neg.png"
                  title="neg.png"
                />
              )}
              {this.state.sentimentData.label === 'neutral' && (
                <img
                  style={{ width: 30, height: 30 }}
                  src="https://i.loli.net/2019/06/12/5d00aced39c7285310.png"
                  alt="neutral.png"
                  title="neutral.png"
                />
              )}
              {this.state.sentimentData.label === 'pos' && (
                <img
                  style={{ width: 30, height: 30 }}
                  src="https://i.loli.net/2019/06/12/5d00aced3bad530244.png"
                  alt="pos.png"
                  title="pos.png"
                />
              )}
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}
