import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
// import MdLocationOn from 'react-icons/md';
const ListingItem = ({ listing }) => {
  ListingItem.propTypes = {
    listing: PropTypes.shape({
      _id: PropTypes.string.isRequired,
      userRef: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      imageUrls: PropTypes.array.isRequired,
      address: PropTypes.string,
      discountPrice: PropTypes.number,
      regularPrice: PropTypes.number,
      offer: PropTypes.bool,
      type: PropTypes.string,
      bedrooms: PropTypes.number,
      bathrooms: PropTypes.number,
    }).isRequired,
  };
  return (
    <div className='bg-white shadow-md hover:shadow-lg transition-shadow duration-200 overflow-hidden rounded-lg w-full sm:w-[330px]'>
      <Link to={`/listing/${listing._id}`}>
        <img
          src={
            listing.imageUrls[0] ||
            'https://th.bing.com/th/id/OIP.gEY6PQAA_z6TL_QK5jGDvAHaE8?pid=ImgDet&rs=1'
          }
          alt='listing cover'
          className='w-full h-[320px] sm:h-[220px] object-cover hover:scale-105 transition-scale duration-300'
        />
        <div className='p-3 flex flex-col gap-2 w-full'>
          <p className='text-lg font-semibold text-slate-700 truncate'>
            {listing.name}
          </p>
          <div className='flex items-center gap-2'>
            {/* <MdLocationOn className='h-4 w-4 text-green-700 ' /> */}
            <p className='text-sm text-gray-600 truncate w-full'>
              {listing.address}
            </p>
          </div>
          <p className='text-sm text-gray-600 line-clamp-2'>
            {listing.address}
          </p>
          <p className='text-slate-500 mt-2 font-semibold'>
            {listing.offer
              ? listing.discountPrice.toLocaleString('en-US')
              : listing.regularPrice.toLocaleString('en-US')} {' $ '}
            {listing.type === 'rent' && ' / month'}
          </p>
          <div className='text-slate-700 flex gap-4 '>
            <div className='font-bold text-xs'>
              {listing.bedrooms > 1
                ? `${listing.bedrooms} beds`
                : `${listing.bedrooms} bed`}
            </div>
            <div className='font-bold text-xs'>
              {listing.bathrooms > 1
                ? `${listing.bathrooms} baths`
                : `${listing.bathrooms} bath`}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ListingItem;