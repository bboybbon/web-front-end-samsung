import React from 'react';

// 컨텍스트 생성
export const CartContext = React.createContext({
    title: '장바구니',
    products: null,
    totalPrice: 0,
    handleUpdateAmount : () =>{}
});