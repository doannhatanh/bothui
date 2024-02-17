import React , {useEffect} from 'react';
import './Wedding.css';
import TheHeading from '../Couple/TheHeading/TheCoupleHeading';
import Heading from './Heading/Heading';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Paragraph from './Paragraph/Paragraph';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from './Card/Card';
import { faHeartBroken, faSadCry, faKissWinkHeart } from '@fortawesome/free-solid-svg-icons';


function Wedding() {

    useEffect(() => {
        Aos.init({
            duration: 1000
        });
        Aos.refresh();
    }, []);

    return (
        <div className="Wedding" data-aos='fade-left'>
            <TheHeading heading="Remember"/>
            <div className="WeddingContainer">
                <Heading 
                    grom="Đoàn Nhật Anh" 
                    bridge="Nguyễn Thị Ánh"/>
                <Paragraph sentence="Đưa tay đây nào mãi bên nhau bạn nhé"/>
                <div className="Contain">
                    <Row>
                        <Col lg={4}>
                            <Card 
                                icon={faHeartBroken} 
                                color="#65d6ce"
                                title="Lời tỏ tình đầu tiên bị từ chối"
                                time="20 giờ 26, 10 tháng 7, 2023"
                                address="Cái ni em không thích nhắn ưng nói cho chân thành. Nhưng thôi chị đừng áp lực..."
                                />
                        </Col>
                        <Col lg={4}>
                            <Card 
                                icon={faSadCry} 
                                color="#65d6ce"
                                title="Bồ thúi tụt mood trong lúc tìm hiểu"
                                time="15 giờ 12, 22 tháng 7, 2023"
                                address="Nhưng cách cư xử của e lại như c là của e rồi chứ không phải là tán tỉnh..."/>
                        </Col>
                        <Col lg={4}>
                            <Card 
                                icon={faKissWinkHeart} 
                                color="#65d6ce"
                                title="Bồ thúi đổ như cột chuối. Ngỏ lời yêu"
                                time="22 giờ 44, 14 tháng 8, 2023"
                                address="Bực ghê luôn. Tôi buồn bạn quá. Thôi giờ thế này. Sao lại ép mình nói vậy. Yêu nhá. Oke không"/>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    )
}

export default Wedding;