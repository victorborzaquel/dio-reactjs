const customerList = [
  {
    id: 1,
    name: 'John'
  },
  {
    id: 2,
    name: 'Victor'
  },
  {
    id: 3,
    name: 'Hugo'
  },
  {
    id: 4,
    name: 'Karen'
  }
]

export function List() {
  const renderCustomer = customer => <li key={`customer-${customer.id}`}>{customer.name}</li>

  return (
    <div>
      <ul>
        {customerList.map(renderCustomer)}
      </ul>
    </div>
  )
}