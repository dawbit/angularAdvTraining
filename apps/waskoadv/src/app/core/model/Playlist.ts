import { environment } from "apps/waskoadv/src/environments/environment"

interface Track {
  id: string;
  name: string;
  type: 'track';
}

export interface Playlist {
  id: string;
  name: string;
  public: boolean;
  type: 'playlist';
  description: string;
  tracks?: Track[]
}


// const p: Playlist = {} as Playlist
// // p.tracks.length // Object is possibly 'undefined'

// p.tracks // Track[] or maybe undefined
// if (p.tracks !== undefined) {
//   p.tracks.length // Track[]  for Sure
// }else{
//   p.tracks // undefined for sure
// }

// const len1 = p.tracks !== undefined? p.tracks.length : 0 // number
// const len2 = p.tracks && p.tracks.length // number | undefined
// const len3 = p.tracks?.length || 0 // number
// const len4 = p.tracks?.length || 0 // number
// const len5 = p.tracks!.length  // number ???
// const len6 = p.tracks?.length ?? 0  // number 


// interface Point { x: number; y: number }
// interface Vector { x: number; y: number, length: number }

// // Structural Typing (DuckTyping), not Nominal 

// let p: Point = { x: 123, y: 123 }
// let v: Vector = { x: 123, y: 123, length: 123 }

// p = v
// // v = p // Property 'length' is missing in type 'Point' but required in type 'Vector'
// // p.length  // Property 'length' does not exist on type 'Point'
//             // BUT exists in JavaScript

// // Liskov Substitution - subsittute more complex/specific for more general
// // Interface Segregation - require minimal interface you acutally use

// // if(process.env.NODE_ENV !== 'production'){ // Substitute during compilation
// if (!environment.production) { // Substitute during compilation
//   // if('development' !== 'production'){ // Dead Code Removal - remove code during compilation 
//   const x = 1
// }
// // 'client_id' === environment.client_id
// // 'client_id' in environment.clients

// // type ResultType = string | number
// type ResultType = { value: string } | { value: number } // | { value: boolean }

// // Not all code paths return a value.ts(7030)
// function parseResult(result: ResultType) { // : string | undefined

//   if (typeof result.value === 'string') {
//     return result.value.toLocaleLowerCase()
//   } else if (typeof result.value === 'number') {
//     return result.value.toExponential()
//   } else {
//     // const cantHappen: never = result.value
//     // throw new Error('Unexpected case ' + result.value)
//     exhaustivenessCheck(result.value)
//   }
// }

// function exhaustivenessCheck(_never: never): never {
//   throw new Error('Unexpected case ' + _never)
// }

// const resu = parseResult({} as any)
// resu?.length

// type ResultType =
//   | { key: string, value: { text: string } }
//   | { key: number, value: { number: number } }

// === ''
// typeof === '' 
// 'key' in result
// instanceof SomeClass
