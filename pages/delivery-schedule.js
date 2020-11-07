import { Col, Row } from "antd";
import {DeliverySummary} from "../components/DeliverySumamry";
import {DeliveryScheduler} from "../components/DeliveryScheduler";
import { TextBox } from "../components/TextBox";
import {GoogleMaps} from '../components/GoogleMaps';
import { Typography } from "antd";
const summaryProps = {
    title: "Helsinki Cafe",
    nextScheduledDelivery: "Nov 15, 10am-12pm",
    orderFrequency: "Weekly"
  };

const textBoxProps = {
  textValue : 'Pssst... Did you know, scheduling joint deliveries with another local vendor not only saves you money but is also great for the environment!'
}

export default function DeliverySchedule() {
  return (
    <div className="c-delivery__container">
        <Row className="c-delivery__row">
            <Col span={8} offset={8}>
                <DeliverySummary {...summaryProps}/>
                
            </Col>
        </Row>
        <Row className="c-delivery__row">
            <Col span={11}>
              <DeliveryScheduler/>
              <TextBox {...textBoxProps}/>
            </Col>
            <Col offset={2}  span={11}>
              <Typography.Title>Find local vednors</Typography.Title>
              <GoogleMaps/>
            </Col>
        </Row>

    </div>
  );
}
