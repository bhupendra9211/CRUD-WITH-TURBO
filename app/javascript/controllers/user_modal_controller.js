import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="user-modal"
export default class extends Controller {
  connect() {
    console.log("i am connected")
  }
}
