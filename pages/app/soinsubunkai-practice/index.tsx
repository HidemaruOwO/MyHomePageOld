import type {NextPage} from "next";
import {ChangeEventHandler, useState} from "react";
import {Button, Container, Form, FormControl, InputGroup, ToggleButton} from "react-bootstrap";

const SoinsubunkaiPractice: NextPage = () => {
    const [bunkaiNumber, setBunkaiNumber] = useState<number>(0);
    const [bunkaiNumberAria, setBunkaiNumberAria] = useState<JSX.Element>(<h3>素因数分解する数を生成してください</h3>);
    const [radioValue, setRadioValue] = useState("1");
    var selectValue: string = "noValue";
    const radios = [
        {name: "素数を含む", value: "1"},
        {name: "素数を含まない", value: "2"}
    ];

    const onChangeKetasu: ChangeEventHandler<HTMLSelectElement> = async (e) => {
        selectValue = e.target.value;
        console.log(selectValue+":onChange");
    };
    const onClickGenBunkaiNumber = async () => {
        console.log(selectValue+":onClick");
        if (selectValue === "noValue") {
            alert("桁数を選択してください");
            return;
        }
        var min: string = "1";
        var max: string = "9";
        for (var ketasu: number = parseInt(selectValue); ketasu -= 1; ketasu === 0) {
            min = min + "0";
            max = max + "9";
        }
        const bunkaiNumberArray: number[] = [...Array(parseInt(max))].map((_, i: number) => i + parseInt(min));
        await setBunkaiNumber(bunkaiNumberArray[Math.floor(Math.random() * bunkaiNumberArray.length)]);
        await setBunkaiNumberAria(
            <>
                <h3>{bunkaiNumber}</h3>
                <p>を素因数分解せよ</p>
            </>
        );
    };
    return (
        <>
            <div className={"headerBlock"}/>
            <Container>
                <h2 className={"heading"}>素因数分解練習</h2>
                {bunkaiNumberAria}
                <hr/>
                <h3>生成する数の設定</h3>
                <Form.Select onChange={onChangeKetasu}>
                    <option value={"noValue"}>桁数を指定</option>
                    {
                        [...Array(9)].map((_, i: number) => i + 1).map((i: number, index: number) => (
                            <option value={i} key={index}>{i}桁</option>
                        ))
                    }
                </Form.Select>
                <div className={"blank"}/>
                {radios.map((radio, idx) => (
                    <ToggleButton
                        key={idx}
                        id={`radio-${idx}`}
                        type="radio"
                        variant={idx % 2 ? "outline-success" : "outline-danger"}
                        name="radio"
                        value={radio.value}
                        checked={radioValue === radio.value}
                        onChange={(e) => setRadioValue(e.currentTarget.value)}
                    >
                        {radio.name}
                    </ToggleButton>
                ))
                }
                <div className={"blank"}/>
                <InputGroup className="mb-3">
                    <FormControl
                        placeholder="答えを入力(例: 2^3*13)"
                        aria-describedby="basic-addon2"
                    />
                    <Button variant="outline-secondary" id="button-addon2">
                        答え合わせ
                    </Button>
                </InputGroup>
                <Button variant={"primary"} onClick={onClickGenBunkaiNumber}>生成</Button>
            </Container>
        </>
    );
};

export default SoinsubunkaiPractice;
