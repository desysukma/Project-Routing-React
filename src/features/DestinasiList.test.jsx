import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import  DestinasiList from "./DestinasiList";
import * as api from "./api";

jest
  .spyOn(api, "fetchTodos")
  .mockReturnValue([{ id: "1", title: "Mock Destinasi", completed: false }]);

test("renders destinasi", () => {
  render(
    <MemoryRouter>
      <DestinasiList />
    </MemoryRouter>,
  );

  expect(screen.getByText("Mock Destinasi")).toBeInTheDocument();
});