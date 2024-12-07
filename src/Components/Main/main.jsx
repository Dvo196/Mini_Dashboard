import img1 from "../../Images/img1.png"
import img2 from "../../Images/img2.png"
import img3 from "../../Images/img3.png"
import img4 from "../../Images/img4.png"
import img5 from "../../Images/img5.png"
import img6 from "../../Images/img6.png"
import img7 from "../../Images/img7.png"
import userAvatar from "../../Images/userAvatar.png"
import "./main.css"
import {
    MDBIcon,
    MDBCollapse,
    MDBRipple,
    MDBListGroup,
    MDBListGroupItem
} from 'mdb-react-ui-kit';
function Main() {
    return (
        <>
            <div className="main ms-5">
                <div className="pack_1_images ms-5">
                    <div className="ms-5">
                        <div className="ms-5">
                            <img className="ms-5" src={img1} alt='img1' />
                            <img className="ms-4" src={userAvatar} alt="userAvatar" />
                            <img className="ms-4" src={img2} alt='' />
                        </div>
                    </div>
                </div>
                <div className="mt-3 ms-5">
                    <div className="ms-5">
                        <div className="ms-5">
                            <img className="pack_3_images" src={img3} alt='' />
                            <img src={img4} alt='' />
                            <img src={img5} alt='' />
                        </div>
                    </div>
                </div>
                <div className="mt-3 ms-5">
                    <div className="ms-5">
                        <div className="ms-5">
                            <div className="ms-4">

                                <img src={img6} alt='' />
                                <img src={img7} alt='' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Main