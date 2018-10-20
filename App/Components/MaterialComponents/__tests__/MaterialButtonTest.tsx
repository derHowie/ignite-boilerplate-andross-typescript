import "react-native";
import * as React from "react";
import { shallow } from "enzyme";
import * as renderer from "react-test-renderer";
import MaterialButton from "../MaterialButton";

test("FullButton component renders correctly", () => {
  const tree = renderer.create(<MaterialButton color={'blue'} onPress={() => {}} text="hi" />).toJSON();
  expect(tree).toMatchSnapshot();
});

test("onPress", () => {
  let i = 0; // i guess i could have used sinon here too... less is more i guess
  const onPress = () => i++;
  const wrapperPress = shallow(<MaterialButton color={'blue'} onPress={onPress} text="hi" />);

  expect(wrapperPress.prop("onPress")).toBe(onPress); // uses the right handler
  expect(i).toBe(0);
  wrapperPress.simulate("press");
  expect(i).toBe(1);
});