import { render, screen } from "@testing-library/react";
import { GiftItem } from "../../src/components/GiftItem";

describe("Pruebas en <Gifitem />", () => {
  const title = "Saitama";
  const url = "https://one-punch.com/saitama.jpg";
  test("Debe hacer match con el snapshot", () => {
    const { container } = render(<GiftItem title={title} url={url} />);
    expect(container).toMatchSnapshot();
  });
  test("Debe de mostrar la imagen con el URL y el ALT indicado", () => {
    render(<GiftItem title={title} url={url} />);
    // screen.debug();
    // expect(screen.getByRole('img').src).toBe(url);
    // expect(title).toBe(screen.getByRole('img').alt);
    const {src, alt} = screen.getByRole('img');
    expect(src).toBe(url);
    expect(alt).toBe(title);
  });
  test("debe mostrar el titulo en el componente",()=>{
    render(<GiftItem title={title} url={url} />);
    expect(screen.getByText(title)).toBeTruthy();
  })
});
