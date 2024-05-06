import React, { useState } from 'react';
import { EyeOutlined, GithubOutlined, HeartOutlined, LinkOutlined, LoadingOutlined, UserOutlined } from '@ant-design/icons';
import { Avatar, Card } from 'antd';
import { Row, Col } from 'antd';
import { fetchAllData } from '../../api/apiRequest';

function Oeuvretypewordpress() {
  const { Meta } = Card;
  const alldata = fetchAllData();
  const [selectedItem, setSelectedItem] = useState(null);

  if (!Array.isArray(alldata) || alldata.length === 0) {
    return (
      <div className="flex justify-center items-center h-96">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-500 border-t-transparent"></div>
      </div>
    );
  }

  const webData = alldata.filter(item => item.type === 'wordpress');

  if (webData.length === 0) {
    return (
      <div>
        <p>Aucune œuvre de type "wordpress" n'a été trouvée.</p>
      </div>
    );
  }

  const handleCardClick = (item) => {
    setSelectedItem(item);
  };

  return (
    <div>
      <Row gutter={[12, 12]} className="mt-6 mb-6">
        {webData.map((item, index) => (
          <Col key={index} span={6} xs={24} sm={12} md={8} lg={6} xl={6}>
            <Card
              hoverable
              style={{
                width: '100%',
                maxWidth: 360,
                margin: '0 auto',
                height: '100%',
              }}
              cover={
                item.profile2 ? (
                  <div
                    style={{
                      position: 'relative',
                      paddingTop: '56.25%',
                      overflow: 'hidden',
                    }}
                  >
                    <img
                      src={item.profile2}
                      alt="example"
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                      }}
                    />
                  </div>
                ) : (
                  <div
                    style={{
                      position: 'relative',
                      paddingTop: '56.25%',
                      overflow: 'hidden',
                      backgroundColor: '#f0f0f0',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <UserOutlined style={{ fontSize: '48px', color: '#bfbfbf' }} />
                  </div>
                )
              }
              actions={[
                <div>
                  <HeartOutlined />
                  <span>{item.like} K</span>
                </div>,
                <div>
                  <EyeOutlined />
                  <span>{item.share} K</span>
                </div>,
                <GithubOutlined />,
                <LinkOutlined />,
              ]}
              onClick={() => handleCardClick(item)}
            >
              <Meta
                avatar={<Avatar src={item.profile3} />}
                title={item.auteur}
                description={`Type: ${item.type} | Date: ${new Date(item.date_publication).toLocaleString()}`}
              />
            </Card>
          </Col>
        ))}
      </Row>

      {selectedItem && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
            <div className="flex justify-end mb-4">
              <button
                className="text-gray-500 hover:text-gray-700"
                onClick={() => setSelectedItem(null)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="mb-4">
              {selectedItem.profile2 && (
                <img
                  src={selectedItem.profile2}
                  alt={selectedItem.auteur}
                  className="w-full h-auto rounded-lg"
                />
              )}
            </div>
            <hr />
            <div className="flex items-center mb-4">
              {(selectedItem.profile2 || selectedItem.profile3) && (
                <div className="mr-4">
                  <Avatar src={selectedItem.profile2 || selectedItem.profile3 || ''} />
                </div>
              )}
              <div className="flex-1">
                <h2 className="text-xl font-bold">{selectedItem.auteur}</h2>
                <p>
                  Type: {selectedItem.type} | Date: {new Date(selectedItem.date_publication).toLocaleString()}
                </p>
              </div>
            </div>
            <hr />
            <div className="flex justify-between">
              <div>
                <p>Likes: {selectedItem.like} K</p>
                <p>Partages: {selectedItem.share} K</p>
              </div>
              <div>
                <GithubOutlined />
                <LinkOutlined />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Oeuvretypewordpress;
