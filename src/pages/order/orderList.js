import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addOrder, updateOrder, deleteOrder, upsertOrder } from "../../redux/orderSlice";
import useOrders from "../../redux/hooks/useOrders";
import {v6 as uuid} from 'uuid'

const OrdersList = () => {
  const [newOrder, setNewOrder] = useState({ title: "", description: "" });
  const [editingOrder, setEditingOrder] = useState(null);
  const orders = useSelector((state) => state.orders.orders);
  const dispatch = useDispatch();

  // Activer le listener
  useOrders();

  // Ajout d'une commande
  const handleAddOrder = () => {
    if (newOrder.title && newOrder.description) {
      // dispatch(addOrder(newOrder));
      dispatch(upsertOrder({id: uuid(), order: newOrder}))
      setNewOrder({ title: "", description: "" });
    }
  };

  // Mise à jour d'une commande
  const handleUpdateOrder = (id) => {
    if (editingOrder) {
      dispatch(upsertOrder({id: editingOrder.id, order: editingOrder}))
      // dispatch(updateOrder({ id, updatedOrder: editingOrder }));
      setEditingOrder(null);
    }
  };

  // Suppression d'une commande
  const handleDeleteOrder = (id) => {
    dispatch(deleteOrder(id));
  };

  return (
    <div>
      <h1>Liste des commandes</h1>

      <div>
        <input
          type="text"
          placeholder="Titre"
          value={newOrder.title}
          onChange={(e) => setNewOrder({ ...newOrder, title: e.target.value })}
        />
        <input
          type="text"
          placeholder="Description"
          value={newOrder.description}
          onChange={(e) => setNewOrder({ ...newOrder, description: e.target.value })}
        />
        <button onClick={handleAddOrder}>Ajouter</button>
      </div>

      <ul>
        {orders.map((order) => (
          <li key={order.id}>
            {editingOrder?.id === order.id ? (
              <div>
                <input
                  type="text"
                  value={editingOrder.title}
                  onChange={(e) => setEditingOrder({ ...editingOrder, title: e.target.value })}
                />
                <input
                  type="text"
                  value={editingOrder.description}
                  onChange={(e) =>
                    setEditingOrder({ ...editingOrder, description: e.target.value })
                  }
                />
                <button onClick={() => handleUpdateOrder(order.id)}>Enregistrer</button>
              </div>
            ) : (
              <div>
                <h2>{order.title}</h2>
                <p>{order.description}</p>
                <button onClick={() => setEditingOrder(order)}>Modifier</button>
                <button onClick={() => handleDeleteOrder(order.id)}>Supprimer</button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OrdersList;
