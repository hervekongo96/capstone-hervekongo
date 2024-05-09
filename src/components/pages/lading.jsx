import React, { useState } from 'react';
import { EyeOutlined, GithubOutlined, HeartOutlined, LinkOutlined, LoadingOutlined, UserOutlined } from '@ant-design/icons';
import { Avatar, Card } from 'antd';
import { Row, Col } from 'antd';
import { fetchAllData } from '../../api/apiRequest';
import { FaEnvelope } from 'react-icons/fa';

function Ladingcard() {

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

  const handleCardClick = (item) => {
    setSelectedItem(item);
  };

  return (
    <div>
      <Row gutter={[12, 12]} className="mt-6 mb-6">
        {alldata.map((item, index) => (
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
                avatar={<Avatar src={item.profile_auteur} />}
                title={item.auteur}
                description={`Type: ${item.type}| Detail: ${item.detail} | Date: ${new Date(item.date_publication).toLocaleString()}`}
              />
            </Card>
          </Col>
        ))}
      </Row>
      {selectedItem && (
        <div className="fixed top-0 left-0 w-screen h-screen bg-gray-800 bg-opacity-50 flex justify-center items-center z-50 overflow-y-auto">
          <div className="bg-white sm:mx-0 w-full sm:w-auto max-h-[90%] overflow-y-auto">
            <div className="flex justify-end mt-4 mb-4 mr-2">
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
            <div className="px-4 pb-4">
              <div className="w-full sm:w-[50rem] mx-auto">
                <div className="h-[400px] w-full bg-cover bg-center" style={{ backgroundImage: `url(${selectedItem.profile2})` }} />
                <div className="flex justify-center mt-4 gap-4 flex-wrap">
                  <div
                    className="w-[200px] h-[150px] bg-cover bg-center cursor-pointer"
                    style={{ backgroundImage: `url(${selectedItem.profile1})` }}
                  ></div>
                  <div
                    className="w-[200px] h-[150px] bg-cover bg-center cursor-pointer"
                    style={{ backgroundImage: `url(${selectedItem.profile2})` }}
                  ></div>
                  <div
                    className="w-[200px] h-[150px] bg-cover bg-center cursor-pointer"
                    style={{ backgroundImage: `url(${selectedItem.profile3})` }}
                  ></div>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="mx-4 my-8 w-full max-w-md">
                  <div className="flex items-center p-4">
                    <img src={`${selectedItem.profile_auteur}`} alt="Avatar" className="h-16 w-16 rounded-full mr-4" />
                    <div>
                      <h3 className="font-bold">{selectedItem.auteur}</h3>
                      <div className="text-gray-500">
                        <a href={`${selectedItem.hebergerlink}`} className="hover:underline">Application</a> | <a href={`${selectedItem.githublink}`} className="hover:underline">GitHub</a> | <a href={`${selectedItem.figmalink}`} className="hover:underline">Figma</a>
                      </div>
                      <p>{selectedItem.detail}</p>
                    </div>
                    <button className="block bg-blue-700 hover:bg-blue-800 text-white w-25 py-1 px-2 ml-2 rounded flex justify-center items-center">
                      <FaEnvelope />
                      <span className="ml-2">Envoyer</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Ladingcard;
