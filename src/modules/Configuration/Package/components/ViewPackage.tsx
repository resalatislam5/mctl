import { Card, Descriptions, Typography } from 'antd';
import { getStatusTag, type StatusType } from '../../../../common/utils/status';
import { useGetSinglePackageQuery } from '../api/packageEndpoints';

const ViewPackage = ({ _id }: { _id: string }) => {
  const { data } = useGetSinglePackageQuery(_id, { skip: !_id });
  const {
    additional_discount,
    discount,
    net_price,
    total_price,
    name,
    status,
    courses,
  } = data?.data || {};
  return (
    <Card className='modal-container'>
      <Descriptions
        column={1}
        bordered
        items={[
          { key: 'name', label: 'Name', children: name },
          {
            key: 'course_name',
            label: 'Course Name',
            children: courses?.map((item, index) => (
              <Typography.Paragraph key={item._id}>
                {index + 1}. {item.name}
              </Typography.Paragraph>
            )),
          },
          { key: 'total_price', label: 'Total Price', children: total_price },
          { key: 'discount', label: 'Discount(%)', children: discount },
          {
            key: 'additional_discount',
            label: 'Additional Discount',
            children: additional_discount,
          },
          { key: 'net_price', label: 'Net Price', children: net_price },

          {
            key: 'status',
            label: 'Status',
            children: getStatusTag(status as StatusType),
          },
        ]}
      />
    </Card>
  );
};

export default ViewPackage;
