import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import * as api from "./api";
import DestinasiCreate from "./DestinasiCreate";

jest.spyOn(api, "createDestinasi").mockImplementation(() => {});

test("creates destinasi on submit", () => {
    render(
        <MemoryRouter>
            <DestinasiCreate/>
        </MemoryRouter>,
    );

    fireEvent.change(screen.getByRole("textbox"),{
        terget: { value: "New Task"},
    });

    fireEvent.click(screen.getByText("Create"));

    expect(api.CreateDestinasi).toHaveBeenCalled();
});