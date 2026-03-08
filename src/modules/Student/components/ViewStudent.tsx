import { Card, Descriptions } from 'antd';
import { AvatarImg } from '../../../common/utils/avatar';
import { dateAndTimeFormat } from '../../../common/utils/helper.function';
import { getStatusTag, type StatusType } from '../../../common/utils/status';
import { useGetSingleStudentQuery } from '../api/StudentEndpoints';

const ViewStudent = ({ _id }: { _id: string }) => {
  const { data } = useGetSingleStudentQuery(_id, { skip: !_id });
  const {
    name,
    code,
    country_name,
    district_name,
    division_name,
    upazila_name,
    image,
    co_mobile,
    dob,
    education,
    email,
    gender,
    nid_no,
    nationality,
    occupation,
    office_address,
    relationship,
    mobile_no,
    village,
    status,
  } = data?.data || {};

  return (
    <Card className='modal-container'>
      <Descriptions
        bordered
        size='small'
        column={{ xs: 1, sm: 1, md: 2, lg: 2, xl: 2, xxl: 2 }}
        items={[
          { key: 'name', label: 'Name', children: name },
          { key: 'email', label: 'Email', children: email },
          { key: 'code', label: 'Code', children: code },
          { key: 'mobile_no', label: 'Mobile No', children: mobile_no },
          {
            key: 'country_name',
            label: 'Country Name',
            children: country_name,
          },
          {
            key: 'division_name',
            label: 'Division Name',
            children: division_name,
          },
          {
            key: 'district_name',
            label: 'District Name',
            children: district_name,
          },
          {
            key: 'upazila_name',
            label: 'Upazila Name',
            children: upazila_name,
          },
          { key: 'village', label: 'Village', children: village },
          { key: 'nid_no', label: 'NID', children: nid_no },
          { key: 'education', label: 'Education', children: education },
          { key: 'occupation', label: 'Occupation', children: occupation },
          { key: 'nationality', label: 'Nationality', children: nationality },
          { key: 'gender', label: 'Gender', children: gender },
          {
            key: 'office_address',
            label: 'Office Address',
            children: office_address,
          },
          {
            key: 'dob',
            label: 'Date of Birth',
            children: dateAndTimeFormat(dob),
          },

          {
            key: 'relationship',
            label: 'Relationship',
            children: relationship,
          },
          { key: 'co_mobile', label: 'Co Mobile', children: co_mobile },
          {
            key: 'image',
            label: 'Image',
            children: <AvatarImg src={image || ''} alt={name || ''} />,
          },
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

export default ViewStudent;
