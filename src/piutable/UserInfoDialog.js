import React, {Component} from 'react';

import {
    Row,
    Col,
    Button,
    Card,
    CardHeader,
    CardBody
} from 'reactstrap';

class UserDialog extends Component {
    constructor(props) {
        super(props);
        this.nameinput = React.createRef();
        this.lvinput = React.createRef();
    }

    nameValidCheck() {
        const regex = /^[a-zA-Z0-9]+$/;
        if (regex.test(this.nameinput.current.value) !== true)
            this.nameinput.current.value = this.nameinput.current.value.replace(/[^a-zA-Z0-9]+/, '');
    }

    addNewUser() {
        // 새 유저 UI에서 이름과 레벨 정보를 입력
        // username과 userlv를 업데이트하고 난이도 선택 버튼 표시
        const name = this.nameinput.current.value;
        const lv = this.lvinput.current.value;
        
        if(name != "" && lv != "") {
            this.props.handler(name, lv);
        }
        else {
            alert("Not enough info");
            //alert(txtPIU.newuserempty[lang]);
        }
    }

    render() {
        const prop = this.props;
        const self = this;
        if(!prop.display) {
            return null;
        }
        else {
            return (
                <Row style={{//display: prop.newuser ? "block" : "none",
                            display: "fixed",
                            borderRadius: 5, maxWidth: 500, minHeight: 300,
                            margin: "0 auto", padding: 30}}>
                    <Col xs="12">
                        <Card>
                            <CardHeader>
                                {prop.title}
                            </CardHeader>
                            <CardBody>
                                <input ref={this.nameinput} className='form-control'
                                    type='text' id='newname' placeholder='NAME'
                                    onKeyUp={() => self.nameValidCheck()} />
                                <input ref={this.lvinput} className='form-control'
                                    type='number' min='1' step='1' id='newlv'
                                    onKeyPress={(event) => (event.charCode >= 48 && event.charCode <= 57)} placeholder='LEVEL'/>
                                <Button onClick={() => self.addNewUser()}>
                                    {prop.button}
                                </Button>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            )
        }
    }
}

export default UserDialog;