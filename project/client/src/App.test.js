import { render, screen } from "@testing-library/react";
import Form from "./Form";
import Cars from "./Cars";
import App from "./App";
var testCar = {
  brand: "testBrand",
  model: "testModel",
  year: "testYear",
  color: "testColor",
};
it("Cars testing", () => {

  render(
    <Cars
      brand={testCar.brand}
      model={testCar.model}
      year={testCar.year}
      color={testCar.color}
    />
  );
  let f = screen.getAllByRole("textbox");
  f.forEach((el) => {
    switch (el.name) {
      case "brand":
        expect(el.value == testCar.brand);
        break;
      case "model":
        expect(el.value == testCar.model);
        break;
      case "year":
        expect(el.value == testCar.year);
        break;
      case "color":
        expect(el.value == testCar.color);
        break;
      case "image":
        break;
      default:
        throw EvalError(el.name + " is not defigned");
    }
  });
});

var testForm = {
  owner:'testOwner',
  address:'testAddress',
  cars:testCar,
}
it("Form testing", () => {
  
  render(
    <Form
    owner = {testForm.owner}
    address = {testForm.address}
    cars = {[testCar]}
     />
  );
  //let buttons = screen.getAllByRole('form');
 expect(screen.queryAllByText('❌'));
 expect(screen.queryAllByText('➕'));
 expect(screen.queryAllByText('save'));
 expect(screen.getByDisplayValue('testOwner')).toBeInTheDocument();
 expect(screen.getByDisplayValue('testAddress')).toBeInTheDocument();

  
});