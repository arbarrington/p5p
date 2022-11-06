import { useState,useEffect } from "react"
import { Button, Stack } from "react-bootstrap"

export function CartItem ({product, quantity, setTotal}) {
  // console.log('item',product, quantity)
  
  return (

    <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
    <img
      src={product.attachment}
      style={{ width: "125px", height: "75px", objectFit: "cover" }}
    />
    <div className="me-auto">
      <div>
        {product.name}{" "}
        {quantity > 1 && (
          <span className="text-muted" style={{ fontSize: ".65rem" }}>
            x{quantity}
          </span>
        )}
      </div>
      <div className="text-muted" style={{ fontSize: ".75rem" }}>
        ${product.price} x {quantity} {product.unit}
      </div>
    </div>
    <div> ${product.price * quantity}</div>
    <Button
      variant="outline-danger"
      size="sm"
      onClick={() => console.log('fix the remove button', product.id)}
    >
      &times;
    </Button>
  </Stack>
  )
}