import styled from "styled-components";

export const Container = styled.div`
    position:relative;
`

export const ShowCart = styled.button`
    background-color: #2b003b;
      border: none;
      border-radius: 5px;
      color: #fff;
      padding: 10px 15px;
      cursor: pointer 
`

export const ContainerListArticles = styled.div`
    background-color: #a863cf;  
      border-radius: 5;
      box-shadow: 0 0 15px rgba(0, 0, 0, 0.4);
      /* background-color: #fff; */
      color: #000;
      padding: 10px;
      position: absolute;
      right: 0;
      top: 50px;
      width: 400px,
`

export const ListArticles = styled.ul`
      list-style-type: none;
      margin: 0px;
      padding: 0px;
`

export const Article = styled.li`
      align-items: center;
      border-bottom: 1px dashed #ccc;
      display: flex;
      justify-content: space-between;
      margin-bottom: 10px;
      padding-bottom: 5px;
`

export const DeleteArticle = styled.button`
      border: none;
      background-color: #fb0207;
      border-radius: 50%;
      color: #fff;
      cursor: pointer;
      font-size: 0.6em;
      padding: 2px 5px;
      /* margin-top: 30px; */
`

export const ProductName = styled.span`
    font-size: 12pt;
    /* margin-bottom: 5px; */
    margin-left: 10px; 
    width:150px;
`

export const ProductAmount = styled.span`
    font-size: 12pt;
    /* margin-bottom: 10px; */
    margin-left: 5px;
    text-align: right;
    width:150px;
    
`

export const CalculationsCart = styled.li`
    align-items: center;
      border-bottom: 1px dashed #ccc;
      display: flex;
      justify-content: space-between;
      margin-bottom: 10px;
      padding-bottom: 5px;
`
