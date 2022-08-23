const Sidebar = () => {
  return (
    <>
      <div className='col-md-3 ms-md-4 my-5'>
        <h5 className='border-bottom pb-2 d-none d-md-block'>Sub Categories</h5>
        <ul class='list-group list-group-flush d-none d-md-block'>
          <li class='list-group-item border-bottom-0 d-flex justify-content-between align-items-center'>
            A list item
            <span class='badge bg-primary rounded-pill'>14</span>
          </li>
          <li class='list-group-item border-bottom-0 d-flex justify-content-between align-items-center'>
            A second list item
            <span class='badge bg-primary rounded-pill'>2</span>
          </li>
          <li class='list-group-item border-bottom-0 d-flex justify-content-between align-items-center active'>
            Action Camera Mount
            <span class='badge bg-primary rounded-pill'>1</span>
          </li>
        </ul>

        <ul className='d-md-none m-sidebar'>
          <div>
            <li className='m-item  me-2 px-2 py-1 fw-bold '>A list item</li>
          </div>
          <div>
            <li className='m-item  me-2 px-2 py-1 fw-bold '>A list item</li>
          </div>
          <div>
            <li className='m-item  me-2 px-2 py-1 fw-bold '>A list item</li>
          </div>
          <div>
            <li className='m-item me-2 px-2 py-1 fw-bold m-item-active'>
              A list item
            </li>
          </div>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
