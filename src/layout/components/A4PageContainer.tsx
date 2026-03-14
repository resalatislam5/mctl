import { useRef, type ReactNode } from 'react';
import CommonButton from '../../common/Button/CommonButton';
import { useReactToPrint } from 'react-to-print';
import { ConfigProvider, theme } from 'antd';
import generatePDF, { Margin } from 'react-to-pdf';

type Props = {
  content: ReactNode;
  document_title: string;
  showDownload?: boolean;
  showPrint?: boolean;
};
const A4PageContainer = ({ content, document_title }: Props) => {
  const contentRef = useRef<HTMLDivElement>(null);

  const handlePrint = useReactToPrint({
    contentRef,
    documentTitle: document_title,
  });

  return (
    <div style={{ overflow: 'auto' }}>
      <ConfigProvider theme={{ algorithm: theme.defaultAlgorithm }}>
        <div
          style={{
            width: '210mm',
            border: '1px dotted #000',
            margin: '0 auto',
            position: 'relative',
            marginTop: 40,
            padding: 10,
            background: '#fff',
            color: '#000',
          }}
        >
          <CommonButton
            onClick={handlePrint}
            text='Print'
            icon='material-symbols-light:print-outline'
            style={{ position: 'absolute', top: -40, right: 0 }}
          />
          <CommonButton
            onClick={() =>
              generatePDF(contentRef, {
                filename: `${document_title}.pdf`,
                page: {
                  margin: Margin.SMALL,
                },
              })
            }
            text='Download'
            icon='material-symbols:download'
            style={{ position: 'absolute', top: -40, right: 95 }}
          />
          <div ref={contentRef}>{content}</div>
        </div>
      </ConfigProvider>
    </div>
  );
};

export default A4PageContainer;
