import { mount, createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";
import Vue from "vue";
import Vuelidate from "vuelidate";
import Page from "@/components/pay-patient/ReviewTableList.vue";
import { cloneDeep } from "lodash";
import * as module1 from "../../../src/store/modules/app";
import * as module2 from "../../../src/store/modules/pay-patient-form";
import * as module3 from "../../../src/store/modules/pay-practitioner-form";

const localVue = createLocalVue();
localVue.use(Vuex);
Vue.use(Vuelidate);

const storeTemplate = {
  modules: {
    app: cloneDeep(module1),
    payPatientForm: cloneDeep(module2),
    payPractitionerForm: cloneDeep(module3),
  },
};

const patientState = {
  planReferenceNumber: "defaultReferenceNumber",
  phn: "defaultphn",
  dependentNumber: "defaultdependentNumber",
  firstName: "defaultfirstName",
  lastName: "defaultlastName",
  birthDate: "defaultBirthDate",
  addressOwner: "Default address owner",
  unitNumber: "defaultunitNumber",
  streetNumber: "defaultstreetNumber",
  streetName: "defaultstreetName",
  city: "defaultcity",
  postalCode: "defaultpostalCode",
  isVehicleAccident: "Y",
  vehicleAccidentClaimNumber: "defaultAccidentClaimNumber",
  planReferenceNumberOfOriginalClaim:
    "defaultplanReferenceNumberOfOriginalClaim",
  medicalServiceClaims: [
    {
      serviceDate: "defaultserviceDate",
      numberOfServices: "defaultnumberOfServices",
      serviceClarificationCode: "defaultserviceClarificationCode",
      feeItem: "defaultfeeItem",
      amountBilled: "defaultamountBilled",
      calledStartTime: { time: "defaultcalledStartTime" },
      renderedFinishTime: { time: "defaultrenderedFinishTime" },
      diagnosticCode: "defaultdiagnosticCode",
      locationOfService: "defaultlocationOfService",
      correspondenceAttached: "defaultcorrespondenceAttached",
      submissionCode: "defaultsubmissionCode",
      notes: "defaultnotes",
    },
  ],
};
storeTemplate.modules.payPatientForm.state = cloneDeep(patientState);

describe("ReviewTableList patient", () => {
  it("renders", () => {
    const store = new Vuex.Store(storeTemplate);
    const wrapper = mount(Page, {
      localVue,
      store,
      mocks: {
        $route: {
          path: "/",
        },
        $router: {
          push: jest.fn(),
          currentRoute: {
            path: "/",
          },
        },
      },
    });
    expect(wrapper.element).toBeDefined();
  });
});

describe("ReviewTableList patient planReferenceNumberData() CSR", () => {
  let store;
  let wrapper;

  it("returns plan reference number in store when path isCSR", () => {
    //please note the route change between this and the next test
    store = new Vuex.Store(storeTemplate);
    wrapper = mount(Page, {
      localVue,
      store,
      mocks: {
        $route: {
          path: "/",
        },
        $router: {
          push: jest.fn(),
          currentRoute: {
            path: "/potato-csr",
          },
        },
      },
    });
    const result = wrapper.vm.$store.state.payPatientForm.planReferenceNumber;
    expect(result).toBe("defaultReferenceNumber");
    expect(wrapper.text()).toEqual(
      expect.stringContaining("defaultReferenceNumber")
    );
  });

  it("does not render plan reference number when path is NOT CSR", () => {
    store = new Vuex.Store(storeTemplate);
    wrapper = mount(Page, {
      localVue,
      store,
      mocks: {
        $route: {
          path: "/",
        },
        $router: {
          push: jest.fn(),
          currentRoute: {
            path: "/potato",
          },
        },
      },
    });
    const result = wrapper.vm.$store.state.payPatientForm.planReferenceNumber;
    expect(result).toBe("defaultReferenceNumber");
    expect(wrapper.text()).not.toEqual(
      expect.stringContaining("defaultReferenceNumber")
    );
  });
});

describe("ReviewTableList patient patientData()", () => {
  let store;
  let wrapper;

  beforeEach(() => {
    store = new Vuex.Store(storeTemplate);
    wrapper = mount(Page, {
      localVue,
      store,
      mocks: {
        $route: {
          path: "/",
        },
        $router: {
          push: jest.fn(),
          currentRoute: {
            path: "/potato-csr",
          },
        },
      },
    });
  });

  it("renders phn", () => {
    const phn = wrapper.vm.$store.state.payPatientForm.phn;
    expect(phn).toBe("defaultphn");
    expect(wrapper.text()).toEqual(expect.stringContaining("defaultphn"));
  });

  it("renders dependentNumber", () => {
    const dependentNumber =
      wrapper.vm.$store.state.payPatientForm.dependentNumber;
    expect(dependentNumber).toBe("defaultdependentNumber");
    expect(wrapper.text()).toEqual(
      expect.stringContaining("defaultdependentNumber")
    );
  });

  it("renders firstName", () => {
    const firstName = wrapper.vm.$store.state.payPatientForm.firstName;
    expect(firstName).toBe("defaultfirstName");
    expect(wrapper.text()).toEqual(expect.stringContaining("defaultfirstName"));
  });

  it("renders lastName", () => {
    const lastName = wrapper.vm.$store.state.payPatientForm.lastName;
    expect(lastName).toBe("defaultlastName");
    expect(wrapper.text()).toEqual(expect.stringContaining("defaultlastName"));
  });

  it("renders birthDate", () => {
    const birthDate = wrapper.vm.$store.state.payPatientForm.birthDate;
    expect(birthDate).toBe("defaultBirthDate");
    expect(wrapper.text()).toEqual(expect.stringContaining("defaultBirthDate"));
  });
});

describe("ReviewTableList patient paymentMailAddressData()", () => {
  let store;
  let wrapper;

  beforeEach(() => {
    store = new Vuex.Store(storeTemplate);
    wrapper = mount(Page, {
      localVue,
      store,
      mocks: {
        $route: {
          path: "/",
        },
        $router: {
          push: jest.fn(),
          currentRoute: {
            path: "/potato-csr",
          },
        },
      },
    });
  });

  it("renders addressOwner", () => {
    const addressOwner = wrapper.vm.$store.state.payPatientForm.addressOwner;
    expect(addressOwner).toBe("Default address owner");
    //it capitalizes the value, so I capitalized it below
    expect(wrapper.text()).toEqual(
      expect.stringContaining("Default address owner")
    );
  });

  it("renders unitNumber", () => {
    const unitNumber = wrapper.vm.$store.state.payPatientForm.unitNumber;
    expect(unitNumber).toBe("defaultunitNumber");
    expect(wrapper.text()).toEqual(
      expect.stringContaining("defaultunitNumber")
    );
  });

  it("renders streetNumber", () => {
    const streetNumber = wrapper.vm.$store.state.payPatientForm.streetNumber;
    expect(streetNumber).toBe("defaultstreetNumber");
    expect(wrapper.text()).toEqual(
      expect.stringContaining("defaultstreetNumber")
    );
  });

  it("renders streetName", () => {
    const streetName = wrapper.vm.$store.state.payPatientForm.streetName;
    expect(streetName).toBe("defaultstreetName");
    expect(wrapper.text()).toEqual(
      expect.stringContaining("defaultstreetName")
    );
  });

  it("renders city", () => {
    const city = wrapper.vm.$store.state.payPatientForm.city;
    expect(city).toBe("defaultcity");
    expect(wrapper.text()).toEqual(expect.stringContaining("defaultcity"));
  });

  it("renders postalCode", () => {
    const postalCode = wrapper.vm.$store.state.payPatientForm.postalCode;
    expect(postalCode).toBe("defaultpostalCode");
    expect(wrapper.text()).toEqual(
      expect.stringContaining("defaultpostalCode")
    );
  });
});

describe("ReviewTableList patient vehicleAccidentData()", () => {
  let store;
  let wrapper;

  beforeEach(() => {
    store = new Vuex.Store(storeTemplate);
    wrapper = mount(Page, {
      localVue,
      store,
      mocks: {
        $route: {
          path: "/",
        },
        $router: {
          push: jest.fn(),
          currentRoute: {
            path: "/potato-csr",
          },
        },
      },
    });
  });

  it("renders isVehicleAccident", () => {
    const isVehicleAccident =
      wrapper.vm.$store.state.payPatientForm.isVehicleAccident;
    expect(isVehicleAccident).toBe("Y");
    expect(wrapper.text()).toEqual(expect.stringContaining("Yes"));
  });

  it("renders vehicleAccidentClaimNumber", () => {
    const vehicleAccidentClaimNumber =
      wrapper.vm.$store.state.payPatientForm.vehicleAccidentClaimNumber;
    expect(vehicleAccidentClaimNumber).toBe("defaultAccidentClaimNumber");
    expect(wrapper.text()).toEqual(
      expect.stringContaining("defaultAccidentClaimNumber")
    );
  });
});

describe("ReviewTableList patient claimInfoData()", () => {
  let store;
  let wrapper;

  beforeEach(() => {
    store = new Vuex.Store(storeTemplate);
    wrapper = mount(Page, {
      localVue,
      store,
      mocks: {
        $route: {
          path: "/",
        },
        $router: {
          push: jest.fn(),
          currentRoute: {
            path: "/potato-csr",
          },
        },
      },
    });
  });

  it("renders planReferenceNumberOfOriginalClaim", () => {
    const isVehicleAccident =
      wrapper.vm.$store.state.payPatientForm.planReferenceNumberOfOriginalClaim;
    expect(isVehicleAccident).toBe("defaultplanReferenceNumberOfOriginalClaim");
    expect(wrapper.text()).toEqual(
      expect.stringContaining("defaultplanReferenceNumberOfOriginalClaim")
    );
  });
});

describe("ReviewTableList patient medicalServiceClaims()", () => {
  let store;
  let wrapper;

  beforeEach(() => {
    store = new Vuex.Store(storeTemplate);
    wrapper = mount(Page, {
      localVue,
      store,
      mocks: {
        $route: {
          path: "/",
        },
        $router: {
          push: jest.fn(),
          currentRoute: {
            path: "/potato-csr",
          },
        },
      },
    });
  });

  it("renders serviceDate", () => {
    const serviceDate =
      wrapper.vm.$store.state.payPatientForm.medicalServiceClaims[0]
        .serviceDate;
    expect(serviceDate).toBe("defaultserviceDate");
    expect(wrapper.text()).toEqual(
      expect.stringContaining("defaultserviceDate")
    );
  });

  it("renders numberOfServices", () => {
    const numberOfServices =
      wrapper.vm.$store.state.payPatientForm.medicalServiceClaims[0]
        .numberOfServices;
    expect(numberOfServices).toBe("defaultnumberOfServices");
    expect(wrapper.text()).toEqual(
      expect.stringContaining("defaultnumberOfServices")
    );
  });

  it("renders serviceClarificationCode", () => {
    const serviceClarificationCode =
      wrapper.vm.$store.state.payPatientForm.medicalServiceClaims[0]
        .serviceClarificationCode;
    expect(serviceClarificationCode).toBe("defaultserviceClarificationCode");
    expect(wrapper.text()).toEqual(
      expect.stringContaining("defaultserviceClarificationCode")
    );
  });

  it("renders feeItem", () => {
    const feeItem =
      wrapper.vm.$store.state.payPatientForm.medicalServiceClaims[0].feeItem;
    expect(feeItem).toBe("defaultfeeItem");
    expect(wrapper.text()).toEqual(expect.stringContaining("defaultfeeItem"));
  });

  it("renders amountBilled", () => {
    const amountBilled =
      wrapper.vm.$store.state.payPatientForm.medicalServiceClaims[0]
        .amountBilled;
    expect(amountBilled).toBe("defaultamountBilled");
    expect(wrapper.text()).toEqual(
      expect.stringContaining("defaultamountBilled")
    );
  });

  it("renders calledStartTime", () => {
    const calledStartTime =
      wrapper.vm.$store.state.payPatientForm.medicalServiceClaims[0]
        .calledStartTime.time;
    expect(calledStartTime).toBe("defaultcalledStartTime");
    expect(wrapper.text()).toEqual(
      expect.stringContaining("defaultcalledStartTime")
    );
  });

  it("renders renderedFinishTime", () => {
    const renderedFinishTime =
      wrapper.vm.$store.state.payPatientForm.medicalServiceClaims[0]
        .renderedFinishTime.time;
    expect(renderedFinishTime).toBe("defaultrenderedFinishTime");
    expect(wrapper.text()).toEqual(
      expect.stringContaining("defaultrenderedFinishTime")
    );
  });

  it("renders diagnosticCode", () => {
    const diagnosticCode =
      wrapper.vm.$store.state.payPatientForm.medicalServiceClaims[0]
        .diagnosticCode;
    expect(diagnosticCode).toBe("defaultdiagnosticCode");
    expect(wrapper.text()).toEqual(
      expect.stringContaining("defaultdiagnosticCode")
    );
  });

  it("renders locationOfService", () => {
    const locationOfService =
      wrapper.vm.$store.state.payPatientForm.medicalServiceClaims[0]
        .locationOfService;
    expect(locationOfService).toBe("defaultlocationOfService");
    expect(wrapper.text()).toEqual(
      expect.stringContaining("defaultlocationOfService")
    );
  });

  it("renders correspondenceAttached", () => {
    const correspondenceAttached =
      wrapper.vm.$store.state.payPatientForm.medicalServiceClaims[0]
        .correspondenceAttached;
    expect(correspondenceAttached).toBe("defaultcorrespondenceAttached");
    expect(wrapper.text()).toEqual(
      expect.stringContaining("defaultcorrespondenceAttached")
    );
  });

  it("renders submissionCode", () => {
    const submissionCode =
      wrapper.vm.$store.state.payPatientForm.medicalServiceClaims[0]
        .submissionCode;
    expect(submissionCode).toBe("defaultsubmissionCode");
    expect(wrapper.text()).toEqual(
      expect.stringContaining("defaultsubmissionCode")
    );
  });

  it("renders notes", () => {
    const notes =
      wrapper.vm.$store.state.payPatientForm.medicalServiceClaims[0].notes;
    expect(notes).toBe("defaultnotes");
    expect(wrapper.text()).toEqual(expect.stringContaining("defaultnotes"));
  });
});

/*
it("renders AAA", () => {
    const AAA =
      wrapper.vm.$store.state.payPatientForm.AAA;
    expect(AAA).toBe("BBB");
    expect(wrapper.text()).toEqual(
      expect.stringContaining("BBB")
    );
  });
  */
