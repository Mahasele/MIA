import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-requests2',
  templateUrl: './requests2.page.html',
  styleUrls: ['./requests2.page.scss'],
})
export class Requests2Page {

  requests = [
    { id: 1, request: "Request 1", status: "Pending" },
    { id: 2, request: "Request 2", status: "Pending" },
    { id: 3, request: "Request 3", status: "Pending" }
  ];

  constructor(private router: Router) {}

  populateTable() {
    const tableBody = document.querySelector("#requests-table tbody");
    if (tableBody) {
        tableBody.innerHTML = "";
        this.requests.forEach(request => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${request.id}</td>
                <td>${request.request}</td>
                <td>${request.status}</td>
                <td><button class="approve-btn" data-id="${request.id}">Approve</button></td>
            `;
            tableBody.appendChild(row);
        });
    }
  }

  ngOnInit() {
    this.populateTable();

    document.addEventListener("click", (event) => {
      const target = event.target as HTMLElement;
      if (target.classList.contains("approve-btn")) {
        const requestId = parseInt(target.getAttribute("data-id") || "");
        const requestIndex = this.requests.findIndex(req => req.id === requestId);
        if (requestIndex !== -1) {
          this.requests[requestIndex].status = "Approved";
          this.populateTable(); 
        }
      }
    });
  }

  navigateToDash() {
    this.router.navigate(['/dash']); 
  }

}




