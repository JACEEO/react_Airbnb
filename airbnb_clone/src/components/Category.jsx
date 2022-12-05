import React from "react";
import styled from "styled-components";
import main from "../hook/data.json";

export default function Category() {
  return (
    <CategoryBox>
      {main.category.map((app) => {
        return (
          <button
            class="category-btn"
            role="radio"
            aria-checked="true"
            type="button"
          >
            <div class="category-btn-div">
              <span class="category-span">
                <img
                  class="category-img"
                  src={app.src}
                  alt={app.name}
                  width="24"
                  height="24"
                />
                <div>
                  <span class="category-font">{app.name}</span>
                </div>
              </span>
            </div>
          </button>
        );
      })}
    </CategoryBox>
  );
}

const CategoryBox = styled.div`
  padding: 18px 0;

  width: 100%;
  height: 98px;
  max-width: 1200px;

  position: unset;
  height: 100%;
  background-color: #ffffff;

  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: max-content;
  grid-column-gap: 32px;

  padding-left: 80px;

  overflow: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;
