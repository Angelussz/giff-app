import { render, screen } from "@testing-library/react";
import { GiftGrid } from "../../src/components/";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock("../../src/hooks/useFetchGifs");

describe("Pruebas en <GifGrid />", () => {
  const category = "One punch";
  test("debe de mostrar el loading inicialmente", () => {
    useFetchGifs.mockReturnValue({
      images: [],
      isLoading: true,
    });
    render(<GiftGrid category={category} />);
    // screen.debug();
    expect(screen.getByText("Cargando ..."));
    expect(screen.getByText(category));
  });
  test("Deben mostrar items cuando se cargan las imágenes useFetchGifs ", () => {
    const gifs = [
      {
        id: "ABC",
        title: "Saitama",
        url: "https://localhost/saitama.jpg",
      },
      {
        id: "123",
        title: "Goku",
        url: "https://localhost/goku.jpg",
      },
    ];
    useFetchGifs.mockReturnValue({
      images: gifs,
      isLoading: false,
    });
    render(<GiftGrid category={category} />);
    screen.debug();
    expect(screen.getAllByRole('img').length).toBe(2);
    // expect(screen.getByText("Cargando ..."));
    // expect(screen.getByText(category));
  });
});
