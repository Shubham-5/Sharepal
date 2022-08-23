const MoreCategories = () => {
  return (
    <>
      <h5 className='border-bottom py-2 mx-3 fs-3'>More Categories</h5>
      <div className='d-flex flex-row overflow-auto '>
        {new Array(10).fill(0).map(() => (
          <div className='more-categories-card mx-3 my-2'>
            <div className='item-img mx-4'>
              <img
                src='https://ik.imagekit.io/faskf16pg/Categories/sharepal-categories-rent-riding-gear__K2XBHlNj.webp'
                alt='camera'
              />
            </div>
            <div className='text-center my-3 fw-bold'>Riding Gear</div>
          </div>
        ))}
      </div>
    </>
  );
};

export default MoreCategories;
