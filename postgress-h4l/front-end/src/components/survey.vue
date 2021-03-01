<template>
  <div>
    <v-main id="app-main">
      <v-stepper v-model="page">
        <v-progress-linear
          id="progress-line"
          background-color="red"
          color="black"
          v-model="progress"
          height="5"
        >
        </v-progress-linear>
        <v-stepper-header id="stepper-header"  v-if="!complete">
          
          <h4>
            <v-icon mdiFeather></v-icon><em>{{ question }}</em>
          </h4>
        </v-stepper-header>

        <v-divider id="devider"></v-divider>
        <v-stepper-items id="stepper-content">
          <v-stepper-content step="1" class="step-window">
            <form>
              <label>{{ survey[0].section[3].label }}:</label>
              <Select :fields="survey[0].section[3]" />
              
              <label>{{ survey[0].section[4].label }}:</label>
              <Txt :fields="survey[0].section[4]" />

              <label>{{ survey[0].section[2].label }}:</label>
              <Select :fields="survey[0].section[2]" />
              <label>{{ survey[0].section[0].label }}:</label>
              <Select id="input" :fields="survey[0].section[0]" />

              <label>{{ survey[0].section[1].label }}:</label>
              <Select :fields="survey[0].section[1]" />
            </form>
          </v-stepper-content>
          <v-stepper-content step="2" class="step-window">
            <form>
              <label>{{ survey[1].section[0].label }} :</label>
              <h5>{{ this.survey[1].section[0].text }}</h5>
              <label>{{ survey[1].section[1].label }} :</label>
              <Clock :fields="survey[1].section[1]" />
              <label>{{ survey[1].section[2].label }} :</label>
              <Radio :fields="survey[1].section[2]" :intersect="intersect" />
              <div class="age-check">
                <label>{{ survey[1].section[3].label }} :</label>
                <Calender
                  :fields="survey[1].section[3]"
                  :intersect="intersect"
                />
                <h4 class="alert" v-if="checkage() < 14">
                  Client too young. End session.
                </h4>
              </div>
              <div v-if="checkage() > 14">
                <label>{{ survey[1].section[4].label }}:</label>
                <Select :fields="survey[1].section[4]" />
              </div>
            </form>
          </v-stepper-content>

          <v-stepper-content step="3" class="step-window">
            <form>
              <label>{{ survey[2].section[0].label }}:</label>
              <Radio :fields="survey[2].section[0]" :intersect="intersect" />
              <label>{{ survey[2].section[1].label }}:</label>
              <Txt :fields="survey[2].section[1]" />
              <label>{{ survey[2].section[2].label }}:</label>
              <Radio :fields="survey[2].section[2]" :intersect="intersect" />
              <label>{{ survey[2].section[3].label }}:</label>
              <Txt :fields="survey[2].section[3]" />
              <label>{{ survey[2].section[4].label }}:</label>
              <Select :fields="survey[2].section[4]" />
            </form>
            <h3 style="color: #770000">Explain testing procedure to client</h3>
          </v-stepper-content>
          <!--counselor guidelines-->
          <v-stepper-content step="4" class="step-window">
            <form>
              <label>{{ survey[3].section[0].label }}</label>
              <Radio :fields="survey[3].section[0]" :intersect="intersect" />
              <v-container v-if="survey[3].section[0].selected == 'No'">
                <label>{{ survey[3].section[1].label }}</label>
                <Radio :fields="survey[3].section[1]" :intersect="intersect" />
                <div v-if="survey[3].section[1].selected == 'No'">
                  <label>{{ survey[3].section[5].label }}</label>
                  <Radio
                    :fields="survey[3].section[5]"
                    :intersect="intersect"
                  />
                </div>
                <div v-else>
                  {{ survey[3].section[0].selected == "Yes" }}
                </div>
                <label>{{ survey[3].section[2].label }}</label>
                <Radio :fields="survey[3].section[2]" :intersect="intersect" />
                <label>{{ survey[3].section[3].label }}</label>
                <Calender
                  :fields="survey[3].section[3]"
                  :intersect="intersect"
                />
                <label>{{ survey[3].section[4].label }}</label>
                <label>{{ survey[3].section[4].label }}</label>
                <Radio :fields="survey[3].section[4]" :intersect="intersect" />
              </v-container>
              <label>{{ survey[3].section[6].label }}</label>
              <Radio :fields="survey[3].section[6]" :intersect="intersect" />
              <div v-if="survey[3].section[6].selected == 'Yes'">
                <!--counsellor guideline modal-->
                <v-dialog v-model="dialog" width="600px">
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn color="primary" dark v-bind="attrs" v-on="on">
                      Read document
                    </v-btn>
                    <v-tooltip right>
                      <template v-slot:activator="{ on, attrs }">
                        <v-icon
                          v-show="signed"
                          x-large
                          text
                          v-bind="attrs"
                          v-on="on"
                          @click="
                            () => {
                              dialog2 = true;
                              signed = true;
                            }
                          "
                          dark
                          color="green darken-1"
                          >mdi-image
                        </v-icon>
                      </template>
                      <span>View Signature</span>
                    </v-tooltip>
                  </template>
                  <v-card>
                    <v-card-title>
                      <span class="headline">CONSENT TO HIV TESTING</span>
                    </v-card-title>
                    <v-card-text>
                      <div>
                        I hereby consent to having blood taken for HIV testing
                        and to be counselled. I understand that this session is
                        confidential except if my life or someone else’s life is
                        at risk, then my counsellor will report to the relevant
                        authorities.
                      </div>
                      <br />
                      <div>
                        Ndiyavuma igazi lam litsalwe ukuhlola intsholongwane
                        Ugawulayo nokuba ndinikwe iingcebiso. Ndiyaqonda ukuba
                        yonke into ethethwa apha ihlala apha, ngaphandle kokuba
                        ubomi bam okanye obomnye umntu busengozini. Xa kunjalo
                        kwakunyanzeleka umcebisi wam achazele indawo yomthetho
                        efanelekileyo.
                      </div>
                      <br />
                      <div>
                        Ek gee hiermee toestemming vir berading en dat my bloed
                        getrek mag word vir 'n MIV toets. Ek verstaan dat
                        hierdie sessie vertroulik is behalwe in die geval waar
                        my lewe of iemand anders s’n in gevaar mag wees.Ek
                        verstaan dat my berader dit dan by die betrokke owerhede
                        sal aanmeld.
                      </div>
                    </v-card-text>
                    <v-card-actions>
                      <v-spacer></v-spacer>

                      <v-btn
                        color="green darken-1"
                        text
                        dark
                        @click="dialog = false"
                        v-on:click="dialog2 = true"
                      >
                        AGREE
                      </v-btn>
                      <v-btn
                        color="red darken-1"
                        text
                        dark
                        @click="dialog = false"
                      >
                        DISAGREE
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>

                <!-- Signature Consent -->
                <v-dialog v-model="dialog2" fullscreen>
                  <v-card>
                    <v-card-title>CLIENT SIGNATURE</v-card-title>
                    <div class="container">
                      <div style="display: inline-block">
                        <v-btn color="primary" v-if="!pad" @click="pad = true"
                          >Signature Pad</v-btn
                        >
                        <v-btn color="primary" v-if="pad" @click="pad = false"
                          >Camera</v-btn
                        >
                      </div>
                      <div id="signature-container">
                        <form id="signaturePad">
                          <!-- Signature Pad -->
                          <v-container v-if="pad">
                            <VueSignaturePad
                              v-if="!signed"
                              id="signature"
                              width="100%"
                              height="450px"
                              ref="signaturePad"
                              :options="{
                                onBegin: () => {
                                  $refs.signaturePad.resizeCanvas();
                                },
                              }"
                            />
                          </v-container>
                          <v-container v-if="!pad">
                            <Camera width="100%" :dialog2="dialog2" />
                          </v-container>
                          <!-- Image goes here -->
                          <div
                            style="
                              height: 450px;
                              border: 3px solid #000;
                              width: 100%;
                              border-radius: 5px;
                              margin-top: 10px;
                            "
                            v-if="signed && pad"
                          >
                            <img
                              :src="this.signature"
                              width="100%"
                              height="100%"
                            />
                          </div>
                          <v-card-actions v-if="!signed">
                            <v-btn
                              color="green darken-1"
                              dark
                              v-on:click.prevent="save"
                              v-if="pad"
                            >
                              Save
                            </v-btn>
                            <v-btn
                              color="green darken-1"
                              dark
                              v-on:click.prevent="capturedSave"
                              v-if="!pad"
                            >
                              Save
                            </v-btn>
                            <v-btn
                              v-if="pad"
                              color="blue darken-1"
                              dark
                              @click="undo"
                            >
                              Undo
                            </v-btn>
                            <v-btn
                              v-if="pad"
                              color="red darken-1"
                              dark
                              v-on:click="clear"
                              @click="dialog2 = false"
                            >
                              Cancel
                            </v-btn>
                          </v-card-actions>
                          <v-card-actions v-if="signed && pad">
                            <v-btn
                              color="blue darken-1"
                              dark
                              @click="signed = false"
                            >
                              Sign
                            </v-btn>
                            <v-btn
                              color="red darken-1"
                              dark
                              @click="dialog2 = false"
                            >
                              Exit
                            </v-btn>
                          </v-card-actions>
                        </form>
                      </div>
                    </div>
                  </v-card>
                </v-dialog>
              </div>
            </form>
          </v-stepper-content>
          <v-stepper-content step="5" class="step-window">
            <form>
              <label>{{ survey[4].section[0].label }}</label>
              <Radio
                :fields="survey[4].section[0]"
                @input="(value) => updateTB(value)"
                :intersect="intersect"
              />
              <div v-if="survey[4].section[0].selected == 'No'">
                <label>{{ survey[4].section[1].label }}</label>
                <Select :fields="survey[4].section[1]" />
                <label>{{ survey[4].section[2].label }}</label>
                <Radio :fields="survey[4].section[2]" :intersect="intersect" />
              </div>
              <div v-if="survey[4].section[2].selected == 'Positive'">
                <h3>Refer client to clinic for TB testing</h3>
              </div>
            </form>
          </v-stepper-content>
          <v-stepper-content step="6" class="step-window">
            <form>
              <label>{{ survey[5].section[4].label }}:</label>
              <Select :fields="survey[5].section[4]" />
              <label>{{ survey[5].section[0].label }}</label>
              <Radio :fields="survey[5].section[0]" :intersect="intersect" />
              <div v-if="survey[5].section[0].selected == 'Yes'">
                <label>{{ survey[5].section[1].label }}:</label>
                <Select :fields="survey[5].section[1]" />
                <div
                  v-if="
                    survey[5].section[1].selected ==
                      '6 weeks to 3 months ago' ||
                    survey[5].section[1].selected == 'In the last 6 weeks' ||
                    survey[5].section[1].selected == '3 to 6 months ago'
                  "
                >
                  <label>{{ survey[5].section[2].label }}:</label>
                  <Select :fields="survey[5].section[2]" />
                </div>
                <label>{{ survey[5].section[3].label }}:</label>
                <Select :fields="survey[5].section[3]" />
                <label>{{ survey[5].section[6].label }}:</label>
                <Select :fields="survey[5].section[6]" />
                <label>{{ survey[5].section[7].label }}:</label>
                <Radio :fields="survey[5].section[7]" :intersect="intersect" />
              </div>
              <div
                v-if="
                  survey[5].section[3].selected == 'In the last 6 weeks' ||
                  survey[5].section[4].selected == 'Yes – in the last 6 weeks'
                "
              >
                <label>{{ survey[5].section[5].label }}:</label>
                <Calender
                  :fields="survey[5].section[5]"
                  :intersect="intersect"
                />
              </div>
            </form>
          </v-stepper-content>
          <v-stepper-content step="7" class="step-window">
            <form>
              <label>{{ survey[6].section[0].label }}</label>
              <Radio :fields="survey[6].section[0]" :intersect="intersect" />
              <TxtArea
                :fields="survey[6].section[1]"
                v-if="survey[6].section[0].selected == 'No'"
              />
              <div v-else-if="survey[6].section[0].selected == 'Yes'">
                <label>{{ survey[6].section[2].label }}:</label>
                <v-row>
                  <v-col>
                    <label>{{ survey[6].section[3].label }}:</label>
                    <Txt :fields="survey[6].section[3]" />
                    <label>{{ survey[6].section[5].label }}:</label>
                    <Txt :fields="survey[6].section[5]" />
                    <label>{{ survey[6].section[7].label }}:</label>
                    <Txt :fields="survey[6].section[7]" />
                  </v-col>
                  <v-col>
                    <label>{{ survey[6].section[4].label }}:</label>
                    <Txt :fields="survey[6].section[4]" />
                    <label>{{ survey[6].section[6].label }}:</label>
                    <Txt :fields="survey[6].section[6]" />
                    <label>{{ survey[6].section[8].label }}:</label>
                    <Txt :fields="survey[6].section[8]" />
                  </v-col>
                  <v-col>
                    <label>{{ survey[6].section[9].label }}:</label>
                    <Select :fields="survey[6].section[9]" />
                    <label>{{ survey[6].section[10].label }}:</label>
                    <Select :fields="survey[6].section[10]" />
                    <label>{{ survey[6].section[11].label }}:</label>
                    <Select :fields="survey[6].section[11]" />
                  </v-col>
                </v-row>
                <label>{{ survey[6].section[12].label }}:</label>
                <Radio :fields="survey[6].section[12]" :intersect="intersect" />
              </div>
            </form>
          </v-stepper-content>

          <v-stepper-content step="8" class="step-window">
            <form>
              <div v-if="survey[6].section[12].selected == 'Negative'">
                <label>{{ survey[7].section[0].label }}:</label>
                <Txt :fields="survey[7].section[0]" />

                <div v-if="survey[7].section[0].text > 0">
                  <v-row>
                    <v-col>
                      <label>{{ survey[7].section[2].label }}</label>
                      <Select :fields="survey[7].section[2]" />
                    </v-col>
                    <v-col>
                      <label>{{ survey[7].section[3].label }}</label>
                      <Select :fields="survey[7].section[3]" />
                    </v-col>
                    <v-col>
                      <label>{{ survey[7].section[4].label }}:</label>
                      <Txt :fields="survey[7].section[4]" />
                    </v-col>
                  </v-row>
                </div>
                <!-- second risk -->
                <div v-if="survey[7].section[0].text > 1">
                  <v-row>
                    <v-col>
                      <label>{{ survey[7].section[7].label }}</label>
                      <Select :fields="survey[7].section[7]" />
                    </v-col>
                    <v-col>
                      <label>{{ survey[7].section[9].label }}:</label>
                      <Select :fields="survey[7].section[9]" />
                    </v-col>
                    <v-col>
                      <label>{{ survey[7].section[10].label }}</label>
                      <Txt :fields="survey[7].section[10]" />
                    </v-col>
                  </v-row>
                </div>
                <!-- third risk -->
                <div v-if="survey[7].section[0].text > 2">
                  <v-row>
                    <v-col>
                      <label>{{ survey[7].section[8].label }}</label>
                      <Select :fields="survey[7].section[8]" />
                    </v-col>
                    <v-col>
                      <label>{{ survey[7].section[11].label }}</label>
                      <Select :fields="survey[7].section[11]" />
                    </v-col>
                    <v-col>
                      <label>{{ survey[7].section[12].label }}</label>
                      <Txt :fields="survey[7].section[12]" />
                    </v-col>
                  </v-row>
                </div>
                <!--maintain --->
                <label>{{ survey[7].section[1].label }}:</label>
                <Txt :fields="survey[7].section[1]" />
              </div>
              <div v-if="survey[6].section[12].selected == 'Positive'">
                <!--select steps-->
                <label>{{ survey[7].section[5].label }}:</label>
                <Select :fields="survey[7].section[5]" />
                <!--show steps selected-->
                <v-row>
                  <Txt
                    v-if="
                      survey[7].section[5].selected.includes(
                        'Step 1: Dealing with fears and feelings'
                      ) || false
                    "
                    :fields="survey[7].section[6].answers[0]"
                  />
                  <Txt
                    v-if="
                      survey[7].section[5].selected.includes(
                        'Step 2: Go to clinic for tests'
                      ) || false
                    "
                    :fields="survey[7].section[6].answers[1]"
                  />
                  <Txt
                    v-if="
                      survey[7].section[5].selected.includes(
                        'Step 3: Disclosure and support'
                      ) || false
                    "
                    :fields="survey[7].section[6].answers[2]"
                  />
                  <Txt
                    v-if="
                      survey[7].section[5].selected.includes(
                        'Step 4: Risk reduction'
                      ) || false
                    "
                    :fields="survey[7].section[6].answers[3]"
                  />
                </v-row>
                <!--enter number of risks-->
                <label>{{ survey[7].section[0].label }}:</label>
                <Txt :fields="survey[7].section[0]" />
                <!--show risks entered-->
                <div v-if="survey[7].section[0].text > 0">
                  <v-row>
                    <v-col>
                      <label>{{ survey[7].section[2].label }}</label>
                      <Select :fields="survey[7].section[2]" />
                    </v-col>
                    <v-col>
                      <label>{{ survey[7].section[3].label }}</label>
                      <Select :fields="survey[7].section[3]" />
                    </v-col>
                    <v-col>
                      <label>{{ survey[7].section[4].label }}:</label>
                      <Txt :fields="survey[7].section[4]" />
                    </v-col>
                  </v-row>
                </div>
                <div v-if="survey[7].section[0].text > 1">
                  <v-row>
                    <v-col>
                      <label>{{ survey[7].section[7].label }}</label>
                      <Select :fields="survey[7].section[7]" />
                    </v-col>
                    <v-col>
                      <label>{{ survey[7].section[9].label }}:</label>
                      <Select :fields="survey[7].section[9]" />
                    </v-col>
                    <v-col>
                      <label>{{ survey[7].section[10].label }}</label>
                      <Txt :fields="survey[7].section[10]" />
                    </v-col>
                  </v-row>
                </div>
                <div v-if="survey[7].section[0].text > 2">
                  <v-row>
                    <v-col>
                      <label>{{ survey[7].section[8].label }}</label>
                      <Select :fields="survey[7].section[8]" />
                    </v-col>
                    <v-col>
                      <label>{{ survey[7].section[11].label }}</label>
                      <Select :fields="survey[7].section[11]" />
                    </v-col>
                    <v-col>
                      <label>{{ survey[7].section[12].label }}</label>
                      <Txt :fields="survey[7].section[12]" />
                    </v-col>
                  </v-row>
                </div>
              </div>
            </form>
          </v-stepper-content>
          <v-stepper-content step="9" class="step-window">
            <form>
              <label>{{ survey[8].section[0].label }}</label>
              <Radio :fields="survey[8].section[0]" :intersect="intersect" />
              <div v-if="survey[8].section[0].selected == 'Yes'">
                <label>{{ survey[8].section[1].label }}</label>
                <Select :fields="survey[8].section[1]" />
                <label>{{ survey[8].section[2].label }}</label>
                <Select :fields="survey[8].section[2]" />
              </div>
            </form>
          </v-stepper-content>
          <v-stepper-content step="10" class="step-window">
            <form v-if="!complete">
              <label>{{ survey[9].section[0].label }}:</label>
              <Radio :fields="survey[9].section[0]" :intersect="intersect" />
              <div v-if="survey[9].section[0].selected == 'Yes'">
                <label>{{ survey[9].section[1].label }}:</label>
                <TxtArea :fields="survey[9].section[1]" />
                <label>{{ survey[9].section[2].label }}:</label>
                <Calender
                  :fields="survey[9].section[2]"
                  :intersect="intersect"
                />
              </div>
            </form>
            <div v-if="complete">
              <h4>Survey submitted!</h4>
              <a href="/">Survey Form</a>
            </div>
          </v-stepper-content>
        </v-stepper-items>
        
      </v-stepper>
      <!--Footer with action buttons-->
     
    </v-main>
    <Footer v-if="complete"/>
    <v-footer dark id="survey-app-footer" v-if="!complete">
      <v-btn 
        v-if="step > 0"
        x-large
        rounded
        color="#770000"
        @click.prevent="previous"
      >
        <v-icon left id="circle-left"> mdi-arrow-left </v-icon>
        Previous
      </v-btn>
      <v-btn 
        x-large
        v-if="step <= 0"
        rounded
        color="#770000"
      >
        <a href="/" id="exit-btn">
          <v-icon size="22" left>mdi-page-previous-outline</v-icon>EXIT
        </a>
      </v-btn>
      <v-spacer />
      <v-btn
        v-if="step < 9"
        x-large
        right
        rounded
        class="last-btn"
        color="#770000"
        @click.prevent="proceed"
        :disabled="checkage() < 14"
      >
        Proceed
        <v-icon right id="circle-right">mdi-arrow-right</v-icon>
      </v-btn>
      <v-btn 
        small 
        class="last-btn"
        v-if="step >= 9"
        rounded
        x-large
        color="#770000"
        right 
        @click="saveEntry()"
      >
        Submit
        <v-icon right id="circle-left" class="submit-icon">mdi-send</v-icon>
      </v-btn>
    </v-footer>
  </div>
</template>
<script>
import Txt from "./inputs/Text";
import Radio from "./inputs/Radio";
import Select from "./inputs/Select";
import Clock from "./inputs/Time";
import Calender from "./inputs/Date";
import TxtArea from "./inputs/TextArea";
import Camera from "../components/signatureSection/camera";
import Footer from '../components/Footer'
export default {
  name: "survey",
  components: {
    Txt,
    Radio,
    Select,
    Clock,
    Calender,
    TxtArea,
    Camera,
    Footer
  },
  data() {
    return {
      group: null,
      question: "",
      dialog: false,
      dialog2: false,
      progression: this.progress,
      options: {
        penColor: "#81000b",
      },
      pad: true,
      signature: "",
      step: 0,
      sales_force_client_code: "",
      timeIn: new Date().toLocaleTimeString(),
      complete: false,
    };
  },
  computed: {
    survey() {
      return this.$store.state.questions;
    },
    progress() {
      return this.$store.state.progress;
    },
    page() {
      return this.$store.state.page;
    },
    signed: {
      get() {
        return this.$store.state.signed;
      },
      set(value) {
        this.$store.commit("updateSignature", value);
      },
    },
    photo: {
      get() {
        return this.$store.state.photo;
      },
      set(value) {
        this.$store.commit("updatePhoto", value);
      },
    },
    answers: {
      get() {
        return this.$store.state.answers;
      },
      set(value) {
        this.$store.commit("updateAnswers", value);
      }
    },
  },
  mounted() {
     this.answers.site_type = this.survey[0].section[0].selected || "N/A";
     this.answers.site_name = this.survey[0].section[1].selected || "N/A";
     this.answers.sub_district = this.survey[0].section[2].selected || "N/A";
     this.answers.client_name_and_surname = this.survey[0].section[4].text || 'N/A';
     this.answers.counsellor_name = this.survey[0].section[3].selected || "N/A";
     this.answers.sales_force_client_code = this.survey[1].section[0].text || "N/A";
     this.answers.time_in = this.survey[1].section[1].time || "N/A";
     this.answers.gender = this.survey[1].section[2].selected || "N/A";
     this.answers.birth_date = this.survey[1].section[3].date || "N/A";
     this.answers.age_at_intake = this.checkage();
     this.answers.race = this.survey[2].section[0].selected || "N/A";
     this.answers.mobile = this.survey[2].section[1].text || "N/A";
     this.answers.consent_to_sms =
        this.booleanCheck(this.survey[2].section[2].selected) || false;
     this.answers.home_phone_number = this.survey[2].section[3].text || "N/A";
     this.answers.client_community = this.survey[2].section[4].selected || "N/A";
     this.answers.grade = this.survey[1].section[4].selected || "N/A";
     this.answers.first_time_doing_HIV_test =
        this.booleanCheck(this.survey[3].section[0].selected) || false;
     this.answers.first_time_with_LC =
        this.booleanCheck(this.survey[3].section[1].selected) || false;
     this.answers.consent_to_test =
        this.booleanCheck(this.survey[3].section[6].selected) || false;
     this.answers.scheduled_follow_up_test =
        this.booleanCheck(this.survey[3].section[5].selected) || false;
     this.answers.number_times_tested = this.survey[3].section[2].selected || "N/A";
     this.answers.last_tested = this.survey[3].section[3].date || "N/A";
     this.answers.last_HIV_test = this.survey[3].section[3].date || "N/A";
     this.answers.last_test_result = this.survey[3].section[4].selected || "N/A";

     this.answers.client_on_TB_med = this.booleanCheck(this.survey[4].section[0].selected) || false;
     this.answers.TB_symptoms = this.survey[4].section[1].selected || "N/A";
     this.answers.TB_screening_result = this.survey[4].section[2].selected || "N/A";

     this.answers.blood_contact = this.survey[5].section[4].selected || "N/A";
     this.answers.has_client_ever_had_sex = this.booleanCheck(this.survey[5].section[0].selected) || false;
     this.answers.last_had_sex = this.survey[5].section[1].selected || "N/A";
     this.answers.kind_of_sex = this.survey[5].section[2].selected || "N/A";
     this.answers.last_had_unprotected_sex =
        this.survey[5].section[3].selected || "N/A";
     this.answers.end_of_window_period = this.survey[5].section[5].date || "N/A";
     this.answers.STI_symptoms = this.survey[5].section[6].selected || "N/A";
     this.answers.STI_screening_result = this.survey[5].section[7].selected || "N/A";

     this.answers.recieved_test_results = this.booleanCheck(this.survey[6].section[0].selected) || false;
     this.answers.reason_for_no_result = this.survey[6].section[1].text || "N/A";
     this.answers.test1_type = this.survey[6].section[3].text || "N/A";
     this.answers.test1_lot_number = this.survey[6].section[4].text || "N/A";
     this.answers.test2_type = this.survey[6].section[5].text || "N/A";
     this.answers.test2_lot_number = this.survey[6].section[6].text || "N/A";
     this.answers.test3_type = this.survey[6].section[7].text || "N/A";
     this.answers.test3_lot_number = this.survey[6].section[8].text || "N/A";
     this.answers.test1_results = this.survey[6].section[9].selected || "N/A";
     this.answers.test2_results = this.survey[6].section[10].selected || "N/A";
     this.answers.test3_results = this.survey[6].section[11].selected || "N/A";
     this.answers.HIV_test_results = this.survey[6].section[12].selected || "N/A";
     this.answers.risk1_stage = this.survey[7].section[3].selected || "N/A";

     this.answers.risks_number = Number(this.survey[7].section[0].text) || 0;
     this.answers.neg_client_maintain_plan = this.survey[7].section[1].text || "N/A";

     this.answers.client_risk1 = this.survey[7].section[2].selected || "N/A";
     this.answers.client_risk1_stage = this.survey[7].section[3].selected || "N/A";
     this.answers.client_action_plan1 = this.survey[7].section[4].text || "N/A";

     this.answers.client_risk2 = this.survey[7].section[7].selected || "N/A";
     this.answers.client_risk2_stage = this.survey[7].section[9].selected || "N/A";
     this.answers.client_action_plan2 = this.survey[7].section[10].text || "N/A";

     this.answers.client_risk3 = this.survey[7].section[8].selected || "N/A";
     this.answers.client_risk3_stage = this.survey[7].section[11].selected || "N/A";
     this.answers.client_action_plan3 = this.survey[7].section[12].text || "N/A";

     this.answers.what_steps = this.survey[7].section[5].selected || "N/A";
     this.answers.step1_action_plan =
        this.survey[7].section[6].answers[0].text || "N/A";
     this.answers.step2_action_plan =
        this.survey[7].section[6].answers[1].text || "N/A";
     this.answers.step3_action_plan =
        this.survey[7].section[6].answers[2].text || "N/A";
     this.answers.step4_action_plan =
        this.survey[7].section[6].answers[3].text || "N/A";

     this.answers.referred = this.booleanCheck(this.survey[8].section[0].selected) || false;
     this.answers.referral_point = this.survey[8].section[1].selected || "N/A";
     this.answers.referral_reason = this.survey[8].section[2].selected || "N/A";
     this.answers.follow_up_required = this.booleanCheck(this.survey[9].section[0].selected) || false;
     this.answers.follow_up_reason = this.survey[9].section[1].text || "N/A";
     this.answers.follow_up_date = this.survey[9].section[2].date || "N/A";
     this.answers.signature = this.photo;
     this.answers.time_out = Date.now();  
  },
  created() {
    this.getQuestion();
    this.survey[1].section[1].time = this.timeIn;
    this.survey[2].section[2].selected = "No";
    this.survey[3].section[0].selected = "No";
    this.survey[3].section[1].selected = "No";
    this.survey[3].section[5].selected = "No";
    this.survey[3].section[6].selected = "No";
    this.survey[4].section[0].selected = "No";
    this.survey[5].section[0].selected = "No";
    this.survey[6].section[0].selected = "No";
    this.survey[8].section[0].selected = "No";
  },
  updated() {
    this.getQuestion();
    this.checkage();
    this.$nextTick(function () {
      if (this.page <= 1 && this.survey[0].section[1].selected) {
        console.log(this.answers);
        this.generateCode();
      }
    });
  },
  methods: {
    getQuestion() {
      var found = this.survey.find(({ page }) => {
        return page === this.page;
      });
      this.question = found.title;
    },
    previous() {
      if (this.page > 1 && this.page <= this.survey.length) {
        this.$store.commit("decrement");
        this.$store.commit("previous");
        this.getQuestion();
        if (this.step > 0) {
          this.step -= 1;
        } else {
          this.step = 0;
        }
      }
    },
    proceed() {
      if (this.page > 0 && this.page < 10) {
        this.$store.commit("increment");
        this.$store.commit("proceed");
        this.getQuestion();
        this.step += 1;
      }
    },
    intersect() {
      this.$forceUpdate();
    },
    checkage() {
      var difference = new Date() - new Date(this.survey[1].section[3].date);
      var age = Math.floor(difference / 31557600000);
      return age;
    },
    generateCode() {
      this.sales_force_client_code = Math.floor(1000 + Math.random() * 9000);
      this.site = this.survey[0].section[1].selected;
      this.survey[1].section[0].text =
        this.site.slice(0, 3) + this.sales_force_client_code;
    },
    undo() {
      this.$refs.signaturePad.undoSignature();
    },
    save() {
      const { isEmpty, data } = this.$refs.signaturePad.saveSignature();
      if (!isEmpty) {
        // const file = this.dataURLtoFile(data, 'file');
        this.photo = data;
        this.signed = true;
        this.dialog2 = false;
      } else if (isEmpty) {
        this.signature = this.photo;
        this.signed = true;
        this.dialog2 = false;
      } else {
        alert("No Signature!");
      }
    },
    capturedSave() {
      this.dialog2 = false;
      this.signed = true;
      this.pad = false;
    },
    dataURLtoFile(dataurl, filename) {
      const arr = dataurl.split(",");
      const mime = arr[0].match(/:(.*?);/)[1];
      const bstr = atob(arr[1]);
      let n = bstr.length;
      const u8arr = new Uint8Array(n);
      while (n) {
        u8arr[n - 1] = bstr.charCodeAt(n - 1);
        n -= 1;
      }
      return new File([u8arr], filename, { type: mime });
    },
    clear() {
      this.$refs.signaturePad.clearSignature();
    },
    booleanCheck(value) {
      if (value.toLowerCase() == "yes") return true;
      else if (value.toLowerCase() == "no") return false;
    },

    saveEntry() {

      let surveyEntry = this.answers;
      let URL = "http://localhost:5454/api/survey";
      // console.log("data ", surveyEntry);
      let token = window.localStorage.getItem("token");
      fetch(URL, {
        method: "POST",
        body: JSON.stringify(surveyEntry),
        mode: "cors",

        headers: {
          "Content-type": "application/json",
          "x-auth-token": token,
        },
      })
        .then((response) => response.json())
        .then((json) => {
          if(!json.msg){
             this.complete = true;
             this.question = 'Survey Complete!'
             console.log(json)
          }
        })
        .catch((err) => console.log("err->", err));
    },
  },
};
</script>
<style scoped>
#app-main {
  height: 90vh;
  font-family: "Open Sans";
  padding: 20px;
}
#survey-app-footer {
  height: 10vh;
  z-index: 2px;
  bottom: 0;
  background: #770000;
}
#progress-line {
  position: fixed;
  color: black;
  background-color: #f56161;
}
.last-btn {
  margin-right: 20px;
}
#stepper-header {
  height: 7.5vh;
  display: flex;
  justify-content: center;
  align-items: center;
    background: #ffffff;
    color: #770000;
}
#devider {
  color: black;
}
.stepper
#stepper-content {
  height: 80vh;
  color: black;
  overflow-y: scroll;
  background: #ffffff;
}

#submit-icon:hover {
  transform: rotate(45deg);
  transition: 0.15s ease;
}
#circle-left:hover {
  transform: translateX(-3);
  transition: 0.15s ease;
}
#input {
  color: white;
}
.alert {
  color: red;
  margin: 0;
}
.age-check {
  margin: 10px;
}
#exit-btn {
  text-decoration: none;
  color: #ffffff;
}
</style>
