import {Col, Row} from 'react-bootstrap'
import { MDBAccordion, MDBAccordionItem, MDBBtn, MDBCard, MDBCardBody, MDBCardFooter, MDBCardHeader, MDBCardImage, MDBCheckbox, MDBCol, MDBContainer, MDBInput, MDBListGroup, MDBListGroupItem, MDBRow, MDBTextArea, MDBTypography } from 'mdb-react-ui-kit';
import {useState, useEffect} from 'react'

export function Checkout ({cart, navigate, user, setCart, cartOpen, setCartOpen}) {
  const [orderInfo, setOrderInfo] = useState({})
  const handleOrderEdit = ({target:{name, value}})=>setOrderInfo(orderInfo=>({...orderInfo, [name]: value}))
  let price = cart.map((item)=>{return item.product.price*item.quantity}).reduce((partialSum, a)=>partialSum+a,0)
  let taxfee = 1.1

  function submitOrder (e) {
    console.log('submit triggered')
    e.preventDefault()
    const formData = new FormData()
    for (const key in orderInfo) { formData.append(key, orderInfo[key]) }
    if (cart) formData.append('cart', JSON.stringify(cart))
    if (price) formData.append('completed', false)
    if (price) formData.append('price', price)
    if (user.id) formData.append('user_id', user.id)

    fetch(`/orders`, {
      method: "POST",
      body: formData
      }).then(r=>{if (r.ok) {
        setCart([])
        navigate('/') 
        console.log('successfully posted order')
      }})
  }

  return (<>
  <MDBContainer className="py-2" style={{maxWidth: '1100px'}}>
      <section>
        <MDBRow>
          <MDBCol md="8">
            
          {/* <MDBAccordion className="card mb-4">
            <MDBAccordionItem collapseId={1} className="border-0" headerTitle='Promo/Student Code or Vouchers'>
              <MDBInput label='Enter code' type='text' />
            </MDBAccordionItem>
          </MDBAccordion> */}
                    <MDBCol md="8" className="mb-4">
            <MDBCard className="mb-4">
              <MDBCardHeader className="py-3">
                <MDBTypography tag="h5" className="mb-0 text-font text-uppercase">Delivery address</MDBTypography>
              </MDBCardHeader>
              <MDBCardBody>
                <form>
                  <MDBRow className="mb-4">
                    <MDBCol>
                      <MDBInput onChange={handleOrderEdit} name='first_name' label='First name' type='text' />
                    </MDBCol>
                    <MDBCol>
                      <MDBInput onChange={handleOrderEdit} name='last_name' label='Last name' type='text' />
                    </MDBCol>
                  </MDBRow>

                  {/* <MDBInput onChange={handleOrderEdit} label='Company name' type='text' className="mb-4" /> */}
                  <MDBInput onChange={handleOrderEdit} label='Address' name='delivery_address' type='text' className="mt-4" />
                  <MDBInput onChange={handleOrderEdit} label='Email' name='email' type='text' className="mt-4" />
                  <MDBInput onChange={handleOrderEdit} label='Phone' name='phone' type='text' className="mt-4" />
                  <MDBTextArea onChange={handleOrderEdit} name='comment' label='Additional information' rows={4} className="mt-4" />

                  {/* <div className="d-flex justify-content-center">
                    <MDBCheckbox name='flexCheck' value='' id='flexCheckChecked' label='Create an account?' defaultChecked />
                  </div> */}
                </form>
              </MDBCardBody>
            </MDBCard>
            <div className="text-center">
              <MDBBtn onClick={(e)=>submitOrder(e)} className="button-order col-md-10">Place order</MDBBtn>
            </div>
          </MDBCol>


          </MDBCol>
          <MDBCol md="4" className="mb-4 position-statistics">
            <MDBCard className="mb-4">
              <MDBCardHeader className="py-3">
                <MDBTypography tag="h5" className="mb-0 text-font">
                  {cart.length} item(s) <span onClick={()=>setCartOpen(true)} className="float-end mt-1" style={{ fontSize: '13px' }}>Edit</span>
                </MDBTypography>
              </MDBCardHeader>
              {cart.map((item)=>{return(
              <MDBCardBody>
                <MDBRow>
                  <MDBCol md="4">
                    <MDBCardImage src={item.product.attachment}
                      className="rounded-3" style={{ width: '100px' }} alt="Blue Jeans Jacket" />
                  </MDBCol>
                  <MDBCol md="6" className="ms-3">
                    <span className="mb-0 text-price">${item.product.price} per {item.product.unit}</span>
                    <p className="mb-0 text-descriptions fw-bold">{item.product.name}</p>
                    <span className="text-descriptions">{item.product.description}</span> <span
                      className="text-descriptions fw-bold"></span>
                    <p className="text-descriptions mt-0">
                      Qty:<span className="text-descriptions fw-bold"> {item.quantity} {item.product.unit}</span>
                    </p>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
              )})}
              <MDBCardFooter className="mt-4">
                <MDBListGroup flush>
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center border-0 px-0 pb-0 text-muted">
                    Subtotal
                    <span>${cart.map((item)=>{return item.product.price*item.quantity}).reduce((partialSum, a)=>partialSum+a,0)}</span>
                  </MDBListGroupItem>
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center px-0 fw-bold text-uppercase">
                    Total to pay
                    <span>${taxfee * cart.map((item)=>{return item.product.price*item.quantity}).reduce((partialSum, a)=>partialSum+a,0)}</span>
                  </MDBListGroupItem>
                </MDBListGroup>
              </MDBCardFooter>
            </MDBCard>
          </MDBCol>




        </MDBRow>
      </section>
    </MDBContainer>
 </> )
}