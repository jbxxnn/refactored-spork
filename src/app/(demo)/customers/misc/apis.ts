import { AddCustomerFormData, Customer } from "@/lib/types/customers";

export async function addCustomerAPI(customer:AddCustomerFormData){
  console.log("create customer api", {customer})
  return await fetch("/api/add-user", {
    method: "POST",
    body: JSON.stringify(customer),
    headers: {
      "Content-Type": "application/json",
    },
  }).then(res=>{
      if (res.ok){
        return res.json()
      }
      else throw(res)
    });
}

export async function fetchCustomersAPI(){
  
}
