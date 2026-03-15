import React from "react";
import { Link } from "react-router-dom";

export default function AdminSidebar() {
  return (
    <>
      <div class="list-group">
        <Link
          to="/admin"
          class="list-group-item list-group-item-action bg-dark text-light"
          aria-current="true"
        >
          <i className="bi bi-house fs-5"></i>
          <span className="float-end mt-2">Home</span>
        </Link>
        <Link
          to="/admin/maincategory"
          class="list-group-item list-group-item-action bg-dark text-light"
          aria-current="true"
        >
          <i className="bi bi-bookmark-plus fs-5"></i>
          <span className="float-end mt-2">Main Category</span>
        </Link>
        <Link
          to="/admin/subcategory"
          class="list-group-item list-group-item-action bg-dark text-light"
          aria-current="true"
        >
          <i className="bi bi-bookmarks fs-5"></i>
          <span className="float-end mt-2">Sub Category</span>
        </Link>
        <Link
          to="/admin/brand"
          class="list-group-item list-group-item-action bg-dark text-light"
          aria-current="true"
        >
          <i className="bi bi-tags fs-5"></i>
          <span className="float-end mt-2">Brand</span>
        </Link>
        <Link
          to="/admin/product"
          class="list-group-item list-group-item-action bg-dark text-light"
          aria-current="true"
        >
          <i className="bi bi-bookmark-star fs-5"></i>
          <span className="float-end mt-2">Products</span>
        </Link>
        <Link
          to="/admin/testimonial"
          class="list-group-item list-group-item-action bg-dark text-light"
          aria-current="true"
        >
          <i className="bi bi-star fs-5"></i>
          <span className="float-end mt-2">Testimonials</span>
        </Link>
        <Link
          to="/admin/feature"
          class="list-group-item list-group-item-action bg-dark text-light"
          aria-current="true"
        >
          <i className="bi bi-check-circle fs-5"></i>
          <span className="float-end mt-2">Features</span>
        </Link>
        <Link
          to="/admin/service"
          class="list-group-item list-group-item-action bg-dark text-light"
          aria-current="true"
        >
          <i className="bi bi-house-gear fs-5"></i>
          <span className="float-end mt-2">Services</span>
        </Link>
        <Link
          to="/admin/faq"
          class="list-group-item list-group-item-action bg-dark text-light"
          aria-current="true"
        >
          <i className="bi bi-question-circle fs-5"></i>
          <span className="float-end mt-2">Faq</span>
        </Link>
        <Link
          to="/admin/setting"
          class="list-group-item list-group-item-action bg-dark text-light"
          aria-current="true"
        >
          <i className="bi bi-gear fs-5"></i>
          <span className="float-end mt-2">Settings</span>
        </Link>
        <Link
          to="/admin/user"
          class="list-group-item list-group-item-action bg-dark text-light"
          aria-current="true"
        >
          <i className="bi bi-people fs-5"></i>
          <span className="float-end mt-2">User</span>
        </Link>
        <Link
          to="/admin/newsletter"
          class="list-group-item list-group-item-action bg-dark text-light"
          aria-current="true"
        >
          <i className="bi bi-envelope fs-4"></i>
          <span className="float-end mt-2">Newsletter</span>
        </Link>
        <Link
          to="/admin/checkout"
          class="list-group-item list-group-item-action bg-dark text-light"
          aria-current="true"
        >
          <i className="bi bi-bag-check-fill fs-4"></i>
          <span className="float-end mt-2">Checkout</span>
        </Link>
        <Link
          to="/admin/contactus"
          class="list-group-item list-group-item-action bg-dark text-light"
          aria-current="true"
        >
          <i className="bi bi-headset fs-4"></i>
          <span className="float-end mt-2">Contact Us</span>
        </Link>
      </div>
    </>
  );
}
