export const FooterNav = ({title, nav}) => {
 let menuTab = []
 nav.forEach(e => {
     menuTab.push(<li key={e}>{e}</li>)
 })

  return (
    <div className="footer__middle--site-map">
      <h5 className="footer--heading">
        {title} <i className="fas fa-arrow-up"></i>
      </h5>
      <ul>
        {menuTab}
      </ul>
    </div>
  );
};
