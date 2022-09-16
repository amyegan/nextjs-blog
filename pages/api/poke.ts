import { NextRequest, NextResponse } from "next/server";

export default (req: NextRequest) => {
  return fetch("https://pokeapi.co/api/v2/pokemon/eevee")
    .then((response) => response.json())
    .then((data) => {
      return NextResponse.json({
        name: "eevee",
        data,
      });
    });
};

export const config = {
  runtime: "experimental-edge",
};
