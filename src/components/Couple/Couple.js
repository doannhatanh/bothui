import React, { useEffect } from 'react';
import './Couple.css';
import Grom from './Card/Grom/Grom';
import Bridge from './Card/Bridge/Bridge';
import TheCoupleHeading from './TheHeading/TheCoupleHeading';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'


function Couple () {
   useEffect(() => {
       Aos.init({
           duration: 1000
       });
       Aos.refresh();
   }, []);

    return (
        <div className="Couple" data-aos='fade-left'>
            <TheCoupleHeading heading="The Couple" />
            <Container>
                <Row>
                    <Col lg={6}>
                        <Grom 
                        position="Bồ Túi" 
                        name="Đoàn Nhật Anh" 
                        // birthday="15/5/2000" 
                        scripts=""
                        color="#03c0cc"/>
                    </Col>
                    <Col lg={6}>
                        <Bridge
                        position="Bồ Thúi" 
                        name="Nguyễn Thị Ánh" 
                        // birthday="18/2/1995" 
                        scripts=""
                        color="#f0394d"/>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}  

export default Couple;