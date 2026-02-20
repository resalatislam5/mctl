import { Col, Image, Row, theme } from 'antd';
import { Outlet } from 'react-router';
import { auth_3 } from '../../common/ui/image';
import { useBreakpoint } from '../../common/utils/constant';

const AuthLayout = () => {
  const { lg, md, sm } = useBreakpoint();
  const { token } = theme.useToken();
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: `${token.colorPrimary}20`,
        padding: '20px',
      }}
    >
      <Row
        style={{
          height: '600px',
          backgroundColor: '#fff',
          maxWidth: '1100px',
          width: '100%',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '20px',
          borderRadius: '20px',
          boxShadow:
            '0 4px 12px rgba(255, 255, 255, 0.35), 0 0 30px rgba(255, 255, 255, 0.2);',
          position: 'relative',
        }}
        gutter={[lg ? 140 : sm ? 40 : 20, 0]}
      >
        <div style={{ position: 'absolute', top: 20, left: 20 }}>
          <Image src='/logo.png' alt='Logo' width={60} preview={false} />
        </div>
        <Col md={12}>
          <Outlet />
        </Col>
        <Col
          md={12}
          hidden={!md}
          style={{
            height: '100%',
            width: '100%',
            paddingInline: '0px !important',
            paddingLeft: 50,
          }}
        >
          <div style={{ width: 'inherit' }}>
            <Image
              src={auth_3}
              alt={`auth`}
              style={{
                objectFit: 'cover',
                height: '550px',
                borderRadius: '0 20px  20px 0',
                width: '100%',
              }}
              preview={false}
            />
          </div>
          {/* <Carousel autoplay>
            {[auth_3].map((image, index) => (
              <div key={index}>
                <Image
                  src={image}
                  alt={`auth_${index + 1}`}
                  style={{
                    objectFit: 'cover',
                    height: '550px',
                    borderRadius: '0 40px  40px 0',
                    width: '100%',
                  }}
                  preview={false}
                />
              </div>
            ))}
          </Carousel> */}
        </Col>
      </Row>
    </div>
  );
};

export default AuthLayout;
