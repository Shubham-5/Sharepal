const Coupons = () => {
  return (
    <>
      {" "}
      <h5 className='fs-3 mx-3'>Coupons for you</h5>
      <div className='d-flex flex-row overflow-auto '>
        {new Array(10).fill(0).map(() => (
          <div className='coupons-categories-card mx-3 my-2'>
            <div className='discount d-flex justify-content-center align-items-center my-4'>
              10% <br />
              Off
            </div>
            <div className='m-3'>
              <h6 className='fw-normal lh-1 p-0 m-0'>Riding Gear</h6>
              <small className='fs-9 text-muted'>
                Get 5% Flat Off. Applicable If You Order At Least 5 Days
                Before...
              </small>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Coupons;
