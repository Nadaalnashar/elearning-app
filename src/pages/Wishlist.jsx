import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromWishlist, clearWishlist } from '../redux/wishlistSlice';

function Wishlist() {
  const wishlist = useSelector((state) => state.wishlist.items);
  const dispatch = useDispatch();

  return (
    <div style={{ padding: 24 }}>
      <h1>My Wishlist</h1>
      <hr />
      {wishlist.length === 0 ? (
        <p>Your wishlist is empty.</p>
      ) : (
        <>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {wishlist.map((item) => (
              <li key={item.id} style={{ margin: '16px 0', display: 'flex', alignItems: 'center', gap: 16 }}>
                <img src={item.image} alt={item.title} style={{ width: 80, height: 80, objectFit: 'cover', borderRadius: 8 }} />
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.price}</p>
                  <button onClick={() => dispatch(removeFromWishlist(item.id))}>Remove</button>
                </div>
              </li>
            ))}
          </ul>
          <button onClick={() => dispatch(clearWishlist())} style={{ marginTop: 16 }}>Clear Wishlist</button>
        </>
      )}
    </div>
  );
}

export default Wishlist;
