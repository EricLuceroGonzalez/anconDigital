import { Fragment } from "react";

export default function encuestaQr(params) {
  return (
    <Fragment>
      <div class="w-full max-w-lg">
        <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div>
            <h2 class="font-sans text-lg font-black"> ¡Gracias por tu compra! 😉</h2>
            <h2 class="font-sans text-lg font-black">Participa, comenta y gana 🎁</h2>
            <h2 class="font-sans text-lg font-medium">Tu opinión es muy importante </h2>
          </div>
          <div class="mb-4">
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Nombre"
            ></input>
          </div>
          <div class="mb-6">
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="userphone"
              type="number"
              placeholder="Teléfono"
            ></input>
          </div>
          <div class="mb-6">
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="usermail"
              type="email"
              placeholder="Correo electrónico"
            ></input>
          </div>
          <div class="flex items-center justify-between">
            <button
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Siguiente
            </button>
          </div>
        </form>
      </div>

      <form class="w-full bordeB">
        <p>Completa tus datos de contacto</p>
        <div class="flex flex-col items-center mb-6 md:w-full lg:w-2/3 ml-auto mr-auto bordeC">
          <div class="md:w-1/3 lg:w-2/3 bordeA">
            <label
              class="block text-gray-500 font-bold md:text-center mb-1 md:mb-0 pr-4"
              for="inline-password"
            >
              Password
            </label>
          </div>
          <div class="md:w-1/3 lg:w-2/3 bordeB">
            <textarea
              class="h-full w-full bg-gray-200 appearance-none border-2 border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="inline-password"
              type="text"
              rows={4}
              placeholder="******************"
            ></textarea>
          </div>
        </div>
        <div class="md:flex md:items-center mb-6">
          <div class="md:w-1/3"></div>
          <label class="md:w-2/3 block text-gray-500 font-bold">
            <input class="mr-2 leading-tight" type="checkbox"></input>
            <span class="text-sm">Send me your newsletter!</span>
          </label>
        </div>
        <div class="md:flex md:items-center">
          <div class="md:w-1/3"></div>
          <div class="md:w-2/3">
            <button
              class="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
              type="button"
            >
              Sign Up
            </button>
          </div>
        </div>
      </form>
    </Fragment>
  );
}
