import { render, screen, fireEvent } from "@testing-library/react"
import App from "./App"

test("shows the page title", function() {
  render(<App />)
  expect(screen.getByText("Project Showcase")).toBeInTheDocument()
})

test("shows the starting projects", function() {
  render(<App />)
  expect(screen.getByText("Weather App")).toBeInTheDocument()
  expect(screen.getByText("Todo App")).toBeInTheDocument()
})

test("can add a new project", function() {
  render(<App />)

  const inputs = screen.getAllByRole("textbox")

  fireEvent.change(inputs[1], {
    target: { value: "New Project" },
  })

  fireEvent.change(inputs[2], {
    target: { value: "This is a new project" },
  })

  fireEvent.click(screen.getByText("Add"))

  expect(screen.getByText("New Project")).toBeInTheDocument()
})

test("search filters projects", function() {
  render(<App />)

  fireEvent.change(screen.getByPlaceholderText("Search projects..."), {
    target: { value: "Weather" },
  })

  expect(screen.getByText("Weather App")).toBeInTheDocument()
  expect(screen.queryByText("Todo App")).not.toBeInTheDocument()
})