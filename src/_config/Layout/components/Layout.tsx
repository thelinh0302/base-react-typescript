import React from 'react';

const Layout: React.FC = ({ children }) => {
  return (
    <div className="d-flex flex-column flex-root">
      <div className="d-flex flex-row flex-column-fluid page">
        {/*Begin Aside*/}
        <div className="aside aside-left d-flex flex-column flex-row-auto">
          {/* begin::Aside Menu */}
          <div
            id="kt_aside_menu_wrapper"
            className="aside-menu-wrapper flex-column-fluid"
          >
            <>
              {/* begin::Header Logo */}
              <div className="header-logo">logo ne</div>
              {/* end::Header Logo */}
            </>
          </div>
        </div>
        {/*end aside*/}
        {/*begin::Wrapper*/}
        <div
          className="d-flex flex-column flex-row-fluid wrapper"
          id="kt_wrapper"
        >
          Header
          {/*begin::Content*/}
          <div
            id="kt_content"
            className={`content d-flex flex-column flex-column-fluid`}
          >
            {/*{layoutProps.subheaderDisplay && <SubHeader/>}*/}
            {/*begin::Entry*/}
            {/*{!layoutProps.contentExtended && (*/}
            <div className="d-flex flex-column-fluid">
              {/*begin::Container*/}
              <div>{children}</div>
              {/*end::Container*/}
            </div>
            {/*end::Entry*/}
          </div>
          {/*end::Content*/}
          {/*<Footer/>*/}
        </div>
        {/*end::Wrapper*/}
      </div>
    </div>
  );
};
export default Layout;
