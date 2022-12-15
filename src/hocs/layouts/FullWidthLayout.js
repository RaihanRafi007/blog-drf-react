import { connect } from "react-redux";
import Navbar from "../../components/navigtions/Navbar";
import Footer from "../../components/navigtions/Footer";

const FullWidthLayout = ({children}) => {
  return(
      <>
      <Navbar/>
      {children}
      <Footer/>
      </>
  )
}

const mapStateToProps = state =>({

})

export default connect(mapStateToProps,{

})(FullWidthLayout)