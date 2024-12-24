const fetchUsers = async () => {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
      if (!response.ok) throw new Error("Veri alınamadı");
      const users = await response.json();
      displayUsers(users);
    } catch (error) {
      console.error(error.message);
    }
  };
  
  const displayUsers = (users) => {
    const container = document.getElementById("user-cards");
    users.forEach(user => {
      const card = document.createElement("div");
      card.className = "col-md-4 mb-4";
  
      card.innerHTML = `
        <div class="card h-100">
          <div class="card-header text-white bg-primary">
            <h5 class="card-title mb-0">${user.name}</h5>
          </div>
          <div class="card-body">
            <!-- Basic Information -->
            <div class="section mb-3">
              <h6 class="text-muted border-bottom pb-2">
                <i class="fas fa-user me-2"></i>Basic Information
              </h6>
              <p><strong>ID:</strong> ${user.id}</p>
              <p><strong>Name:</strong> ${user.name}</p>
              <p><strong>Username:</strong> ${user.username}</p>
            </div>

            <!-- Address Information -->
            <div class="section mb-3">
              <h6 class="text-muted border-bottom pb-2">
                <i class="fas fa-location-dot me-2"></i>Address Information
              </h6>
              <p><strong>Street:</strong> ${user.address.street}</p>
              <p><strong>City:</strong> ${user.address.city}</p>
              <p><strong>Zip Code:</strong> ${user.address.zipcode}</p>
            </div>

            <!-- Company Information -->
            <div class="section mb-3">
              <h6 class="text-muted border-bottom pb-2">
                <i class="fas fa-building me-2"></i>Company Information
              </h6>
              <p><strong>Company:</strong> ${user.company.name}</p>
              <p><strong>Slogan:</strong> ${user.company.catchPhrase}</p>
            </div>

            <!-- Contact Information -->
            <div class="section">
              <h6 class="text-muted border-bottom pb-2">
                <i class="fas fa-address-card me-2"></i>Contact Information
              </h6>
              <p><strong>Email:</strong> <a href="mailto:${user.email}">${user.email}</a></p>
              <p><strong>Phone:</strong> ${user.phone}</p>
              <p><strong>Website:</strong> <a href="https://${user.website}" target="_blank">${user.website}</a></p>
            </div>
          </div>
        </div>
      `;
      container.appendChild(card);
    });
  };
  
  fetchUsers();
  