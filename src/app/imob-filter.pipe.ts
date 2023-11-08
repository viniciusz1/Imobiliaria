// import { Pipe, PipeTransform } from '@angular/core';

// @Pipe({
//   name: 'imobFilter'
// })
// export class ImobFilterPipe implements PipeTransform {

//   transform(value: Array<any>, searchString?: string, key1?: string, key2?: string ): Array<any> {
//     return value.filter(
//       (res: any) =>{
//         //******** Usin{g Startswith()  *************
//         if(searchString == undefined){
//           return []
//         }
//         res['tipo'].toLowerCase().startsWith(searchString.toLowerCase()) 
        
//         res['valor'].toLowerCase().startsWith(searchString.toLowerCase())
//         res['bairro'].toLowerCase().startsWith(searchString.toLowerCase())
//         res['imobiliaria'].toLowerCase().startsWith(searchString.toLowerCase())
//         res['descricao'].toLowerCase().startsWith(searchString.toLowerCase())

//       // *******Using includes() *******
//       // res.country.toLowerCase().includes(args.toLowerCase()) ||
//       // res.name.toLowerCase().includes(args.toLowerCase())

//       // *******Using indexOf() *******
//       //   res.country.toLowerCase().indexOf(args.toLowerCase()) !==-1 ||
//       //  res.name.toLowerCase().indexOf(args.toLowerCase()) !==-1
//       }
//     );
//   }

// }
