export const goToTripDetails = (navigate) => {
    navigate("/admin/trips/create");
  };
  
  export const goToLogin = (navigate) => {
    navigate("/login");
  };

  export const goToListTrips = (navigate) => {
    navigate("/trips/list");
  };
  export const goToApplicatinForm = (navigate) => {
    navigate("/trips/application");
  }
  export const goToCreateTrip = (navigate) => {
    navigate("/admin/trips/:id");
  }
  export const goToAdminHome = (navigate) => {
    navigate("/admin/trips/list");
  }
  export const goToHome = (navigate) => {
    navigate("/");
  };
