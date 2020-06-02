import React from 'react';
import Button from 'antd/lib/button';
import { Input, Table, Alert, Divider, Descriptions, Tag } from 'antd';
import axios from 'axios';
import qs from 'qs';

import './index.css';

const { TextArea } = Input;

// We are very happy to see the ML ModelCI and believe it can make great contributions to the MM community!

export default class BERT extends React.Component {
  private judgeColumns = [
    {
      className: 'column',
      title: 'positive',
      dataIndex: 'pos',
      key: 'pos',
      render: (text, record, index) => {
        text = (text * 100).toFixed(5);
        const { pos, neg, neutral } = record;
        return pos > neg && pos > neutral ? (
          <div style={{ color: 'red', fontWeight: 'bold', fontSize: 25 }}>
            {text}%
          </div>
        ) : (
          <div style={{ fontSize: 25 }}>{text}%</div>
        );
      },
    },
    {
      className: 'column',
      title: 'negative',
      dataIndex: 'neg',
      key: 'neg',
      render: (text, record, index) => {
        const { pos, neg, neutral } = record;
        text = (text * 100).toFixed(5);
        return neg > pos && neg > neutral ? (
          <div style={{ color: 'red', fontWeight: 'bold', fontSize: 25 }}>
            {text}%
          </div>
        ) : (
          <div style={{ fontSize: 25 }}>{text}%</div>
        );
      },
    },
    {
      className: 'column',
      title: 'neutral',
      dataIndex: 'neutral',
      key: 'neutral',
      render: (text, record, index) => {
        const { pos, neg, neutral } = record;
        text = (text * 100).toFixed(5);
        return neutral > pos && neutral > neg ? (
          <div style={{ color: 'red', fontWeight: 'bold', fontSize: 25 }}>
            {text}%
          </div>
        ) : (
          <div style={{ fontSize: 25 }}>{text}%</div>
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
    const targetUrl = 'http://text-processing.com/api/sentiment/';

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
            fontSize: 20,
          }}
          message="BERT Application on Descriptive Text Sentiment Analysis"
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
                27.1429 %
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
                91.04303 req/sec
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
                11.08014 ms
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
                11.45675 ms
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
                11.98774 ms
              </Tag>
            </Descriptions.Item>
          </Descriptions>
        </div>
        <Divider orientation="left" style={{ fontSize: 25 }}>
          Test Panel
        </Divider>
        <p className="text-small" style={{ fontSize: 20 }}>
          Please type any texts in the area below, and click the
          <strong> Click to Test</strong> button to analyse the sentiments.
          <Button
            loading={this.state.isJudging}
            type="primary"
            size="large"
            style={{ marginLeft: '20px' }}
            onClick={() => {
              this.loadTextToJudge(this.state.textForJudge);
              this.setState({
                isJudging: true,
              });
            }}
          >
            Click to Test!
          </Button>
        </p>
        <TextArea
          style={{
            fontSize: 28,
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
        <Divider orientation="left" style={{ fontSize: 25 }}>
          Tested Results
        </Divider>
        {this.state.sentimentData ? (
          <div>
            <Table
              size="middle"
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
              <div style={{ margin: '10px 20px 0 0', fontSize: 25 }}>
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
