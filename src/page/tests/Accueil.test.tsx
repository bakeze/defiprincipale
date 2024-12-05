// Accueil.test.tsx
import React from "react";
import { render, screen } from "@testing-library/react";
import Accueil from "../Accueil"; // Assurez-vous que le chemin est correct

describe("Accueil", () => {
  beforeEach(() => {
    render(<Accueil />);
  });

  test("renders the main header for the establishment presentation", () => {
    const headers = screen.getAllByText(/Présentation de l'établissement/i);
    expect(headers.length).toBe(2); // Vérifie qu'il y a 2 occurrences
    expect(headers[0]).toBeInTheDocument(); // Vérifie que la première occurrence est dans le document
  });

  test("renders the description of the establishment", () => {
    const descriptions = screen.getAllByText(/Maison Magenta est une entreprise spécialisée dans la santé intégrative/i);
    expect(descriptions.length).toBe(2); // Vérifie qu'il y a 2 occurrences
    expect(descriptions[0]).toBeInTheDocument(); // Vérifie que la première occurrence est dans le document
  });

  test("renders the role of the application header", () => {
    const roles = screen.getAllByText(/Rôle de l’application/i);
    expect(roles.length).toBe(2); // Vérifie qu'il y a 2 occurrences
    expect(roles[0]).toBeInTheDocument(); // Vérifie que la première occurrence est dans le document
  });

  test("renders the description of the application", () => {
    const descriptions = screen.getAllByText(/Cette application a pour but de suivre l’évolution de votre bien-être/i);
    expect(descriptions.length).toBe(2); // Vérifie qu'il y a 2 occurrences
    expect(descriptions[0]).toBeInTheDocument(); // Vérifie que la première occurrence est dans le document
  });

});