import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import DestinasiEdit from "./DestinasiEdit";
import * as api from "./api";
import { MemoryRouter, Route, Routes } from "react-router";

const mockId = "test-id";

jest.spyOn(api, "getTodoById").mockReturnValue({
  id: mockId,
  title: "Old Title",
  completed: false,
});

jest.spyOn(api, "updateDestinasi").mockImplementation(() => {});

function renderWithRouter() {
  return render(
    <MemoryRouter initialEntries={[`/todos/${mockId}/edit`]}>
      <Routes>
        <Route path="/destinasi/:id/edit" element={<DestinasiEdit />} />
        <Route path="/destinasi/:id" element={<div>Detail Page</div>} />
      </Routes>
    </MemoryRouter>,
  );
}

describe("DestinasiEdit", () => {
  test("renders existing destinasi", () => {
    renderWithRouter();

    expect(screen.getByDisplayValue("Old Title")).toBeInTheDocument();
  });

  test("updates destinasi on submit", () => {
    renderWithRouter();

    const input = screen.getByDisplayValue("Old Title");

    fireEvent.change(input, {
      target: { value: "Updated Title" },
    });

    fireEvent.click(screen.getByText("Save"));

    expect(api.updateDestinasi).toHaveBeenCalledWith(
      mockId,
      expect.objectContaining({ title: "Updated Title" }),
    );
  });
});