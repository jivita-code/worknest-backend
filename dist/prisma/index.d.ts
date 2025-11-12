
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Subscription
 * 
 */
export type Subscription = $Result.DefaultSelection<Prisma.$SubscriptionPayload>
/**
 * Model Department
 * 
 */
export type Department = $Result.DefaultSelection<Prisma.$DepartmentPayload>
/**
 * Model Employee
 * 
 */
export type Employee = $Result.DefaultSelection<Prisma.$EmployeePayload>
/**
 * Model Organization
 * 
 */
export type Organization = $Result.DefaultSelection<Prisma.$OrganizationPayload>
/**
 * Model Plan
 * 
 */
export type Plan = $Result.DefaultSelection<Prisma.$PlanPayload>
/**
 * Model Feature
 * 
 */
export type Feature = $Result.DefaultSelection<Prisma.$FeaturePayload>
/**
 * Model Invoice
 * 
 */
export type Invoice = $Result.DefaultSelection<Prisma.$InvoicePayload>
/**
 * Model Attendance
 * 
 */
export type Attendance = $Result.DefaultSelection<Prisma.$AttendancePayload>
/**
 * Model LeaveRequest
 * 
 */
export type LeaveRequest = $Result.DefaultSelection<Prisma.$LeaveRequestPayload>
/**
 * Model PettyCashRequest
 * 
 */
export type PettyCashRequest = $Result.DefaultSelection<Prisma.$PettyCashRequestPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Subscriptions
 * const subscriptions = await prisma.subscription.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Subscriptions
   * const subscriptions = await prisma.subscription.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.subscription`: Exposes CRUD operations for the **Subscription** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Subscriptions
    * const subscriptions = await prisma.subscription.findMany()
    * ```
    */
  get subscription(): Prisma.SubscriptionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.department`: Exposes CRUD operations for the **Department** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Departments
    * const departments = await prisma.department.findMany()
    * ```
    */
  get department(): Prisma.DepartmentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.employee`: Exposes CRUD operations for the **Employee** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Employees
    * const employees = await prisma.employee.findMany()
    * ```
    */
  get employee(): Prisma.EmployeeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.organization`: Exposes CRUD operations for the **Organization** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Organizations
    * const organizations = await prisma.organization.findMany()
    * ```
    */
  get organization(): Prisma.OrganizationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.plan`: Exposes CRUD operations for the **Plan** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Plans
    * const plans = await prisma.plan.findMany()
    * ```
    */
  get plan(): Prisma.PlanDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.feature`: Exposes CRUD operations for the **Feature** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Features
    * const features = await prisma.feature.findMany()
    * ```
    */
  get feature(): Prisma.FeatureDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.invoice`: Exposes CRUD operations for the **Invoice** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Invoices
    * const invoices = await prisma.invoice.findMany()
    * ```
    */
  get invoice(): Prisma.InvoiceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.attendance`: Exposes CRUD operations for the **Attendance** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Attendances
    * const attendances = await prisma.attendance.findMany()
    * ```
    */
  get attendance(): Prisma.AttendanceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.leaveRequest`: Exposes CRUD operations for the **LeaveRequest** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LeaveRequests
    * const leaveRequests = await prisma.leaveRequest.findMany()
    * ```
    */
  get leaveRequest(): Prisma.LeaveRequestDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pettyCashRequest`: Exposes CRUD operations for the **PettyCashRequest** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PettyCashRequests
    * const pettyCashRequests = await prisma.pettyCashRequest.findMany()
    * ```
    */
  get pettyCashRequest(): Prisma.PettyCashRequestDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.17.1
   * Query Engine version: 272a37d34178c2894197e17273bf937f25acdeac
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Subscription: 'Subscription',
    Department: 'Department',
    Employee: 'Employee',
    Organization: 'Organization',
    Plan: 'Plan',
    Feature: 'Feature',
    Invoice: 'Invoice',
    Attendance: 'Attendance',
    LeaveRequest: 'LeaveRequest',
    PettyCashRequest: 'PettyCashRequest'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "subscription" | "department" | "employee" | "organization" | "plan" | "feature" | "invoice" | "attendance" | "leaveRequest" | "pettyCashRequest"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Subscription: {
        payload: Prisma.$SubscriptionPayload<ExtArgs>
        fields: Prisma.SubscriptionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SubscriptionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SubscriptionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          findFirst: {
            args: Prisma.SubscriptionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SubscriptionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          findMany: {
            args: Prisma.SubscriptionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>[]
          }
          create: {
            args: Prisma.SubscriptionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          createMany: {
            args: Prisma.SubscriptionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SubscriptionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>[]
          }
          delete: {
            args: Prisma.SubscriptionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          update: {
            args: Prisma.SubscriptionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          deleteMany: {
            args: Prisma.SubscriptionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SubscriptionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SubscriptionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>[]
          }
          upsert: {
            args: Prisma.SubscriptionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          aggregate: {
            args: Prisma.SubscriptionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSubscription>
          }
          groupBy: {
            args: Prisma.SubscriptionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SubscriptionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SubscriptionCountArgs<ExtArgs>
            result: $Utils.Optional<SubscriptionCountAggregateOutputType> | number
          }
        }
      }
      Department: {
        payload: Prisma.$DepartmentPayload<ExtArgs>
        fields: Prisma.DepartmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DepartmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DepartmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>
          }
          findFirst: {
            args: Prisma.DepartmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DepartmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>
          }
          findMany: {
            args: Prisma.DepartmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>[]
          }
          create: {
            args: Prisma.DepartmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>
          }
          createMany: {
            args: Prisma.DepartmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DepartmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>[]
          }
          delete: {
            args: Prisma.DepartmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>
          }
          update: {
            args: Prisma.DepartmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>
          }
          deleteMany: {
            args: Prisma.DepartmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DepartmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DepartmentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>[]
          }
          upsert: {
            args: Prisma.DepartmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>
          }
          aggregate: {
            args: Prisma.DepartmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDepartment>
          }
          groupBy: {
            args: Prisma.DepartmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<DepartmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.DepartmentCountArgs<ExtArgs>
            result: $Utils.Optional<DepartmentCountAggregateOutputType> | number
          }
        }
      }
      Employee: {
        payload: Prisma.$EmployeePayload<ExtArgs>
        fields: Prisma.EmployeeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EmployeeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EmployeeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          findFirst: {
            args: Prisma.EmployeeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EmployeeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          findMany: {
            args: Prisma.EmployeeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>[]
          }
          create: {
            args: Prisma.EmployeeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          createMany: {
            args: Prisma.EmployeeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EmployeeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>[]
          }
          delete: {
            args: Prisma.EmployeeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          update: {
            args: Prisma.EmployeeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          deleteMany: {
            args: Prisma.EmployeeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EmployeeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EmployeeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>[]
          }
          upsert: {
            args: Prisma.EmployeeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          aggregate: {
            args: Prisma.EmployeeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEmployee>
          }
          groupBy: {
            args: Prisma.EmployeeGroupByArgs<ExtArgs>
            result: $Utils.Optional<EmployeeGroupByOutputType>[]
          }
          count: {
            args: Prisma.EmployeeCountArgs<ExtArgs>
            result: $Utils.Optional<EmployeeCountAggregateOutputType> | number
          }
        }
      }
      Organization: {
        payload: Prisma.$OrganizationPayload<ExtArgs>
        fields: Prisma.OrganizationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrganizationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrganizationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          findFirst: {
            args: Prisma.OrganizationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrganizationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          findMany: {
            args: Prisma.OrganizationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>[]
          }
          create: {
            args: Prisma.OrganizationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          createMany: {
            args: Prisma.OrganizationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrganizationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>[]
          }
          delete: {
            args: Prisma.OrganizationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          update: {
            args: Prisma.OrganizationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          deleteMany: {
            args: Prisma.OrganizationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrganizationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OrganizationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>[]
          }
          upsert: {
            args: Prisma.OrganizationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          aggregate: {
            args: Prisma.OrganizationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrganization>
          }
          groupBy: {
            args: Prisma.OrganizationGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrganizationGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrganizationCountArgs<ExtArgs>
            result: $Utils.Optional<OrganizationCountAggregateOutputType> | number
          }
        }
      }
      Plan: {
        payload: Prisma.$PlanPayload<ExtArgs>
        fields: Prisma.PlanFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PlanFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PlanFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanPayload>
          }
          findFirst: {
            args: Prisma.PlanFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PlanFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanPayload>
          }
          findMany: {
            args: Prisma.PlanFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanPayload>[]
          }
          create: {
            args: Prisma.PlanCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanPayload>
          }
          createMany: {
            args: Prisma.PlanCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PlanCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanPayload>[]
          }
          delete: {
            args: Prisma.PlanDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanPayload>
          }
          update: {
            args: Prisma.PlanUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanPayload>
          }
          deleteMany: {
            args: Prisma.PlanDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PlanUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PlanUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanPayload>[]
          }
          upsert: {
            args: Prisma.PlanUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanPayload>
          }
          aggregate: {
            args: Prisma.PlanAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePlan>
          }
          groupBy: {
            args: Prisma.PlanGroupByArgs<ExtArgs>
            result: $Utils.Optional<PlanGroupByOutputType>[]
          }
          count: {
            args: Prisma.PlanCountArgs<ExtArgs>
            result: $Utils.Optional<PlanCountAggregateOutputType> | number
          }
        }
      }
      Feature: {
        payload: Prisma.$FeaturePayload<ExtArgs>
        fields: Prisma.FeatureFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FeatureFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeaturePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FeatureFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeaturePayload>
          }
          findFirst: {
            args: Prisma.FeatureFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeaturePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FeatureFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeaturePayload>
          }
          findMany: {
            args: Prisma.FeatureFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeaturePayload>[]
          }
          create: {
            args: Prisma.FeatureCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeaturePayload>
          }
          createMany: {
            args: Prisma.FeatureCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FeatureCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeaturePayload>[]
          }
          delete: {
            args: Prisma.FeatureDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeaturePayload>
          }
          update: {
            args: Prisma.FeatureUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeaturePayload>
          }
          deleteMany: {
            args: Prisma.FeatureDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FeatureUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FeatureUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeaturePayload>[]
          }
          upsert: {
            args: Prisma.FeatureUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeaturePayload>
          }
          aggregate: {
            args: Prisma.FeatureAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFeature>
          }
          groupBy: {
            args: Prisma.FeatureGroupByArgs<ExtArgs>
            result: $Utils.Optional<FeatureGroupByOutputType>[]
          }
          count: {
            args: Prisma.FeatureCountArgs<ExtArgs>
            result: $Utils.Optional<FeatureCountAggregateOutputType> | number
          }
        }
      }
      Invoice: {
        payload: Prisma.$InvoicePayload<ExtArgs>
        fields: Prisma.InvoiceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InvoiceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InvoiceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>
          }
          findFirst: {
            args: Prisma.InvoiceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InvoiceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>
          }
          findMany: {
            args: Prisma.InvoiceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>[]
          }
          create: {
            args: Prisma.InvoiceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>
          }
          createMany: {
            args: Prisma.InvoiceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InvoiceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>[]
          }
          delete: {
            args: Prisma.InvoiceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>
          }
          update: {
            args: Prisma.InvoiceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>
          }
          deleteMany: {
            args: Prisma.InvoiceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InvoiceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.InvoiceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>[]
          }
          upsert: {
            args: Prisma.InvoiceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>
          }
          aggregate: {
            args: Prisma.InvoiceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInvoice>
          }
          groupBy: {
            args: Prisma.InvoiceGroupByArgs<ExtArgs>
            result: $Utils.Optional<InvoiceGroupByOutputType>[]
          }
          count: {
            args: Prisma.InvoiceCountArgs<ExtArgs>
            result: $Utils.Optional<InvoiceCountAggregateOutputType> | number
          }
        }
      }
      Attendance: {
        payload: Prisma.$AttendancePayload<ExtArgs>
        fields: Prisma.AttendanceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AttendanceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AttendanceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>
          }
          findFirst: {
            args: Prisma.AttendanceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AttendanceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>
          }
          findMany: {
            args: Prisma.AttendanceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>[]
          }
          create: {
            args: Prisma.AttendanceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>
          }
          createMany: {
            args: Prisma.AttendanceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AttendanceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>[]
          }
          delete: {
            args: Prisma.AttendanceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>
          }
          update: {
            args: Prisma.AttendanceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>
          }
          deleteMany: {
            args: Prisma.AttendanceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AttendanceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AttendanceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>[]
          }
          upsert: {
            args: Prisma.AttendanceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>
          }
          aggregate: {
            args: Prisma.AttendanceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAttendance>
          }
          groupBy: {
            args: Prisma.AttendanceGroupByArgs<ExtArgs>
            result: $Utils.Optional<AttendanceGroupByOutputType>[]
          }
          count: {
            args: Prisma.AttendanceCountArgs<ExtArgs>
            result: $Utils.Optional<AttendanceCountAggregateOutputType> | number
          }
        }
      }
      LeaveRequest: {
        payload: Prisma.$LeaveRequestPayload<ExtArgs>
        fields: Prisma.LeaveRequestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LeaveRequestFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaveRequestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LeaveRequestFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaveRequestPayload>
          }
          findFirst: {
            args: Prisma.LeaveRequestFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaveRequestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LeaveRequestFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaveRequestPayload>
          }
          findMany: {
            args: Prisma.LeaveRequestFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaveRequestPayload>[]
          }
          create: {
            args: Prisma.LeaveRequestCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaveRequestPayload>
          }
          createMany: {
            args: Prisma.LeaveRequestCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LeaveRequestCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaveRequestPayload>[]
          }
          delete: {
            args: Prisma.LeaveRequestDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaveRequestPayload>
          }
          update: {
            args: Prisma.LeaveRequestUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaveRequestPayload>
          }
          deleteMany: {
            args: Prisma.LeaveRequestDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LeaveRequestUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LeaveRequestUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaveRequestPayload>[]
          }
          upsert: {
            args: Prisma.LeaveRequestUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaveRequestPayload>
          }
          aggregate: {
            args: Prisma.LeaveRequestAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLeaveRequest>
          }
          groupBy: {
            args: Prisma.LeaveRequestGroupByArgs<ExtArgs>
            result: $Utils.Optional<LeaveRequestGroupByOutputType>[]
          }
          count: {
            args: Prisma.LeaveRequestCountArgs<ExtArgs>
            result: $Utils.Optional<LeaveRequestCountAggregateOutputType> | number
          }
        }
      }
      PettyCashRequest: {
        payload: Prisma.$PettyCashRequestPayload<ExtArgs>
        fields: Prisma.PettyCashRequestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PettyCashRequestFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PettyCashRequestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PettyCashRequestFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PettyCashRequestPayload>
          }
          findFirst: {
            args: Prisma.PettyCashRequestFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PettyCashRequestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PettyCashRequestFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PettyCashRequestPayload>
          }
          findMany: {
            args: Prisma.PettyCashRequestFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PettyCashRequestPayload>[]
          }
          create: {
            args: Prisma.PettyCashRequestCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PettyCashRequestPayload>
          }
          createMany: {
            args: Prisma.PettyCashRequestCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PettyCashRequestCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PettyCashRequestPayload>[]
          }
          delete: {
            args: Prisma.PettyCashRequestDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PettyCashRequestPayload>
          }
          update: {
            args: Prisma.PettyCashRequestUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PettyCashRequestPayload>
          }
          deleteMany: {
            args: Prisma.PettyCashRequestDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PettyCashRequestUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PettyCashRequestUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PettyCashRequestPayload>[]
          }
          upsert: {
            args: Prisma.PettyCashRequestUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PettyCashRequestPayload>
          }
          aggregate: {
            args: Prisma.PettyCashRequestAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePettyCashRequest>
          }
          groupBy: {
            args: Prisma.PettyCashRequestGroupByArgs<ExtArgs>
            result: $Utils.Optional<PettyCashRequestGroupByOutputType>[]
          }
          count: {
            args: Prisma.PettyCashRequestCountArgs<ExtArgs>
            result: $Utils.Optional<PettyCashRequestCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    subscription?: SubscriptionOmit
    department?: DepartmentOmit
    employee?: EmployeeOmit
    organization?: OrganizationOmit
    plan?: PlanOmit
    feature?: FeatureOmit
    invoice?: InvoiceOmit
    attendance?: AttendanceOmit
    leaveRequest?: LeaveRequestOmit
    pettyCashRequest?: PettyCashRequestOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type SubscriptionCountOutputType
   */

  export type SubscriptionCountOutputType = {
    invoices: number
  }

  export type SubscriptionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    invoices?: boolean | SubscriptionCountOutputTypeCountInvoicesArgs
  }

  // Custom InputTypes
  /**
   * SubscriptionCountOutputType without action
   */
  export type SubscriptionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionCountOutputType
     */
    select?: SubscriptionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SubscriptionCountOutputType without action
   */
  export type SubscriptionCountOutputTypeCountInvoicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InvoiceWhereInput
  }


  /**
   * Count Type DepartmentCountOutputType
   */

  export type DepartmentCountOutputType = {
    sub_departments: number
    employees: number
  }

  export type DepartmentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sub_departments?: boolean | DepartmentCountOutputTypeCountSub_departmentsArgs
    employees?: boolean | DepartmentCountOutputTypeCountEmployeesArgs
  }

  // Custom InputTypes
  /**
   * DepartmentCountOutputType without action
   */
  export type DepartmentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DepartmentCountOutputType
     */
    select?: DepartmentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DepartmentCountOutputType without action
   */
  export type DepartmentCountOutputTypeCountSub_departmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DepartmentWhereInput
  }

  /**
   * DepartmentCountOutputType without action
   */
  export type DepartmentCountOutputTypeCountEmployeesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmployeeWhereInput
  }


  /**
   * Count Type EmployeeCountOutputType
   */

  export type EmployeeCountOutputType = {
    attendances: number
    leave_requests: number
    approved_leaves: number
    petty_cash_requests: number
    approved_petty_cash: number
  }

  export type EmployeeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    attendances?: boolean | EmployeeCountOutputTypeCountAttendancesArgs
    leave_requests?: boolean | EmployeeCountOutputTypeCountLeave_requestsArgs
    approved_leaves?: boolean | EmployeeCountOutputTypeCountApproved_leavesArgs
    petty_cash_requests?: boolean | EmployeeCountOutputTypeCountPetty_cash_requestsArgs
    approved_petty_cash?: boolean | EmployeeCountOutputTypeCountApproved_petty_cashArgs
  }

  // Custom InputTypes
  /**
   * EmployeeCountOutputType without action
   */
  export type EmployeeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeCountOutputType
     */
    select?: EmployeeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EmployeeCountOutputType without action
   */
  export type EmployeeCountOutputTypeCountAttendancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AttendanceWhereInput
  }

  /**
   * EmployeeCountOutputType without action
   */
  export type EmployeeCountOutputTypeCountLeave_requestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LeaveRequestWhereInput
  }

  /**
   * EmployeeCountOutputType without action
   */
  export type EmployeeCountOutputTypeCountApproved_leavesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LeaveRequestWhereInput
  }

  /**
   * EmployeeCountOutputType without action
   */
  export type EmployeeCountOutputTypeCountPetty_cash_requestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PettyCashRequestWhereInput
  }

  /**
   * EmployeeCountOutputType without action
   */
  export type EmployeeCountOutputTypeCountApproved_petty_cashArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PettyCashRequestWhereInput
  }


  /**
   * Count Type OrganizationCountOutputType
   */

  export type OrganizationCountOutputType = {
    invoices: number
    departments: number
    employees: number
    attendances: number
    leave_requests: number
    petty_cash_requests: number
  }

  export type OrganizationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    invoices?: boolean | OrganizationCountOutputTypeCountInvoicesArgs
    departments?: boolean | OrganizationCountOutputTypeCountDepartmentsArgs
    employees?: boolean | OrganizationCountOutputTypeCountEmployeesArgs
    attendances?: boolean | OrganizationCountOutputTypeCountAttendancesArgs
    leave_requests?: boolean | OrganizationCountOutputTypeCountLeave_requestsArgs
    petty_cash_requests?: boolean | OrganizationCountOutputTypeCountPetty_cash_requestsArgs
  }

  // Custom InputTypes
  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationCountOutputType
     */
    select?: OrganizationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeCountInvoicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InvoiceWhereInput
  }

  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeCountDepartmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DepartmentWhereInput
  }

  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeCountEmployeesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmployeeWhereInput
  }

  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeCountAttendancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AttendanceWhereInput
  }

  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeCountLeave_requestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LeaveRequestWhereInput
  }

  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeCountPetty_cash_requestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PettyCashRequestWhereInput
  }


  /**
   * Count Type PlanCountOutputType
   */

  export type PlanCountOutputType = {
    subscriptions: number
    features: number
  }

  export type PlanCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subscriptions?: boolean | PlanCountOutputTypeCountSubscriptionsArgs
    features?: boolean | PlanCountOutputTypeCountFeaturesArgs
  }

  // Custom InputTypes
  /**
   * PlanCountOutputType without action
   */
  export type PlanCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanCountOutputType
     */
    select?: PlanCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PlanCountOutputType without action
   */
  export type PlanCountOutputTypeCountSubscriptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubscriptionWhereInput
  }

  /**
   * PlanCountOutputType without action
   */
  export type PlanCountOutputTypeCountFeaturesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FeatureWhereInput
  }


  /**
   * Count Type FeatureCountOutputType
   */

  export type FeatureCountOutputType = {
    plans: number
  }

  export type FeatureCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    plans?: boolean | FeatureCountOutputTypeCountPlansArgs
  }

  // Custom InputTypes
  /**
   * FeatureCountOutputType without action
   */
  export type FeatureCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeatureCountOutputType
     */
    select?: FeatureCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FeatureCountOutputType without action
   */
  export type FeatureCountOutputTypeCountPlansArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlanWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Subscription
   */

  export type AggregateSubscription = {
    _count: SubscriptionCountAggregateOutputType | null
    _min: SubscriptionMinAggregateOutputType | null
    _max: SubscriptionMaxAggregateOutputType | null
  }

  export type SubscriptionMinAggregateOutputType = {
    sub_id: string | null
    org_id: string | null
    plan_id: string | null
    start_date: Date | null
    end_date: Date | null
    renewal_date: Date | null
    billing_cycle: string | null
    status: string | null
    auto_renew: boolean | null
    trial_end_date: Date | null
    cancelled_at: Date | null
    payment_method: string | null
    created_at: Date | null
    update_at: Date | null
  }

  export type SubscriptionMaxAggregateOutputType = {
    sub_id: string | null
    org_id: string | null
    plan_id: string | null
    start_date: Date | null
    end_date: Date | null
    renewal_date: Date | null
    billing_cycle: string | null
    status: string | null
    auto_renew: boolean | null
    trial_end_date: Date | null
    cancelled_at: Date | null
    payment_method: string | null
    created_at: Date | null
    update_at: Date | null
  }

  export type SubscriptionCountAggregateOutputType = {
    sub_id: number
    org_id: number
    plan_id: number
    start_date: number
    end_date: number
    renewal_date: number
    billing_cycle: number
    status: number
    auto_renew: number
    trial_end_date: number
    cancelled_at: number
    payment_method: number
    created_at: number
    update_at: number
    _all: number
  }


  export type SubscriptionMinAggregateInputType = {
    sub_id?: true
    org_id?: true
    plan_id?: true
    start_date?: true
    end_date?: true
    renewal_date?: true
    billing_cycle?: true
    status?: true
    auto_renew?: true
    trial_end_date?: true
    cancelled_at?: true
    payment_method?: true
    created_at?: true
    update_at?: true
  }

  export type SubscriptionMaxAggregateInputType = {
    sub_id?: true
    org_id?: true
    plan_id?: true
    start_date?: true
    end_date?: true
    renewal_date?: true
    billing_cycle?: true
    status?: true
    auto_renew?: true
    trial_end_date?: true
    cancelled_at?: true
    payment_method?: true
    created_at?: true
    update_at?: true
  }

  export type SubscriptionCountAggregateInputType = {
    sub_id?: true
    org_id?: true
    plan_id?: true
    start_date?: true
    end_date?: true
    renewal_date?: true
    billing_cycle?: true
    status?: true
    auto_renew?: true
    trial_end_date?: true
    cancelled_at?: true
    payment_method?: true
    created_at?: true
    update_at?: true
    _all?: true
  }

  export type SubscriptionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Subscription to aggregate.
     */
    where?: SubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscriptions to fetch.
     */
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Subscriptions
    **/
    _count?: true | SubscriptionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubscriptionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubscriptionMaxAggregateInputType
  }

  export type GetSubscriptionAggregateType<T extends SubscriptionAggregateArgs> = {
        [P in keyof T & keyof AggregateSubscription]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubscription[P]>
      : GetScalarType<T[P], AggregateSubscription[P]>
  }




  export type SubscriptionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubscriptionWhereInput
    orderBy?: SubscriptionOrderByWithAggregationInput | SubscriptionOrderByWithAggregationInput[]
    by: SubscriptionScalarFieldEnum[] | SubscriptionScalarFieldEnum
    having?: SubscriptionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubscriptionCountAggregateInputType | true
    _min?: SubscriptionMinAggregateInputType
    _max?: SubscriptionMaxAggregateInputType
  }

  export type SubscriptionGroupByOutputType = {
    sub_id: string
    org_id: string | null
    plan_id: string | null
    start_date: Date
    end_date: Date
    renewal_date: Date | null
    billing_cycle: string
    status: string
    auto_renew: boolean
    trial_end_date: Date | null
    cancelled_at: Date | null
    payment_method: string | null
    created_at: Date
    update_at: Date
    _count: SubscriptionCountAggregateOutputType | null
    _min: SubscriptionMinAggregateOutputType | null
    _max: SubscriptionMaxAggregateOutputType | null
  }

  type GetSubscriptionGroupByPayload<T extends SubscriptionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubscriptionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubscriptionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubscriptionGroupByOutputType[P]>
            : GetScalarType<T[P], SubscriptionGroupByOutputType[P]>
        }
      >
    >


  export type SubscriptionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    sub_id?: boolean
    org_id?: boolean
    plan_id?: boolean
    start_date?: boolean
    end_date?: boolean
    renewal_date?: boolean
    billing_cycle?: boolean
    status?: boolean
    auto_renew?: boolean
    trial_end_date?: boolean
    cancelled_at?: boolean
    payment_method?: boolean
    created_at?: boolean
    update_at?: boolean
    organization?: boolean | Subscription$organizationArgs<ExtArgs>
    plan?: boolean | Subscription$planArgs<ExtArgs>
    invoices?: boolean | Subscription$invoicesArgs<ExtArgs>
    _count?: boolean | SubscriptionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subscription"]>

  export type SubscriptionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    sub_id?: boolean
    org_id?: boolean
    plan_id?: boolean
    start_date?: boolean
    end_date?: boolean
    renewal_date?: boolean
    billing_cycle?: boolean
    status?: boolean
    auto_renew?: boolean
    trial_end_date?: boolean
    cancelled_at?: boolean
    payment_method?: boolean
    created_at?: boolean
    update_at?: boolean
    organization?: boolean | Subscription$organizationArgs<ExtArgs>
    plan?: boolean | Subscription$planArgs<ExtArgs>
  }, ExtArgs["result"]["subscription"]>

  export type SubscriptionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    sub_id?: boolean
    org_id?: boolean
    plan_id?: boolean
    start_date?: boolean
    end_date?: boolean
    renewal_date?: boolean
    billing_cycle?: boolean
    status?: boolean
    auto_renew?: boolean
    trial_end_date?: boolean
    cancelled_at?: boolean
    payment_method?: boolean
    created_at?: boolean
    update_at?: boolean
    organization?: boolean | Subscription$organizationArgs<ExtArgs>
    plan?: boolean | Subscription$planArgs<ExtArgs>
  }, ExtArgs["result"]["subscription"]>

  export type SubscriptionSelectScalar = {
    sub_id?: boolean
    org_id?: boolean
    plan_id?: boolean
    start_date?: boolean
    end_date?: boolean
    renewal_date?: boolean
    billing_cycle?: boolean
    status?: boolean
    auto_renew?: boolean
    trial_end_date?: boolean
    cancelled_at?: boolean
    payment_method?: boolean
    created_at?: boolean
    update_at?: boolean
  }

  export type SubscriptionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"sub_id" | "org_id" | "plan_id" | "start_date" | "end_date" | "renewal_date" | "billing_cycle" | "status" | "auto_renew" | "trial_end_date" | "cancelled_at" | "payment_method" | "created_at" | "update_at", ExtArgs["result"]["subscription"]>
  export type SubscriptionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | Subscription$organizationArgs<ExtArgs>
    plan?: boolean | Subscription$planArgs<ExtArgs>
    invoices?: boolean | Subscription$invoicesArgs<ExtArgs>
    _count?: boolean | SubscriptionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SubscriptionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | Subscription$organizationArgs<ExtArgs>
    plan?: boolean | Subscription$planArgs<ExtArgs>
  }
  export type SubscriptionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | Subscription$organizationArgs<ExtArgs>
    plan?: boolean | Subscription$planArgs<ExtArgs>
  }

  export type $SubscriptionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Subscription"
    objects: {
      organization: Prisma.$OrganizationPayload<ExtArgs> | null
      plan: Prisma.$PlanPayload<ExtArgs> | null
      invoices: Prisma.$InvoicePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      sub_id: string
      org_id: string | null
      plan_id: string | null
      start_date: Date
      end_date: Date
      renewal_date: Date | null
      billing_cycle: string
      status: string
      auto_renew: boolean
      trial_end_date: Date | null
      cancelled_at: Date | null
      payment_method: string | null
      created_at: Date
      update_at: Date
    }, ExtArgs["result"]["subscription"]>
    composites: {}
  }

  type SubscriptionGetPayload<S extends boolean | null | undefined | SubscriptionDefaultArgs> = $Result.GetResult<Prisma.$SubscriptionPayload, S>

  type SubscriptionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SubscriptionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SubscriptionCountAggregateInputType | true
    }

  export interface SubscriptionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Subscription'], meta: { name: 'Subscription' } }
    /**
     * Find zero or one Subscription that matches the filter.
     * @param {SubscriptionFindUniqueArgs} args - Arguments to find a Subscription
     * @example
     * // Get one Subscription
     * const subscription = await prisma.subscription.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SubscriptionFindUniqueArgs>(args: SelectSubset<T, SubscriptionFindUniqueArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Subscription that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SubscriptionFindUniqueOrThrowArgs} args - Arguments to find a Subscription
     * @example
     * // Get one Subscription
     * const subscription = await prisma.subscription.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SubscriptionFindUniqueOrThrowArgs>(args: SelectSubset<T, SubscriptionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Subscription that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionFindFirstArgs} args - Arguments to find a Subscription
     * @example
     * // Get one Subscription
     * const subscription = await prisma.subscription.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SubscriptionFindFirstArgs>(args?: SelectSubset<T, SubscriptionFindFirstArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Subscription that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionFindFirstOrThrowArgs} args - Arguments to find a Subscription
     * @example
     * // Get one Subscription
     * const subscription = await prisma.subscription.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SubscriptionFindFirstOrThrowArgs>(args?: SelectSubset<T, SubscriptionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Subscriptions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Subscriptions
     * const subscriptions = await prisma.subscription.findMany()
     * 
     * // Get first 10 Subscriptions
     * const subscriptions = await prisma.subscription.findMany({ take: 10 })
     * 
     * // Only select the `sub_id`
     * const subscriptionWithSub_idOnly = await prisma.subscription.findMany({ select: { sub_id: true } })
     * 
     */
    findMany<T extends SubscriptionFindManyArgs>(args?: SelectSubset<T, SubscriptionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Subscription.
     * @param {SubscriptionCreateArgs} args - Arguments to create a Subscription.
     * @example
     * // Create one Subscription
     * const Subscription = await prisma.subscription.create({
     *   data: {
     *     // ... data to create a Subscription
     *   }
     * })
     * 
     */
    create<T extends SubscriptionCreateArgs>(args: SelectSubset<T, SubscriptionCreateArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Subscriptions.
     * @param {SubscriptionCreateManyArgs} args - Arguments to create many Subscriptions.
     * @example
     * // Create many Subscriptions
     * const subscription = await prisma.subscription.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SubscriptionCreateManyArgs>(args?: SelectSubset<T, SubscriptionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Subscriptions and returns the data saved in the database.
     * @param {SubscriptionCreateManyAndReturnArgs} args - Arguments to create many Subscriptions.
     * @example
     * // Create many Subscriptions
     * const subscription = await prisma.subscription.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Subscriptions and only return the `sub_id`
     * const subscriptionWithSub_idOnly = await prisma.subscription.createManyAndReturn({
     *   select: { sub_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SubscriptionCreateManyAndReturnArgs>(args?: SelectSubset<T, SubscriptionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Subscription.
     * @param {SubscriptionDeleteArgs} args - Arguments to delete one Subscription.
     * @example
     * // Delete one Subscription
     * const Subscription = await prisma.subscription.delete({
     *   where: {
     *     // ... filter to delete one Subscription
     *   }
     * })
     * 
     */
    delete<T extends SubscriptionDeleteArgs>(args: SelectSubset<T, SubscriptionDeleteArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Subscription.
     * @param {SubscriptionUpdateArgs} args - Arguments to update one Subscription.
     * @example
     * // Update one Subscription
     * const subscription = await prisma.subscription.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SubscriptionUpdateArgs>(args: SelectSubset<T, SubscriptionUpdateArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Subscriptions.
     * @param {SubscriptionDeleteManyArgs} args - Arguments to filter Subscriptions to delete.
     * @example
     * // Delete a few Subscriptions
     * const { count } = await prisma.subscription.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SubscriptionDeleteManyArgs>(args?: SelectSubset<T, SubscriptionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Subscriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Subscriptions
     * const subscription = await prisma.subscription.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SubscriptionUpdateManyArgs>(args: SelectSubset<T, SubscriptionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Subscriptions and returns the data updated in the database.
     * @param {SubscriptionUpdateManyAndReturnArgs} args - Arguments to update many Subscriptions.
     * @example
     * // Update many Subscriptions
     * const subscription = await prisma.subscription.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Subscriptions and only return the `sub_id`
     * const subscriptionWithSub_idOnly = await prisma.subscription.updateManyAndReturn({
     *   select: { sub_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SubscriptionUpdateManyAndReturnArgs>(args: SelectSubset<T, SubscriptionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Subscription.
     * @param {SubscriptionUpsertArgs} args - Arguments to update or create a Subscription.
     * @example
     * // Update or create a Subscription
     * const subscription = await prisma.subscription.upsert({
     *   create: {
     *     // ... data to create a Subscription
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Subscription we want to update
     *   }
     * })
     */
    upsert<T extends SubscriptionUpsertArgs>(args: SelectSubset<T, SubscriptionUpsertArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Subscriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionCountArgs} args - Arguments to filter Subscriptions to count.
     * @example
     * // Count the number of Subscriptions
     * const count = await prisma.subscription.count({
     *   where: {
     *     // ... the filter for the Subscriptions we want to count
     *   }
     * })
    **/
    count<T extends SubscriptionCountArgs>(
      args?: Subset<T, SubscriptionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubscriptionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Subscription.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SubscriptionAggregateArgs>(args: Subset<T, SubscriptionAggregateArgs>): Prisma.PrismaPromise<GetSubscriptionAggregateType<T>>

    /**
     * Group by Subscription.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SubscriptionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SubscriptionGroupByArgs['orderBy'] }
        : { orderBy?: SubscriptionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SubscriptionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubscriptionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Subscription model
   */
  readonly fields: SubscriptionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Subscription.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SubscriptionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    organization<T extends Subscription$organizationArgs<ExtArgs> = {}>(args?: Subset<T, Subscription$organizationArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    plan<T extends Subscription$planArgs<ExtArgs> = {}>(args?: Subset<T, Subscription$planArgs<ExtArgs>>): Prisma__PlanClient<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    invoices<T extends Subscription$invoicesArgs<ExtArgs> = {}>(args?: Subset<T, Subscription$invoicesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Subscription model
   */
  interface SubscriptionFieldRefs {
    readonly sub_id: FieldRef<"Subscription", 'String'>
    readonly org_id: FieldRef<"Subscription", 'String'>
    readonly plan_id: FieldRef<"Subscription", 'String'>
    readonly start_date: FieldRef<"Subscription", 'DateTime'>
    readonly end_date: FieldRef<"Subscription", 'DateTime'>
    readonly renewal_date: FieldRef<"Subscription", 'DateTime'>
    readonly billing_cycle: FieldRef<"Subscription", 'String'>
    readonly status: FieldRef<"Subscription", 'String'>
    readonly auto_renew: FieldRef<"Subscription", 'Boolean'>
    readonly trial_end_date: FieldRef<"Subscription", 'DateTime'>
    readonly cancelled_at: FieldRef<"Subscription", 'DateTime'>
    readonly payment_method: FieldRef<"Subscription", 'String'>
    readonly created_at: FieldRef<"Subscription", 'DateTime'>
    readonly update_at: FieldRef<"Subscription", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Subscription findUnique
   */
  export type SubscriptionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subscription to fetch.
     */
    where: SubscriptionWhereUniqueInput
  }

  /**
   * Subscription findUniqueOrThrow
   */
  export type SubscriptionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subscription to fetch.
     */
    where: SubscriptionWhereUniqueInput
  }

  /**
   * Subscription findFirst
   */
  export type SubscriptionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subscription to fetch.
     */
    where?: SubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscriptions to fetch.
     */
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Subscriptions.
     */
    cursor?: SubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Subscriptions.
     */
    distinct?: SubscriptionScalarFieldEnum | SubscriptionScalarFieldEnum[]
  }

  /**
   * Subscription findFirstOrThrow
   */
  export type SubscriptionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subscription to fetch.
     */
    where?: SubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscriptions to fetch.
     */
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Subscriptions.
     */
    cursor?: SubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Subscriptions.
     */
    distinct?: SubscriptionScalarFieldEnum | SubscriptionScalarFieldEnum[]
  }

  /**
   * Subscription findMany
   */
  export type SubscriptionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subscriptions to fetch.
     */
    where?: SubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscriptions to fetch.
     */
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Subscriptions.
     */
    cursor?: SubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscriptions.
     */
    skip?: number
    distinct?: SubscriptionScalarFieldEnum | SubscriptionScalarFieldEnum[]
  }

  /**
   * Subscription create
   */
  export type SubscriptionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * The data needed to create a Subscription.
     */
    data: XOR<SubscriptionCreateInput, SubscriptionUncheckedCreateInput>
  }

  /**
   * Subscription createMany
   */
  export type SubscriptionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Subscriptions.
     */
    data: SubscriptionCreateManyInput | SubscriptionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Subscription createManyAndReturn
   */
  export type SubscriptionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * The data used to create many Subscriptions.
     */
    data: SubscriptionCreateManyInput | SubscriptionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Subscription update
   */
  export type SubscriptionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * The data needed to update a Subscription.
     */
    data: XOR<SubscriptionUpdateInput, SubscriptionUncheckedUpdateInput>
    /**
     * Choose, which Subscription to update.
     */
    where: SubscriptionWhereUniqueInput
  }

  /**
   * Subscription updateMany
   */
  export type SubscriptionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Subscriptions.
     */
    data: XOR<SubscriptionUpdateManyMutationInput, SubscriptionUncheckedUpdateManyInput>
    /**
     * Filter which Subscriptions to update
     */
    where?: SubscriptionWhereInput
    /**
     * Limit how many Subscriptions to update.
     */
    limit?: number
  }

  /**
   * Subscription updateManyAndReturn
   */
  export type SubscriptionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * The data used to update Subscriptions.
     */
    data: XOR<SubscriptionUpdateManyMutationInput, SubscriptionUncheckedUpdateManyInput>
    /**
     * Filter which Subscriptions to update
     */
    where?: SubscriptionWhereInput
    /**
     * Limit how many Subscriptions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Subscription upsert
   */
  export type SubscriptionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * The filter to search for the Subscription to update in case it exists.
     */
    where: SubscriptionWhereUniqueInput
    /**
     * In case the Subscription found by the `where` argument doesn't exist, create a new Subscription with this data.
     */
    create: XOR<SubscriptionCreateInput, SubscriptionUncheckedCreateInput>
    /**
     * In case the Subscription was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SubscriptionUpdateInput, SubscriptionUncheckedUpdateInput>
  }

  /**
   * Subscription delete
   */
  export type SubscriptionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter which Subscription to delete.
     */
    where: SubscriptionWhereUniqueInput
  }

  /**
   * Subscription deleteMany
   */
  export type SubscriptionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Subscriptions to delete
     */
    where?: SubscriptionWhereInput
    /**
     * Limit how many Subscriptions to delete.
     */
    limit?: number
  }

  /**
   * Subscription.organization
   */
  export type Subscription$organizationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    where?: OrganizationWhereInput
  }

  /**
   * Subscription.plan
   */
  export type Subscription$planArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plan
     */
    omit?: PlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanInclude<ExtArgs> | null
    where?: PlanWhereInput
  }

  /**
   * Subscription.invoices
   */
  export type Subscription$invoicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    where?: InvoiceWhereInput
    orderBy?: InvoiceOrderByWithRelationInput | InvoiceOrderByWithRelationInput[]
    cursor?: InvoiceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InvoiceScalarFieldEnum | InvoiceScalarFieldEnum[]
  }

  /**
   * Subscription without action
   */
  export type SubscriptionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
  }


  /**
   * Model Department
   */

  export type AggregateDepartment = {
    _count: DepartmentCountAggregateOutputType | null
    _min: DepartmentMinAggregateOutputType | null
    _max: DepartmentMaxAggregateOutputType | null
  }

  export type DepartmentMinAggregateOutputType = {
    dep_id: string | null
    org_id: string | null
    name: string | null
    head_id: string | null
    parent_department_id: string | null
    created_at: Date | null
    update_at: Date | null
  }

  export type DepartmentMaxAggregateOutputType = {
    dep_id: string | null
    org_id: string | null
    name: string | null
    head_id: string | null
    parent_department_id: string | null
    created_at: Date | null
    update_at: Date | null
  }

  export type DepartmentCountAggregateOutputType = {
    dep_id: number
    org_id: number
    name: number
    head_id: number
    parent_department_id: number
    created_at: number
    update_at: number
    _all: number
  }


  export type DepartmentMinAggregateInputType = {
    dep_id?: true
    org_id?: true
    name?: true
    head_id?: true
    parent_department_id?: true
    created_at?: true
    update_at?: true
  }

  export type DepartmentMaxAggregateInputType = {
    dep_id?: true
    org_id?: true
    name?: true
    head_id?: true
    parent_department_id?: true
    created_at?: true
    update_at?: true
  }

  export type DepartmentCountAggregateInputType = {
    dep_id?: true
    org_id?: true
    name?: true
    head_id?: true
    parent_department_id?: true
    created_at?: true
    update_at?: true
    _all?: true
  }

  export type DepartmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Department to aggregate.
     */
    where?: DepartmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Departments to fetch.
     */
    orderBy?: DepartmentOrderByWithRelationInput | DepartmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DepartmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Departments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Departments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Departments
    **/
    _count?: true | DepartmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DepartmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DepartmentMaxAggregateInputType
  }

  export type GetDepartmentAggregateType<T extends DepartmentAggregateArgs> = {
        [P in keyof T & keyof AggregateDepartment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDepartment[P]>
      : GetScalarType<T[P], AggregateDepartment[P]>
  }




  export type DepartmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DepartmentWhereInput
    orderBy?: DepartmentOrderByWithAggregationInput | DepartmentOrderByWithAggregationInput[]
    by: DepartmentScalarFieldEnum[] | DepartmentScalarFieldEnum
    having?: DepartmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DepartmentCountAggregateInputType | true
    _min?: DepartmentMinAggregateInputType
    _max?: DepartmentMaxAggregateInputType
  }

  export type DepartmentGroupByOutputType = {
    dep_id: string
    org_id: string
    name: string
    head_id: string | null
    parent_department_id: string | null
    created_at: Date
    update_at: Date
    _count: DepartmentCountAggregateOutputType | null
    _min: DepartmentMinAggregateOutputType | null
    _max: DepartmentMaxAggregateOutputType | null
  }

  type GetDepartmentGroupByPayload<T extends DepartmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DepartmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DepartmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DepartmentGroupByOutputType[P]>
            : GetScalarType<T[P], DepartmentGroupByOutputType[P]>
        }
      >
    >


  export type DepartmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    dep_id?: boolean
    org_id?: boolean
    name?: boolean
    head_id?: boolean
    parent_department_id?: boolean
    created_at?: boolean
    update_at?: boolean
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    parent_department?: boolean | Department$parent_departmentArgs<ExtArgs>
    sub_departments?: boolean | Department$sub_departmentsArgs<ExtArgs>
    head?: boolean | Department$headArgs<ExtArgs>
    employees?: boolean | Department$employeesArgs<ExtArgs>
    _count?: boolean | DepartmentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["department"]>

  export type DepartmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    dep_id?: boolean
    org_id?: boolean
    name?: boolean
    head_id?: boolean
    parent_department_id?: boolean
    created_at?: boolean
    update_at?: boolean
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    parent_department?: boolean | Department$parent_departmentArgs<ExtArgs>
    head?: boolean | Department$headArgs<ExtArgs>
  }, ExtArgs["result"]["department"]>

  export type DepartmentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    dep_id?: boolean
    org_id?: boolean
    name?: boolean
    head_id?: boolean
    parent_department_id?: boolean
    created_at?: boolean
    update_at?: boolean
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    parent_department?: boolean | Department$parent_departmentArgs<ExtArgs>
    head?: boolean | Department$headArgs<ExtArgs>
  }, ExtArgs["result"]["department"]>

  export type DepartmentSelectScalar = {
    dep_id?: boolean
    org_id?: boolean
    name?: boolean
    head_id?: boolean
    parent_department_id?: boolean
    created_at?: boolean
    update_at?: boolean
  }

  export type DepartmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"dep_id" | "org_id" | "name" | "head_id" | "parent_department_id" | "created_at" | "update_at", ExtArgs["result"]["department"]>
  export type DepartmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    parent_department?: boolean | Department$parent_departmentArgs<ExtArgs>
    sub_departments?: boolean | Department$sub_departmentsArgs<ExtArgs>
    head?: boolean | Department$headArgs<ExtArgs>
    employees?: boolean | Department$employeesArgs<ExtArgs>
    _count?: boolean | DepartmentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DepartmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    parent_department?: boolean | Department$parent_departmentArgs<ExtArgs>
    head?: boolean | Department$headArgs<ExtArgs>
  }
  export type DepartmentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    parent_department?: boolean | Department$parent_departmentArgs<ExtArgs>
    head?: boolean | Department$headArgs<ExtArgs>
  }

  export type $DepartmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Department"
    objects: {
      organization: Prisma.$OrganizationPayload<ExtArgs>
      parent_department: Prisma.$DepartmentPayload<ExtArgs> | null
      sub_departments: Prisma.$DepartmentPayload<ExtArgs>[]
      head: Prisma.$EmployeePayload<ExtArgs> | null
      employees: Prisma.$EmployeePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      dep_id: string
      org_id: string
      name: string
      head_id: string | null
      parent_department_id: string | null
      created_at: Date
      update_at: Date
    }, ExtArgs["result"]["department"]>
    composites: {}
  }

  type DepartmentGetPayload<S extends boolean | null | undefined | DepartmentDefaultArgs> = $Result.GetResult<Prisma.$DepartmentPayload, S>

  type DepartmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DepartmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DepartmentCountAggregateInputType | true
    }

  export interface DepartmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Department'], meta: { name: 'Department' } }
    /**
     * Find zero or one Department that matches the filter.
     * @param {DepartmentFindUniqueArgs} args - Arguments to find a Department
     * @example
     * // Get one Department
     * const department = await prisma.department.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DepartmentFindUniqueArgs>(args: SelectSubset<T, DepartmentFindUniqueArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Department that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DepartmentFindUniqueOrThrowArgs} args - Arguments to find a Department
     * @example
     * // Get one Department
     * const department = await prisma.department.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DepartmentFindUniqueOrThrowArgs>(args: SelectSubset<T, DepartmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Department that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentFindFirstArgs} args - Arguments to find a Department
     * @example
     * // Get one Department
     * const department = await prisma.department.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DepartmentFindFirstArgs>(args?: SelectSubset<T, DepartmentFindFirstArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Department that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentFindFirstOrThrowArgs} args - Arguments to find a Department
     * @example
     * // Get one Department
     * const department = await prisma.department.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DepartmentFindFirstOrThrowArgs>(args?: SelectSubset<T, DepartmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Departments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Departments
     * const departments = await prisma.department.findMany()
     * 
     * // Get first 10 Departments
     * const departments = await prisma.department.findMany({ take: 10 })
     * 
     * // Only select the `dep_id`
     * const departmentWithDep_idOnly = await prisma.department.findMany({ select: { dep_id: true } })
     * 
     */
    findMany<T extends DepartmentFindManyArgs>(args?: SelectSubset<T, DepartmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Department.
     * @param {DepartmentCreateArgs} args - Arguments to create a Department.
     * @example
     * // Create one Department
     * const Department = await prisma.department.create({
     *   data: {
     *     // ... data to create a Department
     *   }
     * })
     * 
     */
    create<T extends DepartmentCreateArgs>(args: SelectSubset<T, DepartmentCreateArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Departments.
     * @param {DepartmentCreateManyArgs} args - Arguments to create many Departments.
     * @example
     * // Create many Departments
     * const department = await prisma.department.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DepartmentCreateManyArgs>(args?: SelectSubset<T, DepartmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Departments and returns the data saved in the database.
     * @param {DepartmentCreateManyAndReturnArgs} args - Arguments to create many Departments.
     * @example
     * // Create many Departments
     * const department = await prisma.department.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Departments and only return the `dep_id`
     * const departmentWithDep_idOnly = await prisma.department.createManyAndReturn({
     *   select: { dep_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DepartmentCreateManyAndReturnArgs>(args?: SelectSubset<T, DepartmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Department.
     * @param {DepartmentDeleteArgs} args - Arguments to delete one Department.
     * @example
     * // Delete one Department
     * const Department = await prisma.department.delete({
     *   where: {
     *     // ... filter to delete one Department
     *   }
     * })
     * 
     */
    delete<T extends DepartmentDeleteArgs>(args: SelectSubset<T, DepartmentDeleteArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Department.
     * @param {DepartmentUpdateArgs} args - Arguments to update one Department.
     * @example
     * // Update one Department
     * const department = await prisma.department.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DepartmentUpdateArgs>(args: SelectSubset<T, DepartmentUpdateArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Departments.
     * @param {DepartmentDeleteManyArgs} args - Arguments to filter Departments to delete.
     * @example
     * // Delete a few Departments
     * const { count } = await prisma.department.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DepartmentDeleteManyArgs>(args?: SelectSubset<T, DepartmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Departments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Departments
     * const department = await prisma.department.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DepartmentUpdateManyArgs>(args: SelectSubset<T, DepartmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Departments and returns the data updated in the database.
     * @param {DepartmentUpdateManyAndReturnArgs} args - Arguments to update many Departments.
     * @example
     * // Update many Departments
     * const department = await prisma.department.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Departments and only return the `dep_id`
     * const departmentWithDep_idOnly = await prisma.department.updateManyAndReturn({
     *   select: { dep_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DepartmentUpdateManyAndReturnArgs>(args: SelectSubset<T, DepartmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Department.
     * @param {DepartmentUpsertArgs} args - Arguments to update or create a Department.
     * @example
     * // Update or create a Department
     * const department = await prisma.department.upsert({
     *   create: {
     *     // ... data to create a Department
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Department we want to update
     *   }
     * })
     */
    upsert<T extends DepartmentUpsertArgs>(args: SelectSubset<T, DepartmentUpsertArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Departments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentCountArgs} args - Arguments to filter Departments to count.
     * @example
     * // Count the number of Departments
     * const count = await prisma.department.count({
     *   where: {
     *     // ... the filter for the Departments we want to count
     *   }
     * })
    **/
    count<T extends DepartmentCountArgs>(
      args?: Subset<T, DepartmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DepartmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Department.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DepartmentAggregateArgs>(args: Subset<T, DepartmentAggregateArgs>): Prisma.PrismaPromise<GetDepartmentAggregateType<T>>

    /**
     * Group by Department.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DepartmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DepartmentGroupByArgs['orderBy'] }
        : { orderBy?: DepartmentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DepartmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDepartmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Department model
   */
  readonly fields: DepartmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Department.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DepartmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    organization<T extends OrganizationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrganizationDefaultArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    parent_department<T extends Department$parent_departmentArgs<ExtArgs> = {}>(args?: Subset<T, Department$parent_departmentArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    sub_departments<T extends Department$sub_departmentsArgs<ExtArgs> = {}>(args?: Subset<T, Department$sub_departmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    head<T extends Department$headArgs<ExtArgs> = {}>(args?: Subset<T, Department$headArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    employees<T extends Department$employeesArgs<ExtArgs> = {}>(args?: Subset<T, Department$employeesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Department model
   */
  interface DepartmentFieldRefs {
    readonly dep_id: FieldRef<"Department", 'String'>
    readonly org_id: FieldRef<"Department", 'String'>
    readonly name: FieldRef<"Department", 'String'>
    readonly head_id: FieldRef<"Department", 'String'>
    readonly parent_department_id: FieldRef<"Department", 'String'>
    readonly created_at: FieldRef<"Department", 'DateTime'>
    readonly update_at: FieldRef<"Department", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Department findUnique
   */
  export type DepartmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * Filter, which Department to fetch.
     */
    where: DepartmentWhereUniqueInput
  }

  /**
   * Department findUniqueOrThrow
   */
  export type DepartmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * Filter, which Department to fetch.
     */
    where: DepartmentWhereUniqueInput
  }

  /**
   * Department findFirst
   */
  export type DepartmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * Filter, which Department to fetch.
     */
    where?: DepartmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Departments to fetch.
     */
    orderBy?: DepartmentOrderByWithRelationInput | DepartmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Departments.
     */
    cursor?: DepartmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Departments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Departments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Departments.
     */
    distinct?: DepartmentScalarFieldEnum | DepartmentScalarFieldEnum[]
  }

  /**
   * Department findFirstOrThrow
   */
  export type DepartmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * Filter, which Department to fetch.
     */
    where?: DepartmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Departments to fetch.
     */
    orderBy?: DepartmentOrderByWithRelationInput | DepartmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Departments.
     */
    cursor?: DepartmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Departments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Departments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Departments.
     */
    distinct?: DepartmentScalarFieldEnum | DepartmentScalarFieldEnum[]
  }

  /**
   * Department findMany
   */
  export type DepartmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * Filter, which Departments to fetch.
     */
    where?: DepartmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Departments to fetch.
     */
    orderBy?: DepartmentOrderByWithRelationInput | DepartmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Departments.
     */
    cursor?: DepartmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Departments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Departments.
     */
    skip?: number
    distinct?: DepartmentScalarFieldEnum | DepartmentScalarFieldEnum[]
  }

  /**
   * Department create
   */
  export type DepartmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * The data needed to create a Department.
     */
    data: XOR<DepartmentCreateInput, DepartmentUncheckedCreateInput>
  }

  /**
   * Department createMany
   */
  export type DepartmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Departments.
     */
    data: DepartmentCreateManyInput | DepartmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Department createManyAndReturn
   */
  export type DepartmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * The data used to create many Departments.
     */
    data: DepartmentCreateManyInput | DepartmentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Department update
   */
  export type DepartmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * The data needed to update a Department.
     */
    data: XOR<DepartmentUpdateInput, DepartmentUncheckedUpdateInput>
    /**
     * Choose, which Department to update.
     */
    where: DepartmentWhereUniqueInput
  }

  /**
   * Department updateMany
   */
  export type DepartmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Departments.
     */
    data: XOR<DepartmentUpdateManyMutationInput, DepartmentUncheckedUpdateManyInput>
    /**
     * Filter which Departments to update
     */
    where?: DepartmentWhereInput
    /**
     * Limit how many Departments to update.
     */
    limit?: number
  }

  /**
   * Department updateManyAndReturn
   */
  export type DepartmentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * The data used to update Departments.
     */
    data: XOR<DepartmentUpdateManyMutationInput, DepartmentUncheckedUpdateManyInput>
    /**
     * Filter which Departments to update
     */
    where?: DepartmentWhereInput
    /**
     * Limit how many Departments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Department upsert
   */
  export type DepartmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * The filter to search for the Department to update in case it exists.
     */
    where: DepartmentWhereUniqueInput
    /**
     * In case the Department found by the `where` argument doesn't exist, create a new Department with this data.
     */
    create: XOR<DepartmentCreateInput, DepartmentUncheckedCreateInput>
    /**
     * In case the Department was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DepartmentUpdateInput, DepartmentUncheckedUpdateInput>
  }

  /**
   * Department delete
   */
  export type DepartmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * Filter which Department to delete.
     */
    where: DepartmentWhereUniqueInput
  }

  /**
   * Department deleteMany
   */
  export type DepartmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Departments to delete
     */
    where?: DepartmentWhereInput
    /**
     * Limit how many Departments to delete.
     */
    limit?: number
  }

  /**
   * Department.parent_department
   */
  export type Department$parent_departmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    where?: DepartmentWhereInput
  }

  /**
   * Department.sub_departments
   */
  export type Department$sub_departmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    where?: DepartmentWhereInput
    orderBy?: DepartmentOrderByWithRelationInput | DepartmentOrderByWithRelationInput[]
    cursor?: DepartmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DepartmentScalarFieldEnum | DepartmentScalarFieldEnum[]
  }

  /**
   * Department.head
   */
  export type Department$headArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    where?: EmployeeWhereInput
  }

  /**
   * Department.employees
   */
  export type Department$employeesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    where?: EmployeeWhereInput
    orderBy?: EmployeeOrderByWithRelationInput | EmployeeOrderByWithRelationInput[]
    cursor?: EmployeeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EmployeeScalarFieldEnum | EmployeeScalarFieldEnum[]
  }

  /**
   * Department without action
   */
  export type DepartmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
  }


  /**
   * Model Employee
   */

  export type AggregateEmployee = {
    _count: EmployeeCountAggregateOutputType | null
    _min: EmployeeMinAggregateOutputType | null
    _max: EmployeeMaxAggregateOutputType | null
  }

  export type EmployeeMinAggregateOutputType = {
    emp_id: string | null
    org_id: string | null
    dep_id: string | null
    employee_number: string | null
    first_name: string | null
    last_name: string | null
    email: string | null
    password: string | null
    phone: string | null
    profile_photo_url: string | null
    designation: string | null
    employment_type: string | null
    join_date: Date | null
    resign_date: Date | null
    status: string | null
    created_at: Date | null
    update_at: Date | null
  }

  export type EmployeeMaxAggregateOutputType = {
    emp_id: string | null
    org_id: string | null
    dep_id: string | null
    employee_number: string | null
    first_name: string | null
    last_name: string | null
    email: string | null
    password: string | null
    phone: string | null
    profile_photo_url: string | null
    designation: string | null
    employment_type: string | null
    join_date: Date | null
    resign_date: Date | null
    status: string | null
    created_at: Date | null
    update_at: Date | null
  }

  export type EmployeeCountAggregateOutputType = {
    emp_id: number
    org_id: number
    dep_id: number
    employee_number: number
    first_name: number
    last_name: number
    email: number
    password: number
    phone: number
    profile_photo_url: number
    designation: number
    employment_type: number
    join_date: number
    resign_date: number
    status: number
    created_at: number
    update_at: number
    _all: number
  }


  export type EmployeeMinAggregateInputType = {
    emp_id?: true
    org_id?: true
    dep_id?: true
    employee_number?: true
    first_name?: true
    last_name?: true
    email?: true
    password?: true
    phone?: true
    profile_photo_url?: true
    designation?: true
    employment_type?: true
    join_date?: true
    resign_date?: true
    status?: true
    created_at?: true
    update_at?: true
  }

  export type EmployeeMaxAggregateInputType = {
    emp_id?: true
    org_id?: true
    dep_id?: true
    employee_number?: true
    first_name?: true
    last_name?: true
    email?: true
    password?: true
    phone?: true
    profile_photo_url?: true
    designation?: true
    employment_type?: true
    join_date?: true
    resign_date?: true
    status?: true
    created_at?: true
    update_at?: true
  }

  export type EmployeeCountAggregateInputType = {
    emp_id?: true
    org_id?: true
    dep_id?: true
    employee_number?: true
    first_name?: true
    last_name?: true
    email?: true
    password?: true
    phone?: true
    profile_photo_url?: true
    designation?: true
    employment_type?: true
    join_date?: true
    resign_date?: true
    status?: true
    created_at?: true
    update_at?: true
    _all?: true
  }

  export type EmployeeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Employee to aggregate.
     */
    where?: EmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employees to fetch.
     */
    orderBy?: EmployeeOrderByWithRelationInput | EmployeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EmployeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Employees
    **/
    _count?: true | EmployeeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EmployeeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EmployeeMaxAggregateInputType
  }

  export type GetEmployeeAggregateType<T extends EmployeeAggregateArgs> = {
        [P in keyof T & keyof AggregateEmployee]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmployee[P]>
      : GetScalarType<T[P], AggregateEmployee[P]>
  }




  export type EmployeeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmployeeWhereInput
    orderBy?: EmployeeOrderByWithAggregationInput | EmployeeOrderByWithAggregationInput[]
    by: EmployeeScalarFieldEnum[] | EmployeeScalarFieldEnum
    having?: EmployeeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EmployeeCountAggregateInputType | true
    _min?: EmployeeMinAggregateInputType
    _max?: EmployeeMaxAggregateInputType
  }

  export type EmployeeGroupByOutputType = {
    emp_id: string
    org_id: string
    dep_id: string | null
    employee_number: string
    first_name: string
    last_name: string
    email: string
    password: string
    phone: string | null
    profile_photo_url: string | null
    designation: string | null
    employment_type: string
    join_date: Date | null
    resign_date: Date | null
    status: string
    created_at: Date
    update_at: Date
    _count: EmployeeCountAggregateOutputType | null
    _min: EmployeeMinAggregateOutputType | null
    _max: EmployeeMaxAggregateOutputType | null
  }

  type GetEmployeeGroupByPayload<T extends EmployeeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EmployeeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EmployeeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EmployeeGroupByOutputType[P]>
            : GetScalarType<T[P], EmployeeGroupByOutputType[P]>
        }
      >
    >


  export type EmployeeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    emp_id?: boolean
    org_id?: boolean
    dep_id?: boolean
    employee_number?: boolean
    first_name?: boolean
    last_name?: boolean
    email?: boolean
    password?: boolean
    phone?: boolean
    profile_photo_url?: boolean
    designation?: boolean
    employment_type?: boolean
    join_date?: boolean
    resign_date?: boolean
    status?: boolean
    created_at?: boolean
    update_at?: boolean
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    department?: boolean | Employee$departmentArgs<ExtArgs>
    headed_department?: boolean | Employee$headed_departmentArgs<ExtArgs>
    attendances?: boolean | Employee$attendancesArgs<ExtArgs>
    leave_requests?: boolean | Employee$leave_requestsArgs<ExtArgs>
    approved_leaves?: boolean | Employee$approved_leavesArgs<ExtArgs>
    petty_cash_requests?: boolean | Employee$petty_cash_requestsArgs<ExtArgs>
    approved_petty_cash?: boolean | Employee$approved_petty_cashArgs<ExtArgs>
    _count?: boolean | EmployeeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["employee"]>

  export type EmployeeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    emp_id?: boolean
    org_id?: boolean
    dep_id?: boolean
    employee_number?: boolean
    first_name?: boolean
    last_name?: boolean
    email?: boolean
    password?: boolean
    phone?: boolean
    profile_photo_url?: boolean
    designation?: boolean
    employment_type?: boolean
    join_date?: boolean
    resign_date?: boolean
    status?: boolean
    created_at?: boolean
    update_at?: boolean
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    department?: boolean | Employee$departmentArgs<ExtArgs>
  }, ExtArgs["result"]["employee"]>

  export type EmployeeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    emp_id?: boolean
    org_id?: boolean
    dep_id?: boolean
    employee_number?: boolean
    first_name?: boolean
    last_name?: boolean
    email?: boolean
    password?: boolean
    phone?: boolean
    profile_photo_url?: boolean
    designation?: boolean
    employment_type?: boolean
    join_date?: boolean
    resign_date?: boolean
    status?: boolean
    created_at?: boolean
    update_at?: boolean
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    department?: boolean | Employee$departmentArgs<ExtArgs>
  }, ExtArgs["result"]["employee"]>

  export type EmployeeSelectScalar = {
    emp_id?: boolean
    org_id?: boolean
    dep_id?: boolean
    employee_number?: boolean
    first_name?: boolean
    last_name?: boolean
    email?: boolean
    password?: boolean
    phone?: boolean
    profile_photo_url?: boolean
    designation?: boolean
    employment_type?: boolean
    join_date?: boolean
    resign_date?: boolean
    status?: boolean
    created_at?: boolean
    update_at?: boolean
  }

  export type EmployeeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"emp_id" | "org_id" | "dep_id" | "employee_number" | "first_name" | "last_name" | "email" | "password" | "phone" | "profile_photo_url" | "designation" | "employment_type" | "join_date" | "resign_date" | "status" | "created_at" | "update_at", ExtArgs["result"]["employee"]>
  export type EmployeeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    department?: boolean | Employee$departmentArgs<ExtArgs>
    headed_department?: boolean | Employee$headed_departmentArgs<ExtArgs>
    attendances?: boolean | Employee$attendancesArgs<ExtArgs>
    leave_requests?: boolean | Employee$leave_requestsArgs<ExtArgs>
    approved_leaves?: boolean | Employee$approved_leavesArgs<ExtArgs>
    petty_cash_requests?: boolean | Employee$petty_cash_requestsArgs<ExtArgs>
    approved_petty_cash?: boolean | Employee$approved_petty_cashArgs<ExtArgs>
    _count?: boolean | EmployeeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EmployeeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    department?: boolean | Employee$departmentArgs<ExtArgs>
  }
  export type EmployeeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    department?: boolean | Employee$departmentArgs<ExtArgs>
  }

  export type $EmployeePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Employee"
    objects: {
      organization: Prisma.$OrganizationPayload<ExtArgs>
      department: Prisma.$DepartmentPayload<ExtArgs> | null
      headed_department: Prisma.$DepartmentPayload<ExtArgs> | null
      attendances: Prisma.$AttendancePayload<ExtArgs>[]
      leave_requests: Prisma.$LeaveRequestPayload<ExtArgs>[]
      approved_leaves: Prisma.$LeaveRequestPayload<ExtArgs>[]
      petty_cash_requests: Prisma.$PettyCashRequestPayload<ExtArgs>[]
      approved_petty_cash: Prisma.$PettyCashRequestPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      emp_id: string
      org_id: string
      dep_id: string | null
      employee_number: string
      first_name: string
      last_name: string
      email: string
      password: string
      phone: string | null
      profile_photo_url: string | null
      designation: string | null
      employment_type: string
      join_date: Date | null
      resign_date: Date | null
      status: string
      created_at: Date
      update_at: Date
    }, ExtArgs["result"]["employee"]>
    composites: {}
  }

  type EmployeeGetPayload<S extends boolean | null | undefined | EmployeeDefaultArgs> = $Result.GetResult<Prisma.$EmployeePayload, S>

  type EmployeeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EmployeeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EmployeeCountAggregateInputType | true
    }

  export interface EmployeeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Employee'], meta: { name: 'Employee' } }
    /**
     * Find zero or one Employee that matches the filter.
     * @param {EmployeeFindUniqueArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EmployeeFindUniqueArgs>(args: SelectSubset<T, EmployeeFindUniqueArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Employee that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EmployeeFindUniqueOrThrowArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EmployeeFindUniqueOrThrowArgs>(args: SelectSubset<T, EmployeeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Employee that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeFindFirstArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EmployeeFindFirstArgs>(args?: SelectSubset<T, EmployeeFindFirstArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Employee that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeFindFirstOrThrowArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EmployeeFindFirstOrThrowArgs>(args?: SelectSubset<T, EmployeeFindFirstOrThrowArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Employees that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Employees
     * const employees = await prisma.employee.findMany()
     * 
     * // Get first 10 Employees
     * const employees = await prisma.employee.findMany({ take: 10 })
     * 
     * // Only select the `emp_id`
     * const employeeWithEmp_idOnly = await prisma.employee.findMany({ select: { emp_id: true } })
     * 
     */
    findMany<T extends EmployeeFindManyArgs>(args?: SelectSubset<T, EmployeeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Employee.
     * @param {EmployeeCreateArgs} args - Arguments to create a Employee.
     * @example
     * // Create one Employee
     * const Employee = await prisma.employee.create({
     *   data: {
     *     // ... data to create a Employee
     *   }
     * })
     * 
     */
    create<T extends EmployeeCreateArgs>(args: SelectSubset<T, EmployeeCreateArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Employees.
     * @param {EmployeeCreateManyArgs} args - Arguments to create many Employees.
     * @example
     * // Create many Employees
     * const employee = await prisma.employee.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EmployeeCreateManyArgs>(args?: SelectSubset<T, EmployeeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Employees and returns the data saved in the database.
     * @param {EmployeeCreateManyAndReturnArgs} args - Arguments to create many Employees.
     * @example
     * // Create many Employees
     * const employee = await prisma.employee.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Employees and only return the `emp_id`
     * const employeeWithEmp_idOnly = await prisma.employee.createManyAndReturn({
     *   select: { emp_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EmployeeCreateManyAndReturnArgs>(args?: SelectSubset<T, EmployeeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Employee.
     * @param {EmployeeDeleteArgs} args - Arguments to delete one Employee.
     * @example
     * // Delete one Employee
     * const Employee = await prisma.employee.delete({
     *   where: {
     *     // ... filter to delete one Employee
     *   }
     * })
     * 
     */
    delete<T extends EmployeeDeleteArgs>(args: SelectSubset<T, EmployeeDeleteArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Employee.
     * @param {EmployeeUpdateArgs} args - Arguments to update one Employee.
     * @example
     * // Update one Employee
     * const employee = await prisma.employee.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EmployeeUpdateArgs>(args: SelectSubset<T, EmployeeUpdateArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Employees.
     * @param {EmployeeDeleteManyArgs} args - Arguments to filter Employees to delete.
     * @example
     * // Delete a few Employees
     * const { count } = await prisma.employee.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EmployeeDeleteManyArgs>(args?: SelectSubset<T, EmployeeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Employees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Employees
     * const employee = await prisma.employee.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EmployeeUpdateManyArgs>(args: SelectSubset<T, EmployeeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Employees and returns the data updated in the database.
     * @param {EmployeeUpdateManyAndReturnArgs} args - Arguments to update many Employees.
     * @example
     * // Update many Employees
     * const employee = await prisma.employee.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Employees and only return the `emp_id`
     * const employeeWithEmp_idOnly = await prisma.employee.updateManyAndReturn({
     *   select: { emp_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EmployeeUpdateManyAndReturnArgs>(args: SelectSubset<T, EmployeeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Employee.
     * @param {EmployeeUpsertArgs} args - Arguments to update or create a Employee.
     * @example
     * // Update or create a Employee
     * const employee = await prisma.employee.upsert({
     *   create: {
     *     // ... data to create a Employee
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Employee we want to update
     *   }
     * })
     */
    upsert<T extends EmployeeUpsertArgs>(args: SelectSubset<T, EmployeeUpsertArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Employees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeCountArgs} args - Arguments to filter Employees to count.
     * @example
     * // Count the number of Employees
     * const count = await prisma.employee.count({
     *   where: {
     *     // ... the filter for the Employees we want to count
     *   }
     * })
    **/
    count<T extends EmployeeCountArgs>(
      args?: Subset<T, EmployeeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EmployeeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Employee.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EmployeeAggregateArgs>(args: Subset<T, EmployeeAggregateArgs>): Prisma.PrismaPromise<GetEmployeeAggregateType<T>>

    /**
     * Group by Employee.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EmployeeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EmployeeGroupByArgs['orderBy'] }
        : { orderBy?: EmployeeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EmployeeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmployeeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Employee model
   */
  readonly fields: EmployeeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Employee.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EmployeeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    organization<T extends OrganizationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrganizationDefaultArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    department<T extends Employee$departmentArgs<ExtArgs> = {}>(args?: Subset<T, Employee$departmentArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    headed_department<T extends Employee$headed_departmentArgs<ExtArgs> = {}>(args?: Subset<T, Employee$headed_departmentArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    attendances<T extends Employee$attendancesArgs<ExtArgs> = {}>(args?: Subset<T, Employee$attendancesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    leave_requests<T extends Employee$leave_requestsArgs<ExtArgs> = {}>(args?: Subset<T, Employee$leave_requestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeaveRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    approved_leaves<T extends Employee$approved_leavesArgs<ExtArgs> = {}>(args?: Subset<T, Employee$approved_leavesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeaveRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    petty_cash_requests<T extends Employee$petty_cash_requestsArgs<ExtArgs> = {}>(args?: Subset<T, Employee$petty_cash_requestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PettyCashRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    approved_petty_cash<T extends Employee$approved_petty_cashArgs<ExtArgs> = {}>(args?: Subset<T, Employee$approved_petty_cashArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PettyCashRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Employee model
   */
  interface EmployeeFieldRefs {
    readonly emp_id: FieldRef<"Employee", 'String'>
    readonly org_id: FieldRef<"Employee", 'String'>
    readonly dep_id: FieldRef<"Employee", 'String'>
    readonly employee_number: FieldRef<"Employee", 'String'>
    readonly first_name: FieldRef<"Employee", 'String'>
    readonly last_name: FieldRef<"Employee", 'String'>
    readonly email: FieldRef<"Employee", 'String'>
    readonly password: FieldRef<"Employee", 'String'>
    readonly phone: FieldRef<"Employee", 'String'>
    readonly profile_photo_url: FieldRef<"Employee", 'String'>
    readonly designation: FieldRef<"Employee", 'String'>
    readonly employment_type: FieldRef<"Employee", 'String'>
    readonly join_date: FieldRef<"Employee", 'DateTime'>
    readonly resign_date: FieldRef<"Employee", 'DateTime'>
    readonly status: FieldRef<"Employee", 'String'>
    readonly created_at: FieldRef<"Employee", 'DateTime'>
    readonly update_at: FieldRef<"Employee", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Employee findUnique
   */
  export type EmployeeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter, which Employee to fetch.
     */
    where: EmployeeWhereUniqueInput
  }

  /**
   * Employee findUniqueOrThrow
   */
  export type EmployeeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter, which Employee to fetch.
     */
    where: EmployeeWhereUniqueInput
  }

  /**
   * Employee findFirst
   */
  export type EmployeeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter, which Employee to fetch.
     */
    where?: EmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employees to fetch.
     */
    orderBy?: EmployeeOrderByWithRelationInput | EmployeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Employees.
     */
    cursor?: EmployeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Employees.
     */
    distinct?: EmployeeScalarFieldEnum | EmployeeScalarFieldEnum[]
  }

  /**
   * Employee findFirstOrThrow
   */
  export type EmployeeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter, which Employee to fetch.
     */
    where?: EmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employees to fetch.
     */
    orderBy?: EmployeeOrderByWithRelationInput | EmployeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Employees.
     */
    cursor?: EmployeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Employees.
     */
    distinct?: EmployeeScalarFieldEnum | EmployeeScalarFieldEnum[]
  }

  /**
   * Employee findMany
   */
  export type EmployeeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter, which Employees to fetch.
     */
    where?: EmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employees to fetch.
     */
    orderBy?: EmployeeOrderByWithRelationInput | EmployeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Employees.
     */
    cursor?: EmployeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employees.
     */
    skip?: number
    distinct?: EmployeeScalarFieldEnum | EmployeeScalarFieldEnum[]
  }

  /**
   * Employee create
   */
  export type EmployeeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * The data needed to create a Employee.
     */
    data: XOR<EmployeeCreateInput, EmployeeUncheckedCreateInput>
  }

  /**
   * Employee createMany
   */
  export type EmployeeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Employees.
     */
    data: EmployeeCreateManyInput | EmployeeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Employee createManyAndReturn
   */
  export type EmployeeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * The data used to create many Employees.
     */
    data: EmployeeCreateManyInput | EmployeeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Employee update
   */
  export type EmployeeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * The data needed to update a Employee.
     */
    data: XOR<EmployeeUpdateInput, EmployeeUncheckedUpdateInput>
    /**
     * Choose, which Employee to update.
     */
    where: EmployeeWhereUniqueInput
  }

  /**
   * Employee updateMany
   */
  export type EmployeeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Employees.
     */
    data: XOR<EmployeeUpdateManyMutationInput, EmployeeUncheckedUpdateManyInput>
    /**
     * Filter which Employees to update
     */
    where?: EmployeeWhereInput
    /**
     * Limit how many Employees to update.
     */
    limit?: number
  }

  /**
   * Employee updateManyAndReturn
   */
  export type EmployeeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * The data used to update Employees.
     */
    data: XOR<EmployeeUpdateManyMutationInput, EmployeeUncheckedUpdateManyInput>
    /**
     * Filter which Employees to update
     */
    where?: EmployeeWhereInput
    /**
     * Limit how many Employees to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Employee upsert
   */
  export type EmployeeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * The filter to search for the Employee to update in case it exists.
     */
    where: EmployeeWhereUniqueInput
    /**
     * In case the Employee found by the `where` argument doesn't exist, create a new Employee with this data.
     */
    create: XOR<EmployeeCreateInput, EmployeeUncheckedCreateInput>
    /**
     * In case the Employee was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EmployeeUpdateInput, EmployeeUncheckedUpdateInput>
  }

  /**
   * Employee delete
   */
  export type EmployeeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter which Employee to delete.
     */
    where: EmployeeWhereUniqueInput
  }

  /**
   * Employee deleteMany
   */
  export type EmployeeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Employees to delete
     */
    where?: EmployeeWhereInput
    /**
     * Limit how many Employees to delete.
     */
    limit?: number
  }

  /**
   * Employee.department
   */
  export type Employee$departmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    where?: DepartmentWhereInput
  }

  /**
   * Employee.headed_department
   */
  export type Employee$headed_departmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    where?: DepartmentWhereInput
  }

  /**
   * Employee.attendances
   */
  export type Employee$attendancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    where?: AttendanceWhereInput
    orderBy?: AttendanceOrderByWithRelationInput | AttendanceOrderByWithRelationInput[]
    cursor?: AttendanceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AttendanceScalarFieldEnum | AttendanceScalarFieldEnum[]
  }

  /**
   * Employee.leave_requests
   */
  export type Employee$leave_requestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaveRequest
     */
    select?: LeaveRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeaveRequest
     */
    omit?: LeaveRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaveRequestInclude<ExtArgs> | null
    where?: LeaveRequestWhereInput
    orderBy?: LeaveRequestOrderByWithRelationInput | LeaveRequestOrderByWithRelationInput[]
    cursor?: LeaveRequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LeaveRequestScalarFieldEnum | LeaveRequestScalarFieldEnum[]
  }

  /**
   * Employee.approved_leaves
   */
  export type Employee$approved_leavesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaveRequest
     */
    select?: LeaveRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeaveRequest
     */
    omit?: LeaveRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaveRequestInclude<ExtArgs> | null
    where?: LeaveRequestWhereInput
    orderBy?: LeaveRequestOrderByWithRelationInput | LeaveRequestOrderByWithRelationInput[]
    cursor?: LeaveRequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LeaveRequestScalarFieldEnum | LeaveRequestScalarFieldEnum[]
  }

  /**
   * Employee.petty_cash_requests
   */
  export type Employee$petty_cash_requestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PettyCashRequest
     */
    select?: PettyCashRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PettyCashRequest
     */
    omit?: PettyCashRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PettyCashRequestInclude<ExtArgs> | null
    where?: PettyCashRequestWhereInput
    orderBy?: PettyCashRequestOrderByWithRelationInput | PettyCashRequestOrderByWithRelationInput[]
    cursor?: PettyCashRequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PettyCashRequestScalarFieldEnum | PettyCashRequestScalarFieldEnum[]
  }

  /**
   * Employee.approved_petty_cash
   */
  export type Employee$approved_petty_cashArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PettyCashRequest
     */
    select?: PettyCashRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PettyCashRequest
     */
    omit?: PettyCashRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PettyCashRequestInclude<ExtArgs> | null
    where?: PettyCashRequestWhereInput
    orderBy?: PettyCashRequestOrderByWithRelationInput | PettyCashRequestOrderByWithRelationInput[]
    cursor?: PettyCashRequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PettyCashRequestScalarFieldEnum | PettyCashRequestScalarFieldEnum[]
  }

  /**
   * Employee without action
   */
  export type EmployeeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
  }


  /**
   * Model Organization
   */

  export type AggregateOrganization = {
    _count: OrganizationCountAggregateOutputType | null
    _min: OrganizationMinAggregateOutputType | null
    _max: OrganizationMaxAggregateOutputType | null
  }

  export type OrganizationMinAggregateOutputType = {
    org_id: string | null
    sub_id: string | null
    name: string | null
    industry: string | null
    registration_no: string | null
    address: string | null
    email: string | null
    password: string | null
    phone: string | null
    logo_url: string | null
    created_at: Date | null
    update_at: Date | null
  }

  export type OrganizationMaxAggregateOutputType = {
    org_id: string | null
    sub_id: string | null
    name: string | null
    industry: string | null
    registration_no: string | null
    address: string | null
    email: string | null
    password: string | null
    phone: string | null
    logo_url: string | null
    created_at: Date | null
    update_at: Date | null
  }

  export type OrganizationCountAggregateOutputType = {
    org_id: number
    sub_id: number
    name: number
    industry: number
    registration_no: number
    address: number
    email: number
    password: number
    phone: number
    logo_url: number
    created_at: number
    update_at: number
    _all: number
  }


  export type OrganizationMinAggregateInputType = {
    org_id?: true
    sub_id?: true
    name?: true
    industry?: true
    registration_no?: true
    address?: true
    email?: true
    password?: true
    phone?: true
    logo_url?: true
    created_at?: true
    update_at?: true
  }

  export type OrganizationMaxAggregateInputType = {
    org_id?: true
    sub_id?: true
    name?: true
    industry?: true
    registration_no?: true
    address?: true
    email?: true
    password?: true
    phone?: true
    logo_url?: true
    created_at?: true
    update_at?: true
  }

  export type OrganizationCountAggregateInputType = {
    org_id?: true
    sub_id?: true
    name?: true
    industry?: true
    registration_no?: true
    address?: true
    email?: true
    password?: true
    phone?: true
    logo_url?: true
    created_at?: true
    update_at?: true
    _all?: true
  }

  export type OrganizationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Organization to aggregate.
     */
    where?: OrganizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organizations to fetch.
     */
    orderBy?: OrganizationOrderByWithRelationInput | OrganizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrganizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organizations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Organizations
    **/
    _count?: true | OrganizationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrganizationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrganizationMaxAggregateInputType
  }

  export type GetOrganizationAggregateType<T extends OrganizationAggregateArgs> = {
        [P in keyof T & keyof AggregateOrganization]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrganization[P]>
      : GetScalarType<T[P], AggregateOrganization[P]>
  }




  export type OrganizationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrganizationWhereInput
    orderBy?: OrganizationOrderByWithAggregationInput | OrganizationOrderByWithAggregationInput[]
    by: OrganizationScalarFieldEnum[] | OrganizationScalarFieldEnum
    having?: OrganizationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrganizationCountAggregateInputType | true
    _min?: OrganizationMinAggregateInputType
    _max?: OrganizationMaxAggregateInputType
  }

  export type OrganizationGroupByOutputType = {
    org_id: string
    sub_id: string | null
    name: string
    industry: string | null
    registration_no: string | null
    address: string | null
    email: string
    password: string
    phone: string | null
    logo_url: string | null
    created_at: Date
    update_at: Date
    _count: OrganizationCountAggregateOutputType | null
    _min: OrganizationMinAggregateOutputType | null
    _max: OrganizationMaxAggregateOutputType | null
  }

  type GetOrganizationGroupByPayload<T extends OrganizationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrganizationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrganizationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrganizationGroupByOutputType[P]>
            : GetScalarType<T[P], OrganizationGroupByOutputType[P]>
        }
      >
    >


  export type OrganizationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    org_id?: boolean
    sub_id?: boolean
    name?: boolean
    industry?: boolean
    registration_no?: boolean
    address?: boolean
    email?: boolean
    password?: boolean
    phone?: boolean
    logo_url?: boolean
    created_at?: boolean
    update_at?: boolean
    subscription?: boolean | Organization$subscriptionArgs<ExtArgs>
    invoices?: boolean | Organization$invoicesArgs<ExtArgs>
    departments?: boolean | Organization$departmentsArgs<ExtArgs>
    employees?: boolean | Organization$employeesArgs<ExtArgs>
    attendances?: boolean | Organization$attendancesArgs<ExtArgs>
    leave_requests?: boolean | Organization$leave_requestsArgs<ExtArgs>
    petty_cash_requests?: boolean | Organization$petty_cash_requestsArgs<ExtArgs>
    _count?: boolean | OrganizationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["organization"]>

  export type OrganizationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    org_id?: boolean
    sub_id?: boolean
    name?: boolean
    industry?: boolean
    registration_no?: boolean
    address?: boolean
    email?: boolean
    password?: boolean
    phone?: boolean
    logo_url?: boolean
    created_at?: boolean
    update_at?: boolean
  }, ExtArgs["result"]["organization"]>

  export type OrganizationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    org_id?: boolean
    sub_id?: boolean
    name?: boolean
    industry?: boolean
    registration_no?: boolean
    address?: boolean
    email?: boolean
    password?: boolean
    phone?: boolean
    logo_url?: boolean
    created_at?: boolean
    update_at?: boolean
  }, ExtArgs["result"]["organization"]>

  export type OrganizationSelectScalar = {
    org_id?: boolean
    sub_id?: boolean
    name?: boolean
    industry?: boolean
    registration_no?: boolean
    address?: boolean
    email?: boolean
    password?: boolean
    phone?: boolean
    logo_url?: boolean
    created_at?: boolean
    update_at?: boolean
  }

  export type OrganizationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"org_id" | "sub_id" | "name" | "industry" | "registration_no" | "address" | "email" | "password" | "phone" | "logo_url" | "created_at" | "update_at", ExtArgs["result"]["organization"]>
  export type OrganizationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subscription?: boolean | Organization$subscriptionArgs<ExtArgs>
    invoices?: boolean | Organization$invoicesArgs<ExtArgs>
    departments?: boolean | Organization$departmentsArgs<ExtArgs>
    employees?: boolean | Organization$employeesArgs<ExtArgs>
    attendances?: boolean | Organization$attendancesArgs<ExtArgs>
    leave_requests?: boolean | Organization$leave_requestsArgs<ExtArgs>
    petty_cash_requests?: boolean | Organization$petty_cash_requestsArgs<ExtArgs>
    _count?: boolean | OrganizationCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type OrganizationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type OrganizationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $OrganizationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Organization"
    objects: {
      subscription: Prisma.$SubscriptionPayload<ExtArgs> | null
      invoices: Prisma.$InvoicePayload<ExtArgs>[]
      departments: Prisma.$DepartmentPayload<ExtArgs>[]
      employees: Prisma.$EmployeePayload<ExtArgs>[]
      attendances: Prisma.$AttendancePayload<ExtArgs>[]
      leave_requests: Prisma.$LeaveRequestPayload<ExtArgs>[]
      petty_cash_requests: Prisma.$PettyCashRequestPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      org_id: string
      sub_id: string | null
      name: string
      industry: string | null
      registration_no: string | null
      address: string | null
      email: string
      password: string
      phone: string | null
      logo_url: string | null
      created_at: Date
      update_at: Date
    }, ExtArgs["result"]["organization"]>
    composites: {}
  }

  type OrganizationGetPayload<S extends boolean | null | undefined | OrganizationDefaultArgs> = $Result.GetResult<Prisma.$OrganizationPayload, S>

  type OrganizationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrganizationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrganizationCountAggregateInputType | true
    }

  export interface OrganizationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Organization'], meta: { name: 'Organization' } }
    /**
     * Find zero or one Organization that matches the filter.
     * @param {OrganizationFindUniqueArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrganizationFindUniqueArgs>(args: SelectSubset<T, OrganizationFindUniqueArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Organization that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrganizationFindUniqueOrThrowArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrganizationFindUniqueOrThrowArgs>(args: SelectSubset<T, OrganizationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Organization that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationFindFirstArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrganizationFindFirstArgs>(args?: SelectSubset<T, OrganizationFindFirstArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Organization that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationFindFirstOrThrowArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrganizationFindFirstOrThrowArgs>(args?: SelectSubset<T, OrganizationFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Organizations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Organizations
     * const organizations = await prisma.organization.findMany()
     * 
     * // Get first 10 Organizations
     * const organizations = await prisma.organization.findMany({ take: 10 })
     * 
     * // Only select the `org_id`
     * const organizationWithOrg_idOnly = await prisma.organization.findMany({ select: { org_id: true } })
     * 
     */
    findMany<T extends OrganizationFindManyArgs>(args?: SelectSubset<T, OrganizationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Organization.
     * @param {OrganizationCreateArgs} args - Arguments to create a Organization.
     * @example
     * // Create one Organization
     * const Organization = await prisma.organization.create({
     *   data: {
     *     // ... data to create a Organization
     *   }
     * })
     * 
     */
    create<T extends OrganizationCreateArgs>(args: SelectSubset<T, OrganizationCreateArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Organizations.
     * @param {OrganizationCreateManyArgs} args - Arguments to create many Organizations.
     * @example
     * // Create many Organizations
     * const organization = await prisma.organization.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrganizationCreateManyArgs>(args?: SelectSubset<T, OrganizationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Organizations and returns the data saved in the database.
     * @param {OrganizationCreateManyAndReturnArgs} args - Arguments to create many Organizations.
     * @example
     * // Create many Organizations
     * const organization = await prisma.organization.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Organizations and only return the `org_id`
     * const organizationWithOrg_idOnly = await prisma.organization.createManyAndReturn({
     *   select: { org_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrganizationCreateManyAndReturnArgs>(args?: SelectSubset<T, OrganizationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Organization.
     * @param {OrganizationDeleteArgs} args - Arguments to delete one Organization.
     * @example
     * // Delete one Organization
     * const Organization = await prisma.organization.delete({
     *   where: {
     *     // ... filter to delete one Organization
     *   }
     * })
     * 
     */
    delete<T extends OrganizationDeleteArgs>(args: SelectSubset<T, OrganizationDeleteArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Organization.
     * @param {OrganizationUpdateArgs} args - Arguments to update one Organization.
     * @example
     * // Update one Organization
     * const organization = await prisma.organization.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrganizationUpdateArgs>(args: SelectSubset<T, OrganizationUpdateArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Organizations.
     * @param {OrganizationDeleteManyArgs} args - Arguments to filter Organizations to delete.
     * @example
     * // Delete a few Organizations
     * const { count } = await prisma.organization.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrganizationDeleteManyArgs>(args?: SelectSubset<T, OrganizationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Organizations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Organizations
     * const organization = await prisma.organization.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrganizationUpdateManyArgs>(args: SelectSubset<T, OrganizationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Organizations and returns the data updated in the database.
     * @param {OrganizationUpdateManyAndReturnArgs} args - Arguments to update many Organizations.
     * @example
     * // Update many Organizations
     * const organization = await prisma.organization.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Organizations and only return the `org_id`
     * const organizationWithOrg_idOnly = await prisma.organization.updateManyAndReturn({
     *   select: { org_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends OrganizationUpdateManyAndReturnArgs>(args: SelectSubset<T, OrganizationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Organization.
     * @param {OrganizationUpsertArgs} args - Arguments to update or create a Organization.
     * @example
     * // Update or create a Organization
     * const organization = await prisma.organization.upsert({
     *   create: {
     *     // ... data to create a Organization
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Organization we want to update
     *   }
     * })
     */
    upsert<T extends OrganizationUpsertArgs>(args: SelectSubset<T, OrganizationUpsertArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Organizations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationCountArgs} args - Arguments to filter Organizations to count.
     * @example
     * // Count the number of Organizations
     * const count = await prisma.organization.count({
     *   where: {
     *     // ... the filter for the Organizations we want to count
     *   }
     * })
    **/
    count<T extends OrganizationCountArgs>(
      args?: Subset<T, OrganizationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrganizationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Organization.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrganizationAggregateArgs>(args: Subset<T, OrganizationAggregateArgs>): Prisma.PrismaPromise<GetOrganizationAggregateType<T>>

    /**
     * Group by Organization.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OrganizationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrganizationGroupByArgs['orderBy'] }
        : { orderBy?: OrganizationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OrganizationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrganizationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Organization model
   */
  readonly fields: OrganizationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Organization.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrganizationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    subscription<T extends Organization$subscriptionArgs<ExtArgs> = {}>(args?: Subset<T, Organization$subscriptionArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    invoices<T extends Organization$invoicesArgs<ExtArgs> = {}>(args?: Subset<T, Organization$invoicesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    departments<T extends Organization$departmentsArgs<ExtArgs> = {}>(args?: Subset<T, Organization$departmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    employees<T extends Organization$employeesArgs<ExtArgs> = {}>(args?: Subset<T, Organization$employeesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    attendances<T extends Organization$attendancesArgs<ExtArgs> = {}>(args?: Subset<T, Organization$attendancesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    leave_requests<T extends Organization$leave_requestsArgs<ExtArgs> = {}>(args?: Subset<T, Organization$leave_requestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeaveRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    petty_cash_requests<T extends Organization$petty_cash_requestsArgs<ExtArgs> = {}>(args?: Subset<T, Organization$petty_cash_requestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PettyCashRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Organization model
   */
  interface OrganizationFieldRefs {
    readonly org_id: FieldRef<"Organization", 'String'>
    readonly sub_id: FieldRef<"Organization", 'String'>
    readonly name: FieldRef<"Organization", 'String'>
    readonly industry: FieldRef<"Organization", 'String'>
    readonly registration_no: FieldRef<"Organization", 'String'>
    readonly address: FieldRef<"Organization", 'String'>
    readonly email: FieldRef<"Organization", 'String'>
    readonly password: FieldRef<"Organization", 'String'>
    readonly phone: FieldRef<"Organization", 'String'>
    readonly logo_url: FieldRef<"Organization", 'String'>
    readonly created_at: FieldRef<"Organization", 'DateTime'>
    readonly update_at: FieldRef<"Organization", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Organization findUnique
   */
  export type OrganizationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter, which Organization to fetch.
     */
    where: OrganizationWhereUniqueInput
  }

  /**
   * Organization findUniqueOrThrow
   */
  export type OrganizationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter, which Organization to fetch.
     */
    where: OrganizationWhereUniqueInput
  }

  /**
   * Organization findFirst
   */
  export type OrganizationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter, which Organization to fetch.
     */
    where?: OrganizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organizations to fetch.
     */
    orderBy?: OrganizationOrderByWithRelationInput | OrganizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Organizations.
     */
    cursor?: OrganizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organizations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Organizations.
     */
    distinct?: OrganizationScalarFieldEnum | OrganizationScalarFieldEnum[]
  }

  /**
   * Organization findFirstOrThrow
   */
  export type OrganizationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter, which Organization to fetch.
     */
    where?: OrganizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organizations to fetch.
     */
    orderBy?: OrganizationOrderByWithRelationInput | OrganizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Organizations.
     */
    cursor?: OrganizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organizations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Organizations.
     */
    distinct?: OrganizationScalarFieldEnum | OrganizationScalarFieldEnum[]
  }

  /**
   * Organization findMany
   */
  export type OrganizationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter, which Organizations to fetch.
     */
    where?: OrganizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organizations to fetch.
     */
    orderBy?: OrganizationOrderByWithRelationInput | OrganizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Organizations.
     */
    cursor?: OrganizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organizations.
     */
    skip?: number
    distinct?: OrganizationScalarFieldEnum | OrganizationScalarFieldEnum[]
  }

  /**
   * Organization create
   */
  export type OrganizationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * The data needed to create a Organization.
     */
    data: XOR<OrganizationCreateInput, OrganizationUncheckedCreateInput>
  }

  /**
   * Organization createMany
   */
  export type OrganizationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Organizations.
     */
    data: OrganizationCreateManyInput | OrganizationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Organization createManyAndReturn
   */
  export type OrganizationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * The data used to create many Organizations.
     */
    data: OrganizationCreateManyInput | OrganizationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Organization update
   */
  export type OrganizationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * The data needed to update a Organization.
     */
    data: XOR<OrganizationUpdateInput, OrganizationUncheckedUpdateInput>
    /**
     * Choose, which Organization to update.
     */
    where: OrganizationWhereUniqueInput
  }

  /**
   * Organization updateMany
   */
  export type OrganizationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Organizations.
     */
    data: XOR<OrganizationUpdateManyMutationInput, OrganizationUncheckedUpdateManyInput>
    /**
     * Filter which Organizations to update
     */
    where?: OrganizationWhereInput
    /**
     * Limit how many Organizations to update.
     */
    limit?: number
  }

  /**
   * Organization updateManyAndReturn
   */
  export type OrganizationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * The data used to update Organizations.
     */
    data: XOR<OrganizationUpdateManyMutationInput, OrganizationUncheckedUpdateManyInput>
    /**
     * Filter which Organizations to update
     */
    where?: OrganizationWhereInput
    /**
     * Limit how many Organizations to update.
     */
    limit?: number
  }

  /**
   * Organization upsert
   */
  export type OrganizationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * The filter to search for the Organization to update in case it exists.
     */
    where: OrganizationWhereUniqueInput
    /**
     * In case the Organization found by the `where` argument doesn't exist, create a new Organization with this data.
     */
    create: XOR<OrganizationCreateInput, OrganizationUncheckedCreateInput>
    /**
     * In case the Organization was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrganizationUpdateInput, OrganizationUncheckedUpdateInput>
  }

  /**
   * Organization delete
   */
  export type OrganizationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter which Organization to delete.
     */
    where: OrganizationWhereUniqueInput
  }

  /**
   * Organization deleteMany
   */
  export type OrganizationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Organizations to delete
     */
    where?: OrganizationWhereInput
    /**
     * Limit how many Organizations to delete.
     */
    limit?: number
  }

  /**
   * Organization.subscription
   */
  export type Organization$subscriptionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    where?: SubscriptionWhereInput
  }

  /**
   * Organization.invoices
   */
  export type Organization$invoicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    where?: InvoiceWhereInput
    orderBy?: InvoiceOrderByWithRelationInput | InvoiceOrderByWithRelationInput[]
    cursor?: InvoiceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InvoiceScalarFieldEnum | InvoiceScalarFieldEnum[]
  }

  /**
   * Organization.departments
   */
  export type Organization$departmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    where?: DepartmentWhereInput
    orderBy?: DepartmentOrderByWithRelationInput | DepartmentOrderByWithRelationInput[]
    cursor?: DepartmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DepartmentScalarFieldEnum | DepartmentScalarFieldEnum[]
  }

  /**
   * Organization.employees
   */
  export type Organization$employeesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    where?: EmployeeWhereInput
    orderBy?: EmployeeOrderByWithRelationInput | EmployeeOrderByWithRelationInput[]
    cursor?: EmployeeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EmployeeScalarFieldEnum | EmployeeScalarFieldEnum[]
  }

  /**
   * Organization.attendances
   */
  export type Organization$attendancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    where?: AttendanceWhereInput
    orderBy?: AttendanceOrderByWithRelationInput | AttendanceOrderByWithRelationInput[]
    cursor?: AttendanceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AttendanceScalarFieldEnum | AttendanceScalarFieldEnum[]
  }

  /**
   * Organization.leave_requests
   */
  export type Organization$leave_requestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaveRequest
     */
    select?: LeaveRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeaveRequest
     */
    omit?: LeaveRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaveRequestInclude<ExtArgs> | null
    where?: LeaveRequestWhereInput
    orderBy?: LeaveRequestOrderByWithRelationInput | LeaveRequestOrderByWithRelationInput[]
    cursor?: LeaveRequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LeaveRequestScalarFieldEnum | LeaveRequestScalarFieldEnum[]
  }

  /**
   * Organization.petty_cash_requests
   */
  export type Organization$petty_cash_requestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PettyCashRequest
     */
    select?: PettyCashRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PettyCashRequest
     */
    omit?: PettyCashRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PettyCashRequestInclude<ExtArgs> | null
    where?: PettyCashRequestWhereInput
    orderBy?: PettyCashRequestOrderByWithRelationInput | PettyCashRequestOrderByWithRelationInput[]
    cursor?: PettyCashRequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PettyCashRequestScalarFieldEnum | PettyCashRequestScalarFieldEnum[]
  }

  /**
   * Organization without action
   */
  export type OrganizationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
  }


  /**
   * Model Plan
   */

  export type AggregatePlan = {
    _count: PlanCountAggregateOutputType | null
    _avg: PlanAvgAggregateOutputType | null
    _sum: PlanSumAggregateOutputType | null
    _min: PlanMinAggregateOutputType | null
    _max: PlanMaxAggregateOutputType | null
  }

  export type PlanAvgAggregateOutputType = {
    price_monthly: number | null
    price_annual: number | null
    max_employees: number | null
  }

  export type PlanSumAggregateOutputType = {
    price_monthly: number | null
    price_annual: number | null
    max_employees: number | null
  }

  export type PlanMinAggregateOutputType = {
    plan_id: string | null
    name: string | null
    description: string | null
    price_monthly: number | null
    price_annual: number | null
    currency: string | null
    max_employees: number | null
    is_active: boolean | null
    created_at: Date | null
    update_at: Date | null
  }

  export type PlanMaxAggregateOutputType = {
    plan_id: string | null
    name: string | null
    description: string | null
    price_monthly: number | null
    price_annual: number | null
    currency: string | null
    max_employees: number | null
    is_active: boolean | null
    created_at: Date | null
    update_at: Date | null
  }

  export type PlanCountAggregateOutputType = {
    plan_id: number
    name: number
    description: number
    price_monthly: number
    price_annual: number
    currency: number
    max_employees: number
    is_active: number
    created_at: number
    update_at: number
    _all: number
  }


  export type PlanAvgAggregateInputType = {
    price_monthly?: true
    price_annual?: true
    max_employees?: true
  }

  export type PlanSumAggregateInputType = {
    price_monthly?: true
    price_annual?: true
    max_employees?: true
  }

  export type PlanMinAggregateInputType = {
    plan_id?: true
    name?: true
    description?: true
    price_monthly?: true
    price_annual?: true
    currency?: true
    max_employees?: true
    is_active?: true
    created_at?: true
    update_at?: true
  }

  export type PlanMaxAggregateInputType = {
    plan_id?: true
    name?: true
    description?: true
    price_monthly?: true
    price_annual?: true
    currency?: true
    max_employees?: true
    is_active?: true
    created_at?: true
    update_at?: true
  }

  export type PlanCountAggregateInputType = {
    plan_id?: true
    name?: true
    description?: true
    price_monthly?: true
    price_annual?: true
    currency?: true
    max_employees?: true
    is_active?: true
    created_at?: true
    update_at?: true
    _all?: true
  }

  export type PlanAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Plan to aggregate.
     */
    where?: PlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Plans to fetch.
     */
    orderBy?: PlanOrderByWithRelationInput | PlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Plans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Plans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Plans
    **/
    _count?: true | PlanCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PlanAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PlanSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PlanMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PlanMaxAggregateInputType
  }

  export type GetPlanAggregateType<T extends PlanAggregateArgs> = {
        [P in keyof T & keyof AggregatePlan]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlan[P]>
      : GetScalarType<T[P], AggregatePlan[P]>
  }




  export type PlanGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlanWhereInput
    orderBy?: PlanOrderByWithAggregationInput | PlanOrderByWithAggregationInput[]
    by: PlanScalarFieldEnum[] | PlanScalarFieldEnum
    having?: PlanScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PlanCountAggregateInputType | true
    _avg?: PlanAvgAggregateInputType
    _sum?: PlanSumAggregateInputType
    _min?: PlanMinAggregateInputType
    _max?: PlanMaxAggregateInputType
  }

  export type PlanGroupByOutputType = {
    plan_id: string
    name: string
    description: string | null
    price_monthly: number | null
    price_annual: number | null
    currency: string
    max_employees: number | null
    is_active: boolean
    created_at: Date
    update_at: Date
    _count: PlanCountAggregateOutputType | null
    _avg: PlanAvgAggregateOutputType | null
    _sum: PlanSumAggregateOutputType | null
    _min: PlanMinAggregateOutputType | null
    _max: PlanMaxAggregateOutputType | null
  }

  type GetPlanGroupByPayload<T extends PlanGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PlanGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PlanGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PlanGroupByOutputType[P]>
            : GetScalarType<T[P], PlanGroupByOutputType[P]>
        }
      >
    >


  export type PlanSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    plan_id?: boolean
    name?: boolean
    description?: boolean
    price_monthly?: boolean
    price_annual?: boolean
    currency?: boolean
    max_employees?: boolean
    is_active?: boolean
    created_at?: boolean
    update_at?: boolean
    subscriptions?: boolean | Plan$subscriptionsArgs<ExtArgs>
    features?: boolean | Plan$featuresArgs<ExtArgs>
    _count?: boolean | PlanCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["plan"]>

  export type PlanSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    plan_id?: boolean
    name?: boolean
    description?: boolean
    price_monthly?: boolean
    price_annual?: boolean
    currency?: boolean
    max_employees?: boolean
    is_active?: boolean
    created_at?: boolean
    update_at?: boolean
  }, ExtArgs["result"]["plan"]>

  export type PlanSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    plan_id?: boolean
    name?: boolean
    description?: boolean
    price_monthly?: boolean
    price_annual?: boolean
    currency?: boolean
    max_employees?: boolean
    is_active?: boolean
    created_at?: boolean
    update_at?: boolean
  }, ExtArgs["result"]["plan"]>

  export type PlanSelectScalar = {
    plan_id?: boolean
    name?: boolean
    description?: boolean
    price_monthly?: boolean
    price_annual?: boolean
    currency?: boolean
    max_employees?: boolean
    is_active?: boolean
    created_at?: boolean
    update_at?: boolean
  }

  export type PlanOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"plan_id" | "name" | "description" | "price_monthly" | "price_annual" | "currency" | "max_employees" | "is_active" | "created_at" | "update_at", ExtArgs["result"]["plan"]>
  export type PlanInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subscriptions?: boolean | Plan$subscriptionsArgs<ExtArgs>
    features?: boolean | Plan$featuresArgs<ExtArgs>
    _count?: boolean | PlanCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PlanIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type PlanIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PlanPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Plan"
    objects: {
      subscriptions: Prisma.$SubscriptionPayload<ExtArgs>[]
      features: Prisma.$FeaturePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      plan_id: string
      name: string
      description: string | null
      price_monthly: number | null
      price_annual: number | null
      currency: string
      max_employees: number | null
      is_active: boolean
      created_at: Date
      update_at: Date
    }, ExtArgs["result"]["plan"]>
    composites: {}
  }

  type PlanGetPayload<S extends boolean | null | undefined | PlanDefaultArgs> = $Result.GetResult<Prisma.$PlanPayload, S>

  type PlanCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PlanFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PlanCountAggregateInputType | true
    }

  export interface PlanDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Plan'], meta: { name: 'Plan' } }
    /**
     * Find zero or one Plan that matches the filter.
     * @param {PlanFindUniqueArgs} args - Arguments to find a Plan
     * @example
     * // Get one Plan
     * const plan = await prisma.plan.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PlanFindUniqueArgs>(args: SelectSubset<T, PlanFindUniqueArgs<ExtArgs>>): Prisma__PlanClient<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Plan that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PlanFindUniqueOrThrowArgs} args - Arguments to find a Plan
     * @example
     * // Get one Plan
     * const plan = await prisma.plan.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PlanFindUniqueOrThrowArgs>(args: SelectSubset<T, PlanFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PlanClient<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Plan that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanFindFirstArgs} args - Arguments to find a Plan
     * @example
     * // Get one Plan
     * const plan = await prisma.plan.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PlanFindFirstArgs>(args?: SelectSubset<T, PlanFindFirstArgs<ExtArgs>>): Prisma__PlanClient<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Plan that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanFindFirstOrThrowArgs} args - Arguments to find a Plan
     * @example
     * // Get one Plan
     * const plan = await prisma.plan.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PlanFindFirstOrThrowArgs>(args?: SelectSubset<T, PlanFindFirstOrThrowArgs<ExtArgs>>): Prisma__PlanClient<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Plans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Plans
     * const plans = await prisma.plan.findMany()
     * 
     * // Get first 10 Plans
     * const plans = await prisma.plan.findMany({ take: 10 })
     * 
     * // Only select the `plan_id`
     * const planWithPlan_idOnly = await prisma.plan.findMany({ select: { plan_id: true } })
     * 
     */
    findMany<T extends PlanFindManyArgs>(args?: SelectSubset<T, PlanFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Plan.
     * @param {PlanCreateArgs} args - Arguments to create a Plan.
     * @example
     * // Create one Plan
     * const Plan = await prisma.plan.create({
     *   data: {
     *     // ... data to create a Plan
     *   }
     * })
     * 
     */
    create<T extends PlanCreateArgs>(args: SelectSubset<T, PlanCreateArgs<ExtArgs>>): Prisma__PlanClient<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Plans.
     * @param {PlanCreateManyArgs} args - Arguments to create many Plans.
     * @example
     * // Create many Plans
     * const plan = await prisma.plan.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PlanCreateManyArgs>(args?: SelectSubset<T, PlanCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Plans and returns the data saved in the database.
     * @param {PlanCreateManyAndReturnArgs} args - Arguments to create many Plans.
     * @example
     * // Create many Plans
     * const plan = await prisma.plan.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Plans and only return the `plan_id`
     * const planWithPlan_idOnly = await prisma.plan.createManyAndReturn({
     *   select: { plan_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PlanCreateManyAndReturnArgs>(args?: SelectSubset<T, PlanCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Plan.
     * @param {PlanDeleteArgs} args - Arguments to delete one Plan.
     * @example
     * // Delete one Plan
     * const Plan = await prisma.plan.delete({
     *   where: {
     *     // ... filter to delete one Plan
     *   }
     * })
     * 
     */
    delete<T extends PlanDeleteArgs>(args: SelectSubset<T, PlanDeleteArgs<ExtArgs>>): Prisma__PlanClient<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Plan.
     * @param {PlanUpdateArgs} args - Arguments to update one Plan.
     * @example
     * // Update one Plan
     * const plan = await prisma.plan.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PlanUpdateArgs>(args: SelectSubset<T, PlanUpdateArgs<ExtArgs>>): Prisma__PlanClient<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Plans.
     * @param {PlanDeleteManyArgs} args - Arguments to filter Plans to delete.
     * @example
     * // Delete a few Plans
     * const { count } = await prisma.plan.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PlanDeleteManyArgs>(args?: SelectSubset<T, PlanDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Plans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Plans
     * const plan = await prisma.plan.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PlanUpdateManyArgs>(args: SelectSubset<T, PlanUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Plans and returns the data updated in the database.
     * @param {PlanUpdateManyAndReturnArgs} args - Arguments to update many Plans.
     * @example
     * // Update many Plans
     * const plan = await prisma.plan.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Plans and only return the `plan_id`
     * const planWithPlan_idOnly = await prisma.plan.updateManyAndReturn({
     *   select: { plan_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PlanUpdateManyAndReturnArgs>(args: SelectSubset<T, PlanUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Plan.
     * @param {PlanUpsertArgs} args - Arguments to update or create a Plan.
     * @example
     * // Update or create a Plan
     * const plan = await prisma.plan.upsert({
     *   create: {
     *     // ... data to create a Plan
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Plan we want to update
     *   }
     * })
     */
    upsert<T extends PlanUpsertArgs>(args: SelectSubset<T, PlanUpsertArgs<ExtArgs>>): Prisma__PlanClient<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Plans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanCountArgs} args - Arguments to filter Plans to count.
     * @example
     * // Count the number of Plans
     * const count = await prisma.plan.count({
     *   where: {
     *     // ... the filter for the Plans we want to count
     *   }
     * })
    **/
    count<T extends PlanCountArgs>(
      args?: Subset<T, PlanCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PlanCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Plan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PlanAggregateArgs>(args: Subset<T, PlanAggregateArgs>): Prisma.PrismaPromise<GetPlanAggregateType<T>>

    /**
     * Group by Plan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PlanGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PlanGroupByArgs['orderBy'] }
        : { orderBy?: PlanGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PlanGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlanGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Plan model
   */
  readonly fields: PlanFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Plan.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PlanClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    subscriptions<T extends Plan$subscriptionsArgs<ExtArgs> = {}>(args?: Subset<T, Plan$subscriptionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    features<T extends Plan$featuresArgs<ExtArgs> = {}>(args?: Subset<T, Plan$featuresArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeaturePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Plan model
   */
  interface PlanFieldRefs {
    readonly plan_id: FieldRef<"Plan", 'String'>
    readonly name: FieldRef<"Plan", 'String'>
    readonly description: FieldRef<"Plan", 'String'>
    readonly price_monthly: FieldRef<"Plan", 'Float'>
    readonly price_annual: FieldRef<"Plan", 'Float'>
    readonly currency: FieldRef<"Plan", 'String'>
    readonly max_employees: FieldRef<"Plan", 'Int'>
    readonly is_active: FieldRef<"Plan", 'Boolean'>
    readonly created_at: FieldRef<"Plan", 'DateTime'>
    readonly update_at: FieldRef<"Plan", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Plan findUnique
   */
  export type PlanFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plan
     */
    omit?: PlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanInclude<ExtArgs> | null
    /**
     * Filter, which Plan to fetch.
     */
    where: PlanWhereUniqueInput
  }

  /**
   * Plan findUniqueOrThrow
   */
  export type PlanFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plan
     */
    omit?: PlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanInclude<ExtArgs> | null
    /**
     * Filter, which Plan to fetch.
     */
    where: PlanWhereUniqueInput
  }

  /**
   * Plan findFirst
   */
  export type PlanFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plan
     */
    omit?: PlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanInclude<ExtArgs> | null
    /**
     * Filter, which Plan to fetch.
     */
    where?: PlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Plans to fetch.
     */
    orderBy?: PlanOrderByWithRelationInput | PlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Plans.
     */
    cursor?: PlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Plans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Plans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Plans.
     */
    distinct?: PlanScalarFieldEnum | PlanScalarFieldEnum[]
  }

  /**
   * Plan findFirstOrThrow
   */
  export type PlanFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plan
     */
    omit?: PlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanInclude<ExtArgs> | null
    /**
     * Filter, which Plan to fetch.
     */
    where?: PlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Plans to fetch.
     */
    orderBy?: PlanOrderByWithRelationInput | PlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Plans.
     */
    cursor?: PlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Plans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Plans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Plans.
     */
    distinct?: PlanScalarFieldEnum | PlanScalarFieldEnum[]
  }

  /**
   * Plan findMany
   */
  export type PlanFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plan
     */
    omit?: PlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanInclude<ExtArgs> | null
    /**
     * Filter, which Plans to fetch.
     */
    where?: PlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Plans to fetch.
     */
    orderBy?: PlanOrderByWithRelationInput | PlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Plans.
     */
    cursor?: PlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Plans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Plans.
     */
    skip?: number
    distinct?: PlanScalarFieldEnum | PlanScalarFieldEnum[]
  }

  /**
   * Plan create
   */
  export type PlanCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plan
     */
    omit?: PlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanInclude<ExtArgs> | null
    /**
     * The data needed to create a Plan.
     */
    data: XOR<PlanCreateInput, PlanUncheckedCreateInput>
  }

  /**
   * Plan createMany
   */
  export type PlanCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Plans.
     */
    data: PlanCreateManyInput | PlanCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Plan createManyAndReturn
   */
  export type PlanCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Plan
     */
    omit?: PlanOmit<ExtArgs> | null
    /**
     * The data used to create many Plans.
     */
    data: PlanCreateManyInput | PlanCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Plan update
   */
  export type PlanUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plan
     */
    omit?: PlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanInclude<ExtArgs> | null
    /**
     * The data needed to update a Plan.
     */
    data: XOR<PlanUpdateInput, PlanUncheckedUpdateInput>
    /**
     * Choose, which Plan to update.
     */
    where: PlanWhereUniqueInput
  }

  /**
   * Plan updateMany
   */
  export type PlanUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Plans.
     */
    data: XOR<PlanUpdateManyMutationInput, PlanUncheckedUpdateManyInput>
    /**
     * Filter which Plans to update
     */
    where?: PlanWhereInput
    /**
     * Limit how many Plans to update.
     */
    limit?: number
  }

  /**
   * Plan updateManyAndReturn
   */
  export type PlanUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Plan
     */
    omit?: PlanOmit<ExtArgs> | null
    /**
     * The data used to update Plans.
     */
    data: XOR<PlanUpdateManyMutationInput, PlanUncheckedUpdateManyInput>
    /**
     * Filter which Plans to update
     */
    where?: PlanWhereInput
    /**
     * Limit how many Plans to update.
     */
    limit?: number
  }

  /**
   * Plan upsert
   */
  export type PlanUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plan
     */
    omit?: PlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanInclude<ExtArgs> | null
    /**
     * The filter to search for the Plan to update in case it exists.
     */
    where: PlanWhereUniqueInput
    /**
     * In case the Plan found by the `where` argument doesn't exist, create a new Plan with this data.
     */
    create: XOR<PlanCreateInput, PlanUncheckedCreateInput>
    /**
     * In case the Plan was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PlanUpdateInput, PlanUncheckedUpdateInput>
  }

  /**
   * Plan delete
   */
  export type PlanDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plan
     */
    omit?: PlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanInclude<ExtArgs> | null
    /**
     * Filter which Plan to delete.
     */
    where: PlanWhereUniqueInput
  }

  /**
   * Plan deleteMany
   */
  export type PlanDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Plans to delete
     */
    where?: PlanWhereInput
    /**
     * Limit how many Plans to delete.
     */
    limit?: number
  }

  /**
   * Plan.subscriptions
   */
  export type Plan$subscriptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    where?: SubscriptionWhereInput
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    cursor?: SubscriptionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubscriptionScalarFieldEnum | SubscriptionScalarFieldEnum[]
  }

  /**
   * Plan.features
   */
  export type Plan$featuresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feature
     */
    select?: FeatureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feature
     */
    omit?: FeatureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeatureInclude<ExtArgs> | null
    where?: FeatureWhereInput
    orderBy?: FeatureOrderByWithRelationInput | FeatureOrderByWithRelationInput[]
    cursor?: FeatureWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FeatureScalarFieldEnum | FeatureScalarFieldEnum[]
  }

  /**
   * Plan without action
   */
  export type PlanDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plan
     */
    omit?: PlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanInclude<ExtArgs> | null
  }


  /**
   * Model Feature
   */

  export type AggregateFeature = {
    _count: FeatureCountAggregateOutputType | null
    _min: FeatureMinAggregateOutputType | null
    _max: FeatureMaxAggregateOutputType | null
  }

  export type FeatureMinAggregateOutputType = {
    fet_id: string | null
    name: string | null
    created_at: Date | null
    update_at: Date | null
  }

  export type FeatureMaxAggregateOutputType = {
    fet_id: string | null
    name: string | null
    created_at: Date | null
    update_at: Date | null
  }

  export type FeatureCountAggregateOutputType = {
    fet_id: number
    name: number
    created_at: number
    update_at: number
    _all: number
  }


  export type FeatureMinAggregateInputType = {
    fet_id?: true
    name?: true
    created_at?: true
    update_at?: true
  }

  export type FeatureMaxAggregateInputType = {
    fet_id?: true
    name?: true
    created_at?: true
    update_at?: true
  }

  export type FeatureCountAggregateInputType = {
    fet_id?: true
    name?: true
    created_at?: true
    update_at?: true
    _all?: true
  }

  export type FeatureAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Feature to aggregate.
     */
    where?: FeatureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Features to fetch.
     */
    orderBy?: FeatureOrderByWithRelationInput | FeatureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FeatureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Features from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Features.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Features
    **/
    _count?: true | FeatureCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FeatureMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FeatureMaxAggregateInputType
  }

  export type GetFeatureAggregateType<T extends FeatureAggregateArgs> = {
        [P in keyof T & keyof AggregateFeature]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFeature[P]>
      : GetScalarType<T[P], AggregateFeature[P]>
  }




  export type FeatureGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FeatureWhereInput
    orderBy?: FeatureOrderByWithAggregationInput | FeatureOrderByWithAggregationInput[]
    by: FeatureScalarFieldEnum[] | FeatureScalarFieldEnum
    having?: FeatureScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FeatureCountAggregateInputType | true
    _min?: FeatureMinAggregateInputType
    _max?: FeatureMaxAggregateInputType
  }

  export type FeatureGroupByOutputType = {
    fet_id: string
    name: string
    created_at: Date
    update_at: Date
    _count: FeatureCountAggregateOutputType | null
    _min: FeatureMinAggregateOutputType | null
    _max: FeatureMaxAggregateOutputType | null
  }

  type GetFeatureGroupByPayload<T extends FeatureGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FeatureGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FeatureGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FeatureGroupByOutputType[P]>
            : GetScalarType<T[P], FeatureGroupByOutputType[P]>
        }
      >
    >


  export type FeatureSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    fet_id?: boolean
    name?: boolean
    created_at?: boolean
    update_at?: boolean
    plans?: boolean | Feature$plansArgs<ExtArgs>
    _count?: boolean | FeatureCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["feature"]>

  export type FeatureSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    fet_id?: boolean
    name?: boolean
    created_at?: boolean
    update_at?: boolean
  }, ExtArgs["result"]["feature"]>

  export type FeatureSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    fet_id?: boolean
    name?: boolean
    created_at?: boolean
    update_at?: boolean
  }, ExtArgs["result"]["feature"]>

  export type FeatureSelectScalar = {
    fet_id?: boolean
    name?: boolean
    created_at?: boolean
    update_at?: boolean
  }

  export type FeatureOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"fet_id" | "name" | "created_at" | "update_at", ExtArgs["result"]["feature"]>
  export type FeatureInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    plans?: boolean | Feature$plansArgs<ExtArgs>
    _count?: boolean | FeatureCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type FeatureIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type FeatureIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $FeaturePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Feature"
    objects: {
      plans: Prisma.$PlanPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      fet_id: string
      name: string
      created_at: Date
      update_at: Date
    }, ExtArgs["result"]["feature"]>
    composites: {}
  }

  type FeatureGetPayload<S extends boolean | null | undefined | FeatureDefaultArgs> = $Result.GetResult<Prisma.$FeaturePayload, S>

  type FeatureCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FeatureFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FeatureCountAggregateInputType | true
    }

  export interface FeatureDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Feature'], meta: { name: 'Feature' } }
    /**
     * Find zero or one Feature that matches the filter.
     * @param {FeatureFindUniqueArgs} args - Arguments to find a Feature
     * @example
     * // Get one Feature
     * const feature = await prisma.feature.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FeatureFindUniqueArgs>(args: SelectSubset<T, FeatureFindUniqueArgs<ExtArgs>>): Prisma__FeatureClient<$Result.GetResult<Prisma.$FeaturePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Feature that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FeatureFindUniqueOrThrowArgs} args - Arguments to find a Feature
     * @example
     * // Get one Feature
     * const feature = await prisma.feature.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FeatureFindUniqueOrThrowArgs>(args: SelectSubset<T, FeatureFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FeatureClient<$Result.GetResult<Prisma.$FeaturePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Feature that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeatureFindFirstArgs} args - Arguments to find a Feature
     * @example
     * // Get one Feature
     * const feature = await prisma.feature.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FeatureFindFirstArgs>(args?: SelectSubset<T, FeatureFindFirstArgs<ExtArgs>>): Prisma__FeatureClient<$Result.GetResult<Prisma.$FeaturePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Feature that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeatureFindFirstOrThrowArgs} args - Arguments to find a Feature
     * @example
     * // Get one Feature
     * const feature = await prisma.feature.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FeatureFindFirstOrThrowArgs>(args?: SelectSubset<T, FeatureFindFirstOrThrowArgs<ExtArgs>>): Prisma__FeatureClient<$Result.GetResult<Prisma.$FeaturePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Features that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeatureFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Features
     * const features = await prisma.feature.findMany()
     * 
     * // Get first 10 Features
     * const features = await prisma.feature.findMany({ take: 10 })
     * 
     * // Only select the `fet_id`
     * const featureWithFet_idOnly = await prisma.feature.findMany({ select: { fet_id: true } })
     * 
     */
    findMany<T extends FeatureFindManyArgs>(args?: SelectSubset<T, FeatureFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeaturePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Feature.
     * @param {FeatureCreateArgs} args - Arguments to create a Feature.
     * @example
     * // Create one Feature
     * const Feature = await prisma.feature.create({
     *   data: {
     *     // ... data to create a Feature
     *   }
     * })
     * 
     */
    create<T extends FeatureCreateArgs>(args: SelectSubset<T, FeatureCreateArgs<ExtArgs>>): Prisma__FeatureClient<$Result.GetResult<Prisma.$FeaturePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Features.
     * @param {FeatureCreateManyArgs} args - Arguments to create many Features.
     * @example
     * // Create many Features
     * const feature = await prisma.feature.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FeatureCreateManyArgs>(args?: SelectSubset<T, FeatureCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Features and returns the data saved in the database.
     * @param {FeatureCreateManyAndReturnArgs} args - Arguments to create many Features.
     * @example
     * // Create many Features
     * const feature = await prisma.feature.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Features and only return the `fet_id`
     * const featureWithFet_idOnly = await prisma.feature.createManyAndReturn({
     *   select: { fet_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FeatureCreateManyAndReturnArgs>(args?: SelectSubset<T, FeatureCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeaturePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Feature.
     * @param {FeatureDeleteArgs} args - Arguments to delete one Feature.
     * @example
     * // Delete one Feature
     * const Feature = await prisma.feature.delete({
     *   where: {
     *     // ... filter to delete one Feature
     *   }
     * })
     * 
     */
    delete<T extends FeatureDeleteArgs>(args: SelectSubset<T, FeatureDeleteArgs<ExtArgs>>): Prisma__FeatureClient<$Result.GetResult<Prisma.$FeaturePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Feature.
     * @param {FeatureUpdateArgs} args - Arguments to update one Feature.
     * @example
     * // Update one Feature
     * const feature = await prisma.feature.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FeatureUpdateArgs>(args: SelectSubset<T, FeatureUpdateArgs<ExtArgs>>): Prisma__FeatureClient<$Result.GetResult<Prisma.$FeaturePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Features.
     * @param {FeatureDeleteManyArgs} args - Arguments to filter Features to delete.
     * @example
     * // Delete a few Features
     * const { count } = await prisma.feature.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FeatureDeleteManyArgs>(args?: SelectSubset<T, FeatureDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Features.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeatureUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Features
     * const feature = await prisma.feature.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FeatureUpdateManyArgs>(args: SelectSubset<T, FeatureUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Features and returns the data updated in the database.
     * @param {FeatureUpdateManyAndReturnArgs} args - Arguments to update many Features.
     * @example
     * // Update many Features
     * const feature = await prisma.feature.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Features and only return the `fet_id`
     * const featureWithFet_idOnly = await prisma.feature.updateManyAndReturn({
     *   select: { fet_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FeatureUpdateManyAndReturnArgs>(args: SelectSubset<T, FeatureUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeaturePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Feature.
     * @param {FeatureUpsertArgs} args - Arguments to update or create a Feature.
     * @example
     * // Update or create a Feature
     * const feature = await prisma.feature.upsert({
     *   create: {
     *     // ... data to create a Feature
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Feature we want to update
     *   }
     * })
     */
    upsert<T extends FeatureUpsertArgs>(args: SelectSubset<T, FeatureUpsertArgs<ExtArgs>>): Prisma__FeatureClient<$Result.GetResult<Prisma.$FeaturePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Features.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeatureCountArgs} args - Arguments to filter Features to count.
     * @example
     * // Count the number of Features
     * const count = await prisma.feature.count({
     *   where: {
     *     // ... the filter for the Features we want to count
     *   }
     * })
    **/
    count<T extends FeatureCountArgs>(
      args?: Subset<T, FeatureCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FeatureCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Feature.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeatureAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FeatureAggregateArgs>(args: Subset<T, FeatureAggregateArgs>): Prisma.PrismaPromise<GetFeatureAggregateType<T>>

    /**
     * Group by Feature.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeatureGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FeatureGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FeatureGroupByArgs['orderBy'] }
        : { orderBy?: FeatureGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FeatureGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFeatureGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Feature model
   */
  readonly fields: FeatureFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Feature.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FeatureClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    plans<T extends Feature$plansArgs<ExtArgs> = {}>(args?: Subset<T, Feature$plansArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Feature model
   */
  interface FeatureFieldRefs {
    readonly fet_id: FieldRef<"Feature", 'String'>
    readonly name: FieldRef<"Feature", 'String'>
    readonly created_at: FieldRef<"Feature", 'DateTime'>
    readonly update_at: FieldRef<"Feature", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Feature findUnique
   */
  export type FeatureFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feature
     */
    select?: FeatureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feature
     */
    omit?: FeatureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeatureInclude<ExtArgs> | null
    /**
     * Filter, which Feature to fetch.
     */
    where: FeatureWhereUniqueInput
  }

  /**
   * Feature findUniqueOrThrow
   */
  export type FeatureFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feature
     */
    select?: FeatureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feature
     */
    omit?: FeatureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeatureInclude<ExtArgs> | null
    /**
     * Filter, which Feature to fetch.
     */
    where: FeatureWhereUniqueInput
  }

  /**
   * Feature findFirst
   */
  export type FeatureFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feature
     */
    select?: FeatureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feature
     */
    omit?: FeatureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeatureInclude<ExtArgs> | null
    /**
     * Filter, which Feature to fetch.
     */
    where?: FeatureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Features to fetch.
     */
    orderBy?: FeatureOrderByWithRelationInput | FeatureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Features.
     */
    cursor?: FeatureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Features from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Features.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Features.
     */
    distinct?: FeatureScalarFieldEnum | FeatureScalarFieldEnum[]
  }

  /**
   * Feature findFirstOrThrow
   */
  export type FeatureFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feature
     */
    select?: FeatureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feature
     */
    omit?: FeatureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeatureInclude<ExtArgs> | null
    /**
     * Filter, which Feature to fetch.
     */
    where?: FeatureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Features to fetch.
     */
    orderBy?: FeatureOrderByWithRelationInput | FeatureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Features.
     */
    cursor?: FeatureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Features from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Features.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Features.
     */
    distinct?: FeatureScalarFieldEnum | FeatureScalarFieldEnum[]
  }

  /**
   * Feature findMany
   */
  export type FeatureFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feature
     */
    select?: FeatureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feature
     */
    omit?: FeatureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeatureInclude<ExtArgs> | null
    /**
     * Filter, which Features to fetch.
     */
    where?: FeatureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Features to fetch.
     */
    orderBy?: FeatureOrderByWithRelationInput | FeatureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Features.
     */
    cursor?: FeatureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Features from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Features.
     */
    skip?: number
    distinct?: FeatureScalarFieldEnum | FeatureScalarFieldEnum[]
  }

  /**
   * Feature create
   */
  export type FeatureCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feature
     */
    select?: FeatureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feature
     */
    omit?: FeatureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeatureInclude<ExtArgs> | null
    /**
     * The data needed to create a Feature.
     */
    data: XOR<FeatureCreateInput, FeatureUncheckedCreateInput>
  }

  /**
   * Feature createMany
   */
  export type FeatureCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Features.
     */
    data: FeatureCreateManyInput | FeatureCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Feature createManyAndReturn
   */
  export type FeatureCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feature
     */
    select?: FeatureSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Feature
     */
    omit?: FeatureOmit<ExtArgs> | null
    /**
     * The data used to create many Features.
     */
    data: FeatureCreateManyInput | FeatureCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Feature update
   */
  export type FeatureUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feature
     */
    select?: FeatureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feature
     */
    omit?: FeatureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeatureInclude<ExtArgs> | null
    /**
     * The data needed to update a Feature.
     */
    data: XOR<FeatureUpdateInput, FeatureUncheckedUpdateInput>
    /**
     * Choose, which Feature to update.
     */
    where: FeatureWhereUniqueInput
  }

  /**
   * Feature updateMany
   */
  export type FeatureUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Features.
     */
    data: XOR<FeatureUpdateManyMutationInput, FeatureUncheckedUpdateManyInput>
    /**
     * Filter which Features to update
     */
    where?: FeatureWhereInput
    /**
     * Limit how many Features to update.
     */
    limit?: number
  }

  /**
   * Feature updateManyAndReturn
   */
  export type FeatureUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feature
     */
    select?: FeatureSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Feature
     */
    omit?: FeatureOmit<ExtArgs> | null
    /**
     * The data used to update Features.
     */
    data: XOR<FeatureUpdateManyMutationInput, FeatureUncheckedUpdateManyInput>
    /**
     * Filter which Features to update
     */
    where?: FeatureWhereInput
    /**
     * Limit how many Features to update.
     */
    limit?: number
  }

  /**
   * Feature upsert
   */
  export type FeatureUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feature
     */
    select?: FeatureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feature
     */
    omit?: FeatureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeatureInclude<ExtArgs> | null
    /**
     * The filter to search for the Feature to update in case it exists.
     */
    where: FeatureWhereUniqueInput
    /**
     * In case the Feature found by the `where` argument doesn't exist, create a new Feature with this data.
     */
    create: XOR<FeatureCreateInput, FeatureUncheckedCreateInput>
    /**
     * In case the Feature was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FeatureUpdateInput, FeatureUncheckedUpdateInput>
  }

  /**
   * Feature delete
   */
  export type FeatureDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feature
     */
    select?: FeatureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feature
     */
    omit?: FeatureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeatureInclude<ExtArgs> | null
    /**
     * Filter which Feature to delete.
     */
    where: FeatureWhereUniqueInput
  }

  /**
   * Feature deleteMany
   */
  export type FeatureDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Features to delete
     */
    where?: FeatureWhereInput
    /**
     * Limit how many Features to delete.
     */
    limit?: number
  }

  /**
   * Feature.plans
   */
  export type Feature$plansArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plan
     */
    omit?: PlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanInclude<ExtArgs> | null
    where?: PlanWhereInput
    orderBy?: PlanOrderByWithRelationInput | PlanOrderByWithRelationInput[]
    cursor?: PlanWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PlanScalarFieldEnum | PlanScalarFieldEnum[]
  }

  /**
   * Feature without action
   */
  export type FeatureDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feature
     */
    select?: FeatureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feature
     */
    omit?: FeatureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeatureInclude<ExtArgs> | null
  }


  /**
   * Model Invoice
   */

  export type AggregateInvoice = {
    _count: InvoiceCountAggregateOutputType | null
    _avg: InvoiceAvgAggregateOutputType | null
    _sum: InvoiceSumAggregateOutputType | null
    _min: InvoiceMinAggregateOutputType | null
    _max: InvoiceMaxAggregateOutputType | null
  }

  export type InvoiceAvgAggregateOutputType = {
    amount: number | null
  }

  export type InvoiceSumAggregateOutputType = {
    amount: number | null
  }

  export type InvoiceMinAggregateOutputType = {
    invoice_id: string | null
    org_id: string | null
    sub_id: string | null
    amount: number | null
    currency: string | null
    renewal_date: Date | null
    issue_date: Date | null
    due_date: Date | null
    paid_date: Date | null
    receipt: string | null
    status: string | null
    cancelled_at: Date | null
    payment_method: string | null
    created_at: Date | null
    update_at: Date | null
  }

  export type InvoiceMaxAggregateOutputType = {
    invoice_id: string | null
    org_id: string | null
    sub_id: string | null
    amount: number | null
    currency: string | null
    renewal_date: Date | null
    issue_date: Date | null
    due_date: Date | null
    paid_date: Date | null
    receipt: string | null
    status: string | null
    cancelled_at: Date | null
    payment_method: string | null
    created_at: Date | null
    update_at: Date | null
  }

  export type InvoiceCountAggregateOutputType = {
    invoice_id: number
    org_id: number
    sub_id: number
    amount: number
    currency: number
    renewal_date: number
    issue_date: number
    due_date: number
    paid_date: number
    receipt: number
    status: number
    cancelled_at: number
    payment_method: number
    created_at: number
    update_at: number
    _all: number
  }


  export type InvoiceAvgAggregateInputType = {
    amount?: true
  }

  export type InvoiceSumAggregateInputType = {
    amount?: true
  }

  export type InvoiceMinAggregateInputType = {
    invoice_id?: true
    org_id?: true
    sub_id?: true
    amount?: true
    currency?: true
    renewal_date?: true
    issue_date?: true
    due_date?: true
    paid_date?: true
    receipt?: true
    status?: true
    cancelled_at?: true
    payment_method?: true
    created_at?: true
    update_at?: true
  }

  export type InvoiceMaxAggregateInputType = {
    invoice_id?: true
    org_id?: true
    sub_id?: true
    amount?: true
    currency?: true
    renewal_date?: true
    issue_date?: true
    due_date?: true
    paid_date?: true
    receipt?: true
    status?: true
    cancelled_at?: true
    payment_method?: true
    created_at?: true
    update_at?: true
  }

  export type InvoiceCountAggregateInputType = {
    invoice_id?: true
    org_id?: true
    sub_id?: true
    amount?: true
    currency?: true
    renewal_date?: true
    issue_date?: true
    due_date?: true
    paid_date?: true
    receipt?: true
    status?: true
    cancelled_at?: true
    payment_method?: true
    created_at?: true
    update_at?: true
    _all?: true
  }

  export type InvoiceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Invoice to aggregate.
     */
    where?: InvoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invoices to fetch.
     */
    orderBy?: InvoiceOrderByWithRelationInput | InvoiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InvoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invoices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Invoices
    **/
    _count?: true | InvoiceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InvoiceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InvoiceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InvoiceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InvoiceMaxAggregateInputType
  }

  export type GetInvoiceAggregateType<T extends InvoiceAggregateArgs> = {
        [P in keyof T & keyof AggregateInvoice]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInvoice[P]>
      : GetScalarType<T[P], AggregateInvoice[P]>
  }




  export type InvoiceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InvoiceWhereInput
    orderBy?: InvoiceOrderByWithAggregationInput | InvoiceOrderByWithAggregationInput[]
    by: InvoiceScalarFieldEnum[] | InvoiceScalarFieldEnum
    having?: InvoiceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InvoiceCountAggregateInputType | true
    _avg?: InvoiceAvgAggregateInputType
    _sum?: InvoiceSumAggregateInputType
    _min?: InvoiceMinAggregateInputType
    _max?: InvoiceMaxAggregateInputType
  }

  export type InvoiceGroupByOutputType = {
    invoice_id: string
    org_id: string
    sub_id: string
    amount: number
    currency: string
    renewal_date: Date | null
    issue_date: Date
    due_date: Date
    paid_date: Date | null
    receipt: string | null
    status: string
    cancelled_at: Date | null
    payment_method: string | null
    created_at: Date
    update_at: Date
    _count: InvoiceCountAggregateOutputType | null
    _avg: InvoiceAvgAggregateOutputType | null
    _sum: InvoiceSumAggregateOutputType | null
    _min: InvoiceMinAggregateOutputType | null
    _max: InvoiceMaxAggregateOutputType | null
  }

  type GetInvoiceGroupByPayload<T extends InvoiceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InvoiceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InvoiceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InvoiceGroupByOutputType[P]>
            : GetScalarType<T[P], InvoiceGroupByOutputType[P]>
        }
      >
    >


  export type InvoiceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    invoice_id?: boolean
    org_id?: boolean
    sub_id?: boolean
    amount?: boolean
    currency?: boolean
    renewal_date?: boolean
    issue_date?: boolean
    due_date?: boolean
    paid_date?: boolean
    receipt?: boolean
    status?: boolean
    cancelled_at?: boolean
    payment_method?: boolean
    created_at?: boolean
    update_at?: boolean
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    subscription?: boolean | SubscriptionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["invoice"]>

  export type InvoiceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    invoice_id?: boolean
    org_id?: boolean
    sub_id?: boolean
    amount?: boolean
    currency?: boolean
    renewal_date?: boolean
    issue_date?: boolean
    due_date?: boolean
    paid_date?: boolean
    receipt?: boolean
    status?: boolean
    cancelled_at?: boolean
    payment_method?: boolean
    created_at?: boolean
    update_at?: boolean
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    subscription?: boolean | SubscriptionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["invoice"]>

  export type InvoiceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    invoice_id?: boolean
    org_id?: boolean
    sub_id?: boolean
    amount?: boolean
    currency?: boolean
    renewal_date?: boolean
    issue_date?: boolean
    due_date?: boolean
    paid_date?: boolean
    receipt?: boolean
    status?: boolean
    cancelled_at?: boolean
    payment_method?: boolean
    created_at?: boolean
    update_at?: boolean
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    subscription?: boolean | SubscriptionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["invoice"]>

  export type InvoiceSelectScalar = {
    invoice_id?: boolean
    org_id?: boolean
    sub_id?: boolean
    amount?: boolean
    currency?: boolean
    renewal_date?: boolean
    issue_date?: boolean
    due_date?: boolean
    paid_date?: boolean
    receipt?: boolean
    status?: boolean
    cancelled_at?: boolean
    payment_method?: boolean
    created_at?: boolean
    update_at?: boolean
  }

  export type InvoiceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"invoice_id" | "org_id" | "sub_id" | "amount" | "currency" | "renewal_date" | "issue_date" | "due_date" | "paid_date" | "receipt" | "status" | "cancelled_at" | "payment_method" | "created_at" | "update_at", ExtArgs["result"]["invoice"]>
  export type InvoiceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    subscription?: boolean | SubscriptionDefaultArgs<ExtArgs>
  }
  export type InvoiceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    subscription?: boolean | SubscriptionDefaultArgs<ExtArgs>
  }
  export type InvoiceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    subscription?: boolean | SubscriptionDefaultArgs<ExtArgs>
  }

  export type $InvoicePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Invoice"
    objects: {
      organization: Prisma.$OrganizationPayload<ExtArgs>
      subscription: Prisma.$SubscriptionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      invoice_id: string
      org_id: string
      sub_id: string
      amount: number
      currency: string
      renewal_date: Date | null
      issue_date: Date
      due_date: Date
      paid_date: Date | null
      receipt: string | null
      status: string
      cancelled_at: Date | null
      payment_method: string | null
      created_at: Date
      update_at: Date
    }, ExtArgs["result"]["invoice"]>
    composites: {}
  }

  type InvoiceGetPayload<S extends boolean | null | undefined | InvoiceDefaultArgs> = $Result.GetResult<Prisma.$InvoicePayload, S>

  type InvoiceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InvoiceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InvoiceCountAggregateInputType | true
    }

  export interface InvoiceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Invoice'], meta: { name: 'Invoice' } }
    /**
     * Find zero or one Invoice that matches the filter.
     * @param {InvoiceFindUniqueArgs} args - Arguments to find a Invoice
     * @example
     * // Get one Invoice
     * const invoice = await prisma.invoice.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InvoiceFindUniqueArgs>(args: SelectSubset<T, InvoiceFindUniqueArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Invoice that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InvoiceFindUniqueOrThrowArgs} args - Arguments to find a Invoice
     * @example
     * // Get one Invoice
     * const invoice = await prisma.invoice.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InvoiceFindUniqueOrThrowArgs>(args: SelectSubset<T, InvoiceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Invoice that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceFindFirstArgs} args - Arguments to find a Invoice
     * @example
     * // Get one Invoice
     * const invoice = await prisma.invoice.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InvoiceFindFirstArgs>(args?: SelectSubset<T, InvoiceFindFirstArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Invoice that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceFindFirstOrThrowArgs} args - Arguments to find a Invoice
     * @example
     * // Get one Invoice
     * const invoice = await prisma.invoice.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InvoiceFindFirstOrThrowArgs>(args?: SelectSubset<T, InvoiceFindFirstOrThrowArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Invoices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Invoices
     * const invoices = await prisma.invoice.findMany()
     * 
     * // Get first 10 Invoices
     * const invoices = await prisma.invoice.findMany({ take: 10 })
     * 
     * // Only select the `invoice_id`
     * const invoiceWithInvoice_idOnly = await prisma.invoice.findMany({ select: { invoice_id: true } })
     * 
     */
    findMany<T extends InvoiceFindManyArgs>(args?: SelectSubset<T, InvoiceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Invoice.
     * @param {InvoiceCreateArgs} args - Arguments to create a Invoice.
     * @example
     * // Create one Invoice
     * const Invoice = await prisma.invoice.create({
     *   data: {
     *     // ... data to create a Invoice
     *   }
     * })
     * 
     */
    create<T extends InvoiceCreateArgs>(args: SelectSubset<T, InvoiceCreateArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Invoices.
     * @param {InvoiceCreateManyArgs} args - Arguments to create many Invoices.
     * @example
     * // Create many Invoices
     * const invoice = await prisma.invoice.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InvoiceCreateManyArgs>(args?: SelectSubset<T, InvoiceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Invoices and returns the data saved in the database.
     * @param {InvoiceCreateManyAndReturnArgs} args - Arguments to create many Invoices.
     * @example
     * // Create many Invoices
     * const invoice = await prisma.invoice.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Invoices and only return the `invoice_id`
     * const invoiceWithInvoice_idOnly = await prisma.invoice.createManyAndReturn({
     *   select: { invoice_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InvoiceCreateManyAndReturnArgs>(args?: SelectSubset<T, InvoiceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Invoice.
     * @param {InvoiceDeleteArgs} args - Arguments to delete one Invoice.
     * @example
     * // Delete one Invoice
     * const Invoice = await prisma.invoice.delete({
     *   where: {
     *     // ... filter to delete one Invoice
     *   }
     * })
     * 
     */
    delete<T extends InvoiceDeleteArgs>(args: SelectSubset<T, InvoiceDeleteArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Invoice.
     * @param {InvoiceUpdateArgs} args - Arguments to update one Invoice.
     * @example
     * // Update one Invoice
     * const invoice = await prisma.invoice.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InvoiceUpdateArgs>(args: SelectSubset<T, InvoiceUpdateArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Invoices.
     * @param {InvoiceDeleteManyArgs} args - Arguments to filter Invoices to delete.
     * @example
     * // Delete a few Invoices
     * const { count } = await prisma.invoice.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InvoiceDeleteManyArgs>(args?: SelectSubset<T, InvoiceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Invoices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Invoices
     * const invoice = await prisma.invoice.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InvoiceUpdateManyArgs>(args: SelectSubset<T, InvoiceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Invoices and returns the data updated in the database.
     * @param {InvoiceUpdateManyAndReturnArgs} args - Arguments to update many Invoices.
     * @example
     * // Update many Invoices
     * const invoice = await prisma.invoice.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Invoices and only return the `invoice_id`
     * const invoiceWithInvoice_idOnly = await prisma.invoice.updateManyAndReturn({
     *   select: { invoice_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends InvoiceUpdateManyAndReturnArgs>(args: SelectSubset<T, InvoiceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Invoice.
     * @param {InvoiceUpsertArgs} args - Arguments to update or create a Invoice.
     * @example
     * // Update or create a Invoice
     * const invoice = await prisma.invoice.upsert({
     *   create: {
     *     // ... data to create a Invoice
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Invoice we want to update
     *   }
     * })
     */
    upsert<T extends InvoiceUpsertArgs>(args: SelectSubset<T, InvoiceUpsertArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Invoices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceCountArgs} args - Arguments to filter Invoices to count.
     * @example
     * // Count the number of Invoices
     * const count = await prisma.invoice.count({
     *   where: {
     *     // ... the filter for the Invoices we want to count
     *   }
     * })
    **/
    count<T extends InvoiceCountArgs>(
      args?: Subset<T, InvoiceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InvoiceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Invoice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends InvoiceAggregateArgs>(args: Subset<T, InvoiceAggregateArgs>): Prisma.PrismaPromise<GetInvoiceAggregateType<T>>

    /**
     * Group by Invoice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends InvoiceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InvoiceGroupByArgs['orderBy'] }
        : { orderBy?: InvoiceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, InvoiceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInvoiceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Invoice model
   */
  readonly fields: InvoiceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Invoice.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InvoiceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    organization<T extends OrganizationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrganizationDefaultArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    subscription<T extends SubscriptionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SubscriptionDefaultArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Invoice model
   */
  interface InvoiceFieldRefs {
    readonly invoice_id: FieldRef<"Invoice", 'String'>
    readonly org_id: FieldRef<"Invoice", 'String'>
    readonly sub_id: FieldRef<"Invoice", 'String'>
    readonly amount: FieldRef<"Invoice", 'Float'>
    readonly currency: FieldRef<"Invoice", 'String'>
    readonly renewal_date: FieldRef<"Invoice", 'DateTime'>
    readonly issue_date: FieldRef<"Invoice", 'DateTime'>
    readonly due_date: FieldRef<"Invoice", 'DateTime'>
    readonly paid_date: FieldRef<"Invoice", 'DateTime'>
    readonly receipt: FieldRef<"Invoice", 'String'>
    readonly status: FieldRef<"Invoice", 'String'>
    readonly cancelled_at: FieldRef<"Invoice", 'DateTime'>
    readonly payment_method: FieldRef<"Invoice", 'String'>
    readonly created_at: FieldRef<"Invoice", 'DateTime'>
    readonly update_at: FieldRef<"Invoice", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Invoice findUnique
   */
  export type InvoiceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * Filter, which Invoice to fetch.
     */
    where: InvoiceWhereUniqueInput
  }

  /**
   * Invoice findUniqueOrThrow
   */
  export type InvoiceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * Filter, which Invoice to fetch.
     */
    where: InvoiceWhereUniqueInput
  }

  /**
   * Invoice findFirst
   */
  export type InvoiceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * Filter, which Invoice to fetch.
     */
    where?: InvoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invoices to fetch.
     */
    orderBy?: InvoiceOrderByWithRelationInput | InvoiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Invoices.
     */
    cursor?: InvoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invoices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Invoices.
     */
    distinct?: InvoiceScalarFieldEnum | InvoiceScalarFieldEnum[]
  }

  /**
   * Invoice findFirstOrThrow
   */
  export type InvoiceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * Filter, which Invoice to fetch.
     */
    where?: InvoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invoices to fetch.
     */
    orderBy?: InvoiceOrderByWithRelationInput | InvoiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Invoices.
     */
    cursor?: InvoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invoices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Invoices.
     */
    distinct?: InvoiceScalarFieldEnum | InvoiceScalarFieldEnum[]
  }

  /**
   * Invoice findMany
   */
  export type InvoiceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * Filter, which Invoices to fetch.
     */
    where?: InvoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invoices to fetch.
     */
    orderBy?: InvoiceOrderByWithRelationInput | InvoiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Invoices.
     */
    cursor?: InvoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invoices.
     */
    skip?: number
    distinct?: InvoiceScalarFieldEnum | InvoiceScalarFieldEnum[]
  }

  /**
   * Invoice create
   */
  export type InvoiceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * The data needed to create a Invoice.
     */
    data: XOR<InvoiceCreateInput, InvoiceUncheckedCreateInput>
  }

  /**
   * Invoice createMany
   */
  export type InvoiceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Invoices.
     */
    data: InvoiceCreateManyInput | InvoiceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Invoice createManyAndReturn
   */
  export type InvoiceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * The data used to create many Invoices.
     */
    data: InvoiceCreateManyInput | InvoiceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Invoice update
   */
  export type InvoiceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * The data needed to update a Invoice.
     */
    data: XOR<InvoiceUpdateInput, InvoiceUncheckedUpdateInput>
    /**
     * Choose, which Invoice to update.
     */
    where: InvoiceWhereUniqueInput
  }

  /**
   * Invoice updateMany
   */
  export type InvoiceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Invoices.
     */
    data: XOR<InvoiceUpdateManyMutationInput, InvoiceUncheckedUpdateManyInput>
    /**
     * Filter which Invoices to update
     */
    where?: InvoiceWhereInput
    /**
     * Limit how many Invoices to update.
     */
    limit?: number
  }

  /**
   * Invoice updateManyAndReturn
   */
  export type InvoiceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * The data used to update Invoices.
     */
    data: XOR<InvoiceUpdateManyMutationInput, InvoiceUncheckedUpdateManyInput>
    /**
     * Filter which Invoices to update
     */
    where?: InvoiceWhereInput
    /**
     * Limit how many Invoices to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Invoice upsert
   */
  export type InvoiceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * The filter to search for the Invoice to update in case it exists.
     */
    where: InvoiceWhereUniqueInput
    /**
     * In case the Invoice found by the `where` argument doesn't exist, create a new Invoice with this data.
     */
    create: XOR<InvoiceCreateInput, InvoiceUncheckedCreateInput>
    /**
     * In case the Invoice was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InvoiceUpdateInput, InvoiceUncheckedUpdateInput>
  }

  /**
   * Invoice delete
   */
  export type InvoiceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * Filter which Invoice to delete.
     */
    where: InvoiceWhereUniqueInput
  }

  /**
   * Invoice deleteMany
   */
  export type InvoiceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Invoices to delete
     */
    where?: InvoiceWhereInput
    /**
     * Limit how many Invoices to delete.
     */
    limit?: number
  }

  /**
   * Invoice without action
   */
  export type InvoiceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
  }


  /**
   * Model Attendance
   */

  export type AggregateAttendance = {
    _count: AttendanceCountAggregateOutputType | null
    _avg: AttendanceAvgAggregateOutputType | null
    _sum: AttendanceSumAggregateOutputType | null
    _min: AttendanceMinAggregateOutputType | null
    _max: AttendanceMaxAggregateOutputType | null
  }

  export type AttendanceAvgAggregateOutputType = {
    work_hours: number | null
  }

  export type AttendanceSumAggregateOutputType = {
    work_hours: number | null
  }

  export type AttendanceMinAggregateOutputType = {
    att_id: string | null
    org_id: string | null
    emp_id: string | null
    date: Date | null
    check_in_time: Date | null
    check_in_location: string | null
    check_out_time: Date | null
    check_out_location: string | null
    work_hours: number | null
    status: string | null
    created_at: Date | null
    update_at: Date | null
  }

  export type AttendanceMaxAggregateOutputType = {
    att_id: string | null
    org_id: string | null
    emp_id: string | null
    date: Date | null
    check_in_time: Date | null
    check_in_location: string | null
    check_out_time: Date | null
    check_out_location: string | null
    work_hours: number | null
    status: string | null
    created_at: Date | null
    update_at: Date | null
  }

  export type AttendanceCountAggregateOutputType = {
    att_id: number
    org_id: number
    emp_id: number
    date: number
    check_in_time: number
    check_in_location: number
    check_out_time: number
    check_out_location: number
    work_hours: number
    status: number
    created_at: number
    update_at: number
    _all: number
  }


  export type AttendanceAvgAggregateInputType = {
    work_hours?: true
  }

  export type AttendanceSumAggregateInputType = {
    work_hours?: true
  }

  export type AttendanceMinAggregateInputType = {
    att_id?: true
    org_id?: true
    emp_id?: true
    date?: true
    check_in_time?: true
    check_in_location?: true
    check_out_time?: true
    check_out_location?: true
    work_hours?: true
    status?: true
    created_at?: true
    update_at?: true
  }

  export type AttendanceMaxAggregateInputType = {
    att_id?: true
    org_id?: true
    emp_id?: true
    date?: true
    check_in_time?: true
    check_in_location?: true
    check_out_time?: true
    check_out_location?: true
    work_hours?: true
    status?: true
    created_at?: true
    update_at?: true
  }

  export type AttendanceCountAggregateInputType = {
    att_id?: true
    org_id?: true
    emp_id?: true
    date?: true
    check_in_time?: true
    check_in_location?: true
    check_out_time?: true
    check_out_location?: true
    work_hours?: true
    status?: true
    created_at?: true
    update_at?: true
    _all?: true
  }

  export type AttendanceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Attendance to aggregate.
     */
    where?: AttendanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attendances to fetch.
     */
    orderBy?: AttendanceOrderByWithRelationInput | AttendanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AttendanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attendances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attendances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Attendances
    **/
    _count?: true | AttendanceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AttendanceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AttendanceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AttendanceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AttendanceMaxAggregateInputType
  }

  export type GetAttendanceAggregateType<T extends AttendanceAggregateArgs> = {
        [P in keyof T & keyof AggregateAttendance]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAttendance[P]>
      : GetScalarType<T[P], AggregateAttendance[P]>
  }




  export type AttendanceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AttendanceWhereInput
    orderBy?: AttendanceOrderByWithAggregationInput | AttendanceOrderByWithAggregationInput[]
    by: AttendanceScalarFieldEnum[] | AttendanceScalarFieldEnum
    having?: AttendanceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AttendanceCountAggregateInputType | true
    _avg?: AttendanceAvgAggregateInputType
    _sum?: AttendanceSumAggregateInputType
    _min?: AttendanceMinAggregateInputType
    _max?: AttendanceMaxAggregateInputType
  }

  export type AttendanceGroupByOutputType = {
    att_id: string
    org_id: string
    emp_id: string
    date: Date
    check_in_time: Date | null
    check_in_location: string | null
    check_out_time: Date | null
    check_out_location: string | null
    work_hours: number | null
    status: string
    created_at: Date
    update_at: Date
    _count: AttendanceCountAggregateOutputType | null
    _avg: AttendanceAvgAggregateOutputType | null
    _sum: AttendanceSumAggregateOutputType | null
    _min: AttendanceMinAggregateOutputType | null
    _max: AttendanceMaxAggregateOutputType | null
  }

  type GetAttendanceGroupByPayload<T extends AttendanceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AttendanceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AttendanceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AttendanceGroupByOutputType[P]>
            : GetScalarType<T[P], AttendanceGroupByOutputType[P]>
        }
      >
    >


  export type AttendanceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    att_id?: boolean
    org_id?: boolean
    emp_id?: boolean
    date?: boolean
    check_in_time?: boolean
    check_in_location?: boolean
    check_out_time?: boolean
    check_out_location?: boolean
    work_hours?: boolean
    status?: boolean
    created_at?: boolean
    update_at?: boolean
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["attendance"]>

  export type AttendanceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    att_id?: boolean
    org_id?: boolean
    emp_id?: boolean
    date?: boolean
    check_in_time?: boolean
    check_in_location?: boolean
    check_out_time?: boolean
    check_out_location?: boolean
    work_hours?: boolean
    status?: boolean
    created_at?: boolean
    update_at?: boolean
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["attendance"]>

  export type AttendanceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    att_id?: boolean
    org_id?: boolean
    emp_id?: boolean
    date?: boolean
    check_in_time?: boolean
    check_in_location?: boolean
    check_out_time?: boolean
    check_out_location?: boolean
    work_hours?: boolean
    status?: boolean
    created_at?: boolean
    update_at?: boolean
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["attendance"]>

  export type AttendanceSelectScalar = {
    att_id?: boolean
    org_id?: boolean
    emp_id?: boolean
    date?: boolean
    check_in_time?: boolean
    check_in_location?: boolean
    check_out_time?: boolean
    check_out_location?: boolean
    work_hours?: boolean
    status?: boolean
    created_at?: boolean
    update_at?: boolean
  }

  export type AttendanceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"att_id" | "org_id" | "emp_id" | "date" | "check_in_time" | "check_in_location" | "check_out_time" | "check_out_location" | "work_hours" | "status" | "created_at" | "update_at", ExtArgs["result"]["attendance"]>
  export type AttendanceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
  }
  export type AttendanceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
  }
  export type AttendanceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
  }

  export type $AttendancePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Attendance"
    objects: {
      organization: Prisma.$OrganizationPayload<ExtArgs>
      employee: Prisma.$EmployeePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      att_id: string
      org_id: string
      emp_id: string
      date: Date
      check_in_time: Date | null
      check_in_location: string | null
      check_out_time: Date | null
      check_out_location: string | null
      work_hours: number | null
      status: string
      created_at: Date
      update_at: Date
    }, ExtArgs["result"]["attendance"]>
    composites: {}
  }

  type AttendanceGetPayload<S extends boolean | null | undefined | AttendanceDefaultArgs> = $Result.GetResult<Prisma.$AttendancePayload, S>

  type AttendanceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AttendanceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AttendanceCountAggregateInputType | true
    }

  export interface AttendanceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Attendance'], meta: { name: 'Attendance' } }
    /**
     * Find zero or one Attendance that matches the filter.
     * @param {AttendanceFindUniqueArgs} args - Arguments to find a Attendance
     * @example
     * // Get one Attendance
     * const attendance = await prisma.attendance.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AttendanceFindUniqueArgs>(args: SelectSubset<T, AttendanceFindUniqueArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Attendance that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AttendanceFindUniqueOrThrowArgs} args - Arguments to find a Attendance
     * @example
     * // Get one Attendance
     * const attendance = await prisma.attendance.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AttendanceFindUniqueOrThrowArgs>(args: SelectSubset<T, AttendanceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Attendance that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceFindFirstArgs} args - Arguments to find a Attendance
     * @example
     * // Get one Attendance
     * const attendance = await prisma.attendance.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AttendanceFindFirstArgs>(args?: SelectSubset<T, AttendanceFindFirstArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Attendance that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceFindFirstOrThrowArgs} args - Arguments to find a Attendance
     * @example
     * // Get one Attendance
     * const attendance = await prisma.attendance.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AttendanceFindFirstOrThrowArgs>(args?: SelectSubset<T, AttendanceFindFirstOrThrowArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Attendances that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Attendances
     * const attendances = await prisma.attendance.findMany()
     * 
     * // Get first 10 Attendances
     * const attendances = await prisma.attendance.findMany({ take: 10 })
     * 
     * // Only select the `att_id`
     * const attendanceWithAtt_idOnly = await prisma.attendance.findMany({ select: { att_id: true } })
     * 
     */
    findMany<T extends AttendanceFindManyArgs>(args?: SelectSubset<T, AttendanceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Attendance.
     * @param {AttendanceCreateArgs} args - Arguments to create a Attendance.
     * @example
     * // Create one Attendance
     * const Attendance = await prisma.attendance.create({
     *   data: {
     *     // ... data to create a Attendance
     *   }
     * })
     * 
     */
    create<T extends AttendanceCreateArgs>(args: SelectSubset<T, AttendanceCreateArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Attendances.
     * @param {AttendanceCreateManyArgs} args - Arguments to create many Attendances.
     * @example
     * // Create many Attendances
     * const attendance = await prisma.attendance.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AttendanceCreateManyArgs>(args?: SelectSubset<T, AttendanceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Attendances and returns the data saved in the database.
     * @param {AttendanceCreateManyAndReturnArgs} args - Arguments to create many Attendances.
     * @example
     * // Create many Attendances
     * const attendance = await prisma.attendance.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Attendances and only return the `att_id`
     * const attendanceWithAtt_idOnly = await prisma.attendance.createManyAndReturn({
     *   select: { att_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AttendanceCreateManyAndReturnArgs>(args?: SelectSubset<T, AttendanceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Attendance.
     * @param {AttendanceDeleteArgs} args - Arguments to delete one Attendance.
     * @example
     * // Delete one Attendance
     * const Attendance = await prisma.attendance.delete({
     *   where: {
     *     // ... filter to delete one Attendance
     *   }
     * })
     * 
     */
    delete<T extends AttendanceDeleteArgs>(args: SelectSubset<T, AttendanceDeleteArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Attendance.
     * @param {AttendanceUpdateArgs} args - Arguments to update one Attendance.
     * @example
     * // Update one Attendance
     * const attendance = await prisma.attendance.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AttendanceUpdateArgs>(args: SelectSubset<T, AttendanceUpdateArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Attendances.
     * @param {AttendanceDeleteManyArgs} args - Arguments to filter Attendances to delete.
     * @example
     * // Delete a few Attendances
     * const { count } = await prisma.attendance.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AttendanceDeleteManyArgs>(args?: SelectSubset<T, AttendanceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Attendances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Attendances
     * const attendance = await prisma.attendance.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AttendanceUpdateManyArgs>(args: SelectSubset<T, AttendanceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Attendances and returns the data updated in the database.
     * @param {AttendanceUpdateManyAndReturnArgs} args - Arguments to update many Attendances.
     * @example
     * // Update many Attendances
     * const attendance = await prisma.attendance.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Attendances and only return the `att_id`
     * const attendanceWithAtt_idOnly = await prisma.attendance.updateManyAndReturn({
     *   select: { att_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AttendanceUpdateManyAndReturnArgs>(args: SelectSubset<T, AttendanceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Attendance.
     * @param {AttendanceUpsertArgs} args - Arguments to update or create a Attendance.
     * @example
     * // Update or create a Attendance
     * const attendance = await prisma.attendance.upsert({
     *   create: {
     *     // ... data to create a Attendance
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Attendance we want to update
     *   }
     * })
     */
    upsert<T extends AttendanceUpsertArgs>(args: SelectSubset<T, AttendanceUpsertArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Attendances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceCountArgs} args - Arguments to filter Attendances to count.
     * @example
     * // Count the number of Attendances
     * const count = await prisma.attendance.count({
     *   where: {
     *     // ... the filter for the Attendances we want to count
     *   }
     * })
    **/
    count<T extends AttendanceCountArgs>(
      args?: Subset<T, AttendanceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AttendanceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Attendance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AttendanceAggregateArgs>(args: Subset<T, AttendanceAggregateArgs>): Prisma.PrismaPromise<GetAttendanceAggregateType<T>>

    /**
     * Group by Attendance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AttendanceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AttendanceGroupByArgs['orderBy'] }
        : { orderBy?: AttendanceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AttendanceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAttendanceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Attendance model
   */
  readonly fields: AttendanceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Attendance.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AttendanceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    organization<T extends OrganizationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrganizationDefaultArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    employee<T extends EmployeeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EmployeeDefaultArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Attendance model
   */
  interface AttendanceFieldRefs {
    readonly att_id: FieldRef<"Attendance", 'String'>
    readonly org_id: FieldRef<"Attendance", 'String'>
    readonly emp_id: FieldRef<"Attendance", 'String'>
    readonly date: FieldRef<"Attendance", 'DateTime'>
    readonly check_in_time: FieldRef<"Attendance", 'DateTime'>
    readonly check_in_location: FieldRef<"Attendance", 'String'>
    readonly check_out_time: FieldRef<"Attendance", 'DateTime'>
    readonly check_out_location: FieldRef<"Attendance", 'String'>
    readonly work_hours: FieldRef<"Attendance", 'Float'>
    readonly status: FieldRef<"Attendance", 'String'>
    readonly created_at: FieldRef<"Attendance", 'DateTime'>
    readonly update_at: FieldRef<"Attendance", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Attendance findUnique
   */
  export type AttendanceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * Filter, which Attendance to fetch.
     */
    where: AttendanceWhereUniqueInput
  }

  /**
   * Attendance findUniqueOrThrow
   */
  export type AttendanceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * Filter, which Attendance to fetch.
     */
    where: AttendanceWhereUniqueInput
  }

  /**
   * Attendance findFirst
   */
  export type AttendanceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * Filter, which Attendance to fetch.
     */
    where?: AttendanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attendances to fetch.
     */
    orderBy?: AttendanceOrderByWithRelationInput | AttendanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Attendances.
     */
    cursor?: AttendanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attendances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attendances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Attendances.
     */
    distinct?: AttendanceScalarFieldEnum | AttendanceScalarFieldEnum[]
  }

  /**
   * Attendance findFirstOrThrow
   */
  export type AttendanceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * Filter, which Attendance to fetch.
     */
    where?: AttendanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attendances to fetch.
     */
    orderBy?: AttendanceOrderByWithRelationInput | AttendanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Attendances.
     */
    cursor?: AttendanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attendances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attendances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Attendances.
     */
    distinct?: AttendanceScalarFieldEnum | AttendanceScalarFieldEnum[]
  }

  /**
   * Attendance findMany
   */
  export type AttendanceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * Filter, which Attendances to fetch.
     */
    where?: AttendanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attendances to fetch.
     */
    orderBy?: AttendanceOrderByWithRelationInput | AttendanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Attendances.
     */
    cursor?: AttendanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attendances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attendances.
     */
    skip?: number
    distinct?: AttendanceScalarFieldEnum | AttendanceScalarFieldEnum[]
  }

  /**
   * Attendance create
   */
  export type AttendanceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * The data needed to create a Attendance.
     */
    data: XOR<AttendanceCreateInput, AttendanceUncheckedCreateInput>
  }

  /**
   * Attendance createMany
   */
  export type AttendanceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Attendances.
     */
    data: AttendanceCreateManyInput | AttendanceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Attendance createManyAndReturn
   */
  export type AttendanceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * The data used to create many Attendances.
     */
    data: AttendanceCreateManyInput | AttendanceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Attendance update
   */
  export type AttendanceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * The data needed to update a Attendance.
     */
    data: XOR<AttendanceUpdateInput, AttendanceUncheckedUpdateInput>
    /**
     * Choose, which Attendance to update.
     */
    where: AttendanceWhereUniqueInput
  }

  /**
   * Attendance updateMany
   */
  export type AttendanceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Attendances.
     */
    data: XOR<AttendanceUpdateManyMutationInput, AttendanceUncheckedUpdateManyInput>
    /**
     * Filter which Attendances to update
     */
    where?: AttendanceWhereInput
    /**
     * Limit how many Attendances to update.
     */
    limit?: number
  }

  /**
   * Attendance updateManyAndReturn
   */
  export type AttendanceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * The data used to update Attendances.
     */
    data: XOR<AttendanceUpdateManyMutationInput, AttendanceUncheckedUpdateManyInput>
    /**
     * Filter which Attendances to update
     */
    where?: AttendanceWhereInput
    /**
     * Limit how many Attendances to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Attendance upsert
   */
  export type AttendanceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * The filter to search for the Attendance to update in case it exists.
     */
    where: AttendanceWhereUniqueInput
    /**
     * In case the Attendance found by the `where` argument doesn't exist, create a new Attendance with this data.
     */
    create: XOR<AttendanceCreateInput, AttendanceUncheckedCreateInput>
    /**
     * In case the Attendance was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AttendanceUpdateInput, AttendanceUncheckedUpdateInput>
  }

  /**
   * Attendance delete
   */
  export type AttendanceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * Filter which Attendance to delete.
     */
    where: AttendanceWhereUniqueInput
  }

  /**
   * Attendance deleteMany
   */
  export type AttendanceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Attendances to delete
     */
    where?: AttendanceWhereInput
    /**
     * Limit how many Attendances to delete.
     */
    limit?: number
  }

  /**
   * Attendance without action
   */
  export type AttendanceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
  }


  /**
   * Model LeaveRequest
   */

  export type AggregateLeaveRequest = {
    _count: LeaveRequestCountAggregateOutputType | null
    _min: LeaveRequestMinAggregateOutputType | null
    _max: LeaveRequestMaxAggregateOutputType | null
  }

  export type LeaveRequestMinAggregateOutputType = {
    leave_id: string | null
    org_id: string | null
    emp_id: string | null
    leave_type: string | null
    start_date: Date | null
    end_date: Date | null
    reason: string | null
    attachments: string | null
    approved_by: string | null
    approved_date: Date | null
    status: string | null
    created_at: Date | null
    update_at: Date | null
  }

  export type LeaveRequestMaxAggregateOutputType = {
    leave_id: string | null
    org_id: string | null
    emp_id: string | null
    leave_type: string | null
    start_date: Date | null
    end_date: Date | null
    reason: string | null
    attachments: string | null
    approved_by: string | null
    approved_date: Date | null
    status: string | null
    created_at: Date | null
    update_at: Date | null
  }

  export type LeaveRequestCountAggregateOutputType = {
    leave_id: number
    org_id: number
    emp_id: number
    leave_type: number
    start_date: number
    end_date: number
    reason: number
    attachments: number
    approved_by: number
    approved_date: number
    status: number
    created_at: number
    update_at: number
    _all: number
  }


  export type LeaveRequestMinAggregateInputType = {
    leave_id?: true
    org_id?: true
    emp_id?: true
    leave_type?: true
    start_date?: true
    end_date?: true
    reason?: true
    attachments?: true
    approved_by?: true
    approved_date?: true
    status?: true
    created_at?: true
    update_at?: true
  }

  export type LeaveRequestMaxAggregateInputType = {
    leave_id?: true
    org_id?: true
    emp_id?: true
    leave_type?: true
    start_date?: true
    end_date?: true
    reason?: true
    attachments?: true
    approved_by?: true
    approved_date?: true
    status?: true
    created_at?: true
    update_at?: true
  }

  export type LeaveRequestCountAggregateInputType = {
    leave_id?: true
    org_id?: true
    emp_id?: true
    leave_type?: true
    start_date?: true
    end_date?: true
    reason?: true
    attachments?: true
    approved_by?: true
    approved_date?: true
    status?: true
    created_at?: true
    update_at?: true
    _all?: true
  }

  export type LeaveRequestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LeaveRequest to aggregate.
     */
    where?: LeaveRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LeaveRequests to fetch.
     */
    orderBy?: LeaveRequestOrderByWithRelationInput | LeaveRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LeaveRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LeaveRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LeaveRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LeaveRequests
    **/
    _count?: true | LeaveRequestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LeaveRequestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LeaveRequestMaxAggregateInputType
  }

  export type GetLeaveRequestAggregateType<T extends LeaveRequestAggregateArgs> = {
        [P in keyof T & keyof AggregateLeaveRequest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLeaveRequest[P]>
      : GetScalarType<T[P], AggregateLeaveRequest[P]>
  }




  export type LeaveRequestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LeaveRequestWhereInput
    orderBy?: LeaveRequestOrderByWithAggregationInput | LeaveRequestOrderByWithAggregationInput[]
    by: LeaveRequestScalarFieldEnum[] | LeaveRequestScalarFieldEnum
    having?: LeaveRequestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LeaveRequestCountAggregateInputType | true
    _min?: LeaveRequestMinAggregateInputType
    _max?: LeaveRequestMaxAggregateInputType
  }

  export type LeaveRequestGroupByOutputType = {
    leave_id: string
    org_id: string
    emp_id: string
    leave_type: string
    start_date: Date
    end_date: Date
    reason: string | null
    attachments: string | null
    approved_by: string | null
    approved_date: Date | null
    status: string
    created_at: Date
    update_at: Date
    _count: LeaveRequestCountAggregateOutputType | null
    _min: LeaveRequestMinAggregateOutputType | null
    _max: LeaveRequestMaxAggregateOutputType | null
  }

  type GetLeaveRequestGroupByPayload<T extends LeaveRequestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LeaveRequestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LeaveRequestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LeaveRequestGroupByOutputType[P]>
            : GetScalarType<T[P], LeaveRequestGroupByOutputType[P]>
        }
      >
    >


  export type LeaveRequestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    leave_id?: boolean
    org_id?: boolean
    emp_id?: boolean
    leave_type?: boolean
    start_date?: boolean
    end_date?: boolean
    reason?: boolean
    attachments?: boolean
    approved_by?: boolean
    approved_date?: boolean
    status?: boolean
    created_at?: boolean
    update_at?: boolean
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
    approver?: boolean | LeaveRequest$approverArgs<ExtArgs>
  }, ExtArgs["result"]["leaveRequest"]>

  export type LeaveRequestSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    leave_id?: boolean
    org_id?: boolean
    emp_id?: boolean
    leave_type?: boolean
    start_date?: boolean
    end_date?: boolean
    reason?: boolean
    attachments?: boolean
    approved_by?: boolean
    approved_date?: boolean
    status?: boolean
    created_at?: boolean
    update_at?: boolean
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
    approver?: boolean | LeaveRequest$approverArgs<ExtArgs>
  }, ExtArgs["result"]["leaveRequest"]>

  export type LeaveRequestSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    leave_id?: boolean
    org_id?: boolean
    emp_id?: boolean
    leave_type?: boolean
    start_date?: boolean
    end_date?: boolean
    reason?: boolean
    attachments?: boolean
    approved_by?: boolean
    approved_date?: boolean
    status?: boolean
    created_at?: boolean
    update_at?: boolean
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
    approver?: boolean | LeaveRequest$approverArgs<ExtArgs>
  }, ExtArgs["result"]["leaveRequest"]>

  export type LeaveRequestSelectScalar = {
    leave_id?: boolean
    org_id?: boolean
    emp_id?: boolean
    leave_type?: boolean
    start_date?: boolean
    end_date?: boolean
    reason?: boolean
    attachments?: boolean
    approved_by?: boolean
    approved_date?: boolean
    status?: boolean
    created_at?: boolean
    update_at?: boolean
  }

  export type LeaveRequestOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"leave_id" | "org_id" | "emp_id" | "leave_type" | "start_date" | "end_date" | "reason" | "attachments" | "approved_by" | "approved_date" | "status" | "created_at" | "update_at", ExtArgs["result"]["leaveRequest"]>
  export type LeaveRequestInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
    approver?: boolean | LeaveRequest$approverArgs<ExtArgs>
  }
  export type LeaveRequestIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
    approver?: boolean | LeaveRequest$approverArgs<ExtArgs>
  }
  export type LeaveRequestIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
    approver?: boolean | LeaveRequest$approverArgs<ExtArgs>
  }

  export type $LeaveRequestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LeaveRequest"
    objects: {
      organization: Prisma.$OrganizationPayload<ExtArgs>
      employee: Prisma.$EmployeePayload<ExtArgs>
      approver: Prisma.$EmployeePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      leave_id: string
      org_id: string
      emp_id: string
      leave_type: string
      start_date: Date
      end_date: Date
      reason: string | null
      attachments: string | null
      approved_by: string | null
      approved_date: Date | null
      status: string
      created_at: Date
      update_at: Date
    }, ExtArgs["result"]["leaveRequest"]>
    composites: {}
  }

  type LeaveRequestGetPayload<S extends boolean | null | undefined | LeaveRequestDefaultArgs> = $Result.GetResult<Prisma.$LeaveRequestPayload, S>

  type LeaveRequestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LeaveRequestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LeaveRequestCountAggregateInputType | true
    }

  export interface LeaveRequestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LeaveRequest'], meta: { name: 'LeaveRequest' } }
    /**
     * Find zero or one LeaveRequest that matches the filter.
     * @param {LeaveRequestFindUniqueArgs} args - Arguments to find a LeaveRequest
     * @example
     * // Get one LeaveRequest
     * const leaveRequest = await prisma.leaveRequest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LeaveRequestFindUniqueArgs>(args: SelectSubset<T, LeaveRequestFindUniqueArgs<ExtArgs>>): Prisma__LeaveRequestClient<$Result.GetResult<Prisma.$LeaveRequestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LeaveRequest that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LeaveRequestFindUniqueOrThrowArgs} args - Arguments to find a LeaveRequest
     * @example
     * // Get one LeaveRequest
     * const leaveRequest = await prisma.leaveRequest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LeaveRequestFindUniqueOrThrowArgs>(args: SelectSubset<T, LeaveRequestFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LeaveRequestClient<$Result.GetResult<Prisma.$LeaveRequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LeaveRequest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaveRequestFindFirstArgs} args - Arguments to find a LeaveRequest
     * @example
     * // Get one LeaveRequest
     * const leaveRequest = await prisma.leaveRequest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LeaveRequestFindFirstArgs>(args?: SelectSubset<T, LeaveRequestFindFirstArgs<ExtArgs>>): Prisma__LeaveRequestClient<$Result.GetResult<Prisma.$LeaveRequestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LeaveRequest that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaveRequestFindFirstOrThrowArgs} args - Arguments to find a LeaveRequest
     * @example
     * // Get one LeaveRequest
     * const leaveRequest = await prisma.leaveRequest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LeaveRequestFindFirstOrThrowArgs>(args?: SelectSubset<T, LeaveRequestFindFirstOrThrowArgs<ExtArgs>>): Prisma__LeaveRequestClient<$Result.GetResult<Prisma.$LeaveRequestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LeaveRequests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaveRequestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LeaveRequests
     * const leaveRequests = await prisma.leaveRequest.findMany()
     * 
     * // Get first 10 LeaveRequests
     * const leaveRequests = await prisma.leaveRequest.findMany({ take: 10 })
     * 
     * // Only select the `leave_id`
     * const leaveRequestWithLeave_idOnly = await prisma.leaveRequest.findMany({ select: { leave_id: true } })
     * 
     */
    findMany<T extends LeaveRequestFindManyArgs>(args?: SelectSubset<T, LeaveRequestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeaveRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LeaveRequest.
     * @param {LeaveRequestCreateArgs} args - Arguments to create a LeaveRequest.
     * @example
     * // Create one LeaveRequest
     * const LeaveRequest = await prisma.leaveRequest.create({
     *   data: {
     *     // ... data to create a LeaveRequest
     *   }
     * })
     * 
     */
    create<T extends LeaveRequestCreateArgs>(args: SelectSubset<T, LeaveRequestCreateArgs<ExtArgs>>): Prisma__LeaveRequestClient<$Result.GetResult<Prisma.$LeaveRequestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LeaveRequests.
     * @param {LeaveRequestCreateManyArgs} args - Arguments to create many LeaveRequests.
     * @example
     * // Create many LeaveRequests
     * const leaveRequest = await prisma.leaveRequest.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LeaveRequestCreateManyArgs>(args?: SelectSubset<T, LeaveRequestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LeaveRequests and returns the data saved in the database.
     * @param {LeaveRequestCreateManyAndReturnArgs} args - Arguments to create many LeaveRequests.
     * @example
     * // Create many LeaveRequests
     * const leaveRequest = await prisma.leaveRequest.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LeaveRequests and only return the `leave_id`
     * const leaveRequestWithLeave_idOnly = await prisma.leaveRequest.createManyAndReturn({
     *   select: { leave_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LeaveRequestCreateManyAndReturnArgs>(args?: SelectSubset<T, LeaveRequestCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeaveRequestPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a LeaveRequest.
     * @param {LeaveRequestDeleteArgs} args - Arguments to delete one LeaveRequest.
     * @example
     * // Delete one LeaveRequest
     * const LeaveRequest = await prisma.leaveRequest.delete({
     *   where: {
     *     // ... filter to delete one LeaveRequest
     *   }
     * })
     * 
     */
    delete<T extends LeaveRequestDeleteArgs>(args: SelectSubset<T, LeaveRequestDeleteArgs<ExtArgs>>): Prisma__LeaveRequestClient<$Result.GetResult<Prisma.$LeaveRequestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LeaveRequest.
     * @param {LeaveRequestUpdateArgs} args - Arguments to update one LeaveRequest.
     * @example
     * // Update one LeaveRequest
     * const leaveRequest = await prisma.leaveRequest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LeaveRequestUpdateArgs>(args: SelectSubset<T, LeaveRequestUpdateArgs<ExtArgs>>): Prisma__LeaveRequestClient<$Result.GetResult<Prisma.$LeaveRequestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LeaveRequests.
     * @param {LeaveRequestDeleteManyArgs} args - Arguments to filter LeaveRequests to delete.
     * @example
     * // Delete a few LeaveRequests
     * const { count } = await prisma.leaveRequest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LeaveRequestDeleteManyArgs>(args?: SelectSubset<T, LeaveRequestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LeaveRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaveRequestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LeaveRequests
     * const leaveRequest = await prisma.leaveRequest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LeaveRequestUpdateManyArgs>(args: SelectSubset<T, LeaveRequestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LeaveRequests and returns the data updated in the database.
     * @param {LeaveRequestUpdateManyAndReturnArgs} args - Arguments to update many LeaveRequests.
     * @example
     * // Update many LeaveRequests
     * const leaveRequest = await prisma.leaveRequest.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more LeaveRequests and only return the `leave_id`
     * const leaveRequestWithLeave_idOnly = await prisma.leaveRequest.updateManyAndReturn({
     *   select: { leave_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LeaveRequestUpdateManyAndReturnArgs>(args: SelectSubset<T, LeaveRequestUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeaveRequestPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one LeaveRequest.
     * @param {LeaveRequestUpsertArgs} args - Arguments to update or create a LeaveRequest.
     * @example
     * // Update or create a LeaveRequest
     * const leaveRequest = await prisma.leaveRequest.upsert({
     *   create: {
     *     // ... data to create a LeaveRequest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LeaveRequest we want to update
     *   }
     * })
     */
    upsert<T extends LeaveRequestUpsertArgs>(args: SelectSubset<T, LeaveRequestUpsertArgs<ExtArgs>>): Prisma__LeaveRequestClient<$Result.GetResult<Prisma.$LeaveRequestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of LeaveRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaveRequestCountArgs} args - Arguments to filter LeaveRequests to count.
     * @example
     * // Count the number of LeaveRequests
     * const count = await prisma.leaveRequest.count({
     *   where: {
     *     // ... the filter for the LeaveRequests we want to count
     *   }
     * })
    **/
    count<T extends LeaveRequestCountArgs>(
      args?: Subset<T, LeaveRequestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LeaveRequestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LeaveRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaveRequestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LeaveRequestAggregateArgs>(args: Subset<T, LeaveRequestAggregateArgs>): Prisma.PrismaPromise<GetLeaveRequestAggregateType<T>>

    /**
     * Group by LeaveRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaveRequestGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LeaveRequestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LeaveRequestGroupByArgs['orderBy'] }
        : { orderBy?: LeaveRequestGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LeaveRequestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLeaveRequestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LeaveRequest model
   */
  readonly fields: LeaveRequestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LeaveRequest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LeaveRequestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    organization<T extends OrganizationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrganizationDefaultArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    employee<T extends EmployeeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EmployeeDefaultArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    approver<T extends LeaveRequest$approverArgs<ExtArgs> = {}>(args?: Subset<T, LeaveRequest$approverArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the LeaveRequest model
   */
  interface LeaveRequestFieldRefs {
    readonly leave_id: FieldRef<"LeaveRequest", 'String'>
    readonly org_id: FieldRef<"LeaveRequest", 'String'>
    readonly emp_id: FieldRef<"LeaveRequest", 'String'>
    readonly leave_type: FieldRef<"LeaveRequest", 'String'>
    readonly start_date: FieldRef<"LeaveRequest", 'DateTime'>
    readonly end_date: FieldRef<"LeaveRequest", 'DateTime'>
    readonly reason: FieldRef<"LeaveRequest", 'String'>
    readonly attachments: FieldRef<"LeaveRequest", 'String'>
    readonly approved_by: FieldRef<"LeaveRequest", 'String'>
    readonly approved_date: FieldRef<"LeaveRequest", 'DateTime'>
    readonly status: FieldRef<"LeaveRequest", 'String'>
    readonly created_at: FieldRef<"LeaveRequest", 'DateTime'>
    readonly update_at: FieldRef<"LeaveRequest", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * LeaveRequest findUnique
   */
  export type LeaveRequestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaveRequest
     */
    select?: LeaveRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeaveRequest
     */
    omit?: LeaveRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaveRequestInclude<ExtArgs> | null
    /**
     * Filter, which LeaveRequest to fetch.
     */
    where: LeaveRequestWhereUniqueInput
  }

  /**
   * LeaveRequest findUniqueOrThrow
   */
  export type LeaveRequestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaveRequest
     */
    select?: LeaveRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeaveRequest
     */
    omit?: LeaveRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaveRequestInclude<ExtArgs> | null
    /**
     * Filter, which LeaveRequest to fetch.
     */
    where: LeaveRequestWhereUniqueInput
  }

  /**
   * LeaveRequest findFirst
   */
  export type LeaveRequestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaveRequest
     */
    select?: LeaveRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeaveRequest
     */
    omit?: LeaveRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaveRequestInclude<ExtArgs> | null
    /**
     * Filter, which LeaveRequest to fetch.
     */
    where?: LeaveRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LeaveRequests to fetch.
     */
    orderBy?: LeaveRequestOrderByWithRelationInput | LeaveRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LeaveRequests.
     */
    cursor?: LeaveRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LeaveRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LeaveRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LeaveRequests.
     */
    distinct?: LeaveRequestScalarFieldEnum | LeaveRequestScalarFieldEnum[]
  }

  /**
   * LeaveRequest findFirstOrThrow
   */
  export type LeaveRequestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaveRequest
     */
    select?: LeaveRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeaveRequest
     */
    omit?: LeaveRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaveRequestInclude<ExtArgs> | null
    /**
     * Filter, which LeaveRequest to fetch.
     */
    where?: LeaveRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LeaveRequests to fetch.
     */
    orderBy?: LeaveRequestOrderByWithRelationInput | LeaveRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LeaveRequests.
     */
    cursor?: LeaveRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LeaveRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LeaveRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LeaveRequests.
     */
    distinct?: LeaveRequestScalarFieldEnum | LeaveRequestScalarFieldEnum[]
  }

  /**
   * LeaveRequest findMany
   */
  export type LeaveRequestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaveRequest
     */
    select?: LeaveRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeaveRequest
     */
    omit?: LeaveRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaveRequestInclude<ExtArgs> | null
    /**
     * Filter, which LeaveRequests to fetch.
     */
    where?: LeaveRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LeaveRequests to fetch.
     */
    orderBy?: LeaveRequestOrderByWithRelationInput | LeaveRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LeaveRequests.
     */
    cursor?: LeaveRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LeaveRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LeaveRequests.
     */
    skip?: number
    distinct?: LeaveRequestScalarFieldEnum | LeaveRequestScalarFieldEnum[]
  }

  /**
   * LeaveRequest create
   */
  export type LeaveRequestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaveRequest
     */
    select?: LeaveRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeaveRequest
     */
    omit?: LeaveRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaveRequestInclude<ExtArgs> | null
    /**
     * The data needed to create a LeaveRequest.
     */
    data: XOR<LeaveRequestCreateInput, LeaveRequestUncheckedCreateInput>
  }

  /**
   * LeaveRequest createMany
   */
  export type LeaveRequestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LeaveRequests.
     */
    data: LeaveRequestCreateManyInput | LeaveRequestCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LeaveRequest createManyAndReturn
   */
  export type LeaveRequestCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaveRequest
     */
    select?: LeaveRequestSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LeaveRequest
     */
    omit?: LeaveRequestOmit<ExtArgs> | null
    /**
     * The data used to create many LeaveRequests.
     */
    data: LeaveRequestCreateManyInput | LeaveRequestCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaveRequestIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * LeaveRequest update
   */
  export type LeaveRequestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaveRequest
     */
    select?: LeaveRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeaveRequest
     */
    omit?: LeaveRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaveRequestInclude<ExtArgs> | null
    /**
     * The data needed to update a LeaveRequest.
     */
    data: XOR<LeaveRequestUpdateInput, LeaveRequestUncheckedUpdateInput>
    /**
     * Choose, which LeaveRequest to update.
     */
    where: LeaveRequestWhereUniqueInput
  }

  /**
   * LeaveRequest updateMany
   */
  export type LeaveRequestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LeaveRequests.
     */
    data: XOR<LeaveRequestUpdateManyMutationInput, LeaveRequestUncheckedUpdateManyInput>
    /**
     * Filter which LeaveRequests to update
     */
    where?: LeaveRequestWhereInput
    /**
     * Limit how many LeaveRequests to update.
     */
    limit?: number
  }

  /**
   * LeaveRequest updateManyAndReturn
   */
  export type LeaveRequestUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaveRequest
     */
    select?: LeaveRequestSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LeaveRequest
     */
    omit?: LeaveRequestOmit<ExtArgs> | null
    /**
     * The data used to update LeaveRequests.
     */
    data: XOR<LeaveRequestUpdateManyMutationInput, LeaveRequestUncheckedUpdateManyInput>
    /**
     * Filter which LeaveRequests to update
     */
    where?: LeaveRequestWhereInput
    /**
     * Limit how many LeaveRequests to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaveRequestIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * LeaveRequest upsert
   */
  export type LeaveRequestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaveRequest
     */
    select?: LeaveRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeaveRequest
     */
    omit?: LeaveRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaveRequestInclude<ExtArgs> | null
    /**
     * The filter to search for the LeaveRequest to update in case it exists.
     */
    where: LeaveRequestWhereUniqueInput
    /**
     * In case the LeaveRequest found by the `where` argument doesn't exist, create a new LeaveRequest with this data.
     */
    create: XOR<LeaveRequestCreateInput, LeaveRequestUncheckedCreateInput>
    /**
     * In case the LeaveRequest was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LeaveRequestUpdateInput, LeaveRequestUncheckedUpdateInput>
  }

  /**
   * LeaveRequest delete
   */
  export type LeaveRequestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaveRequest
     */
    select?: LeaveRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeaveRequest
     */
    omit?: LeaveRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaveRequestInclude<ExtArgs> | null
    /**
     * Filter which LeaveRequest to delete.
     */
    where: LeaveRequestWhereUniqueInput
  }

  /**
   * LeaveRequest deleteMany
   */
  export type LeaveRequestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LeaveRequests to delete
     */
    where?: LeaveRequestWhereInput
    /**
     * Limit how many LeaveRequests to delete.
     */
    limit?: number
  }

  /**
   * LeaveRequest.approver
   */
  export type LeaveRequest$approverArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    where?: EmployeeWhereInput
  }

  /**
   * LeaveRequest without action
   */
  export type LeaveRequestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaveRequest
     */
    select?: LeaveRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeaveRequest
     */
    omit?: LeaveRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaveRequestInclude<ExtArgs> | null
  }


  /**
   * Model PettyCashRequest
   */

  export type AggregatePettyCashRequest = {
    _count: PettyCashRequestCountAggregateOutputType | null
    _avg: PettyCashRequestAvgAggregateOutputType | null
    _sum: PettyCashRequestSumAggregateOutputType | null
    _min: PettyCashRequestMinAggregateOutputType | null
    _max: PettyCashRequestMaxAggregateOutputType | null
  }

  export type PettyCashRequestAvgAggregateOutputType = {
    amount: number | null
  }

  export type PettyCashRequestSumAggregateOutputType = {
    amount: number | null
  }

  export type PettyCashRequestMinAggregateOutputType = {
    pet_id: string | null
    org_id: string | null
    emp_id: string | null
    amount: number | null
    currency: string | null
    reason: string | null
    request_date: Date | null
    request_type: string | null
    attachments: string | null
    approved_date: Date | null
    approved_by: string | null
    status: string | null
    created_at: Date | null
    update_at: Date | null
  }

  export type PettyCashRequestMaxAggregateOutputType = {
    pet_id: string | null
    org_id: string | null
    emp_id: string | null
    amount: number | null
    currency: string | null
    reason: string | null
    request_date: Date | null
    request_type: string | null
    attachments: string | null
    approved_date: Date | null
    approved_by: string | null
    status: string | null
    created_at: Date | null
    update_at: Date | null
  }

  export type PettyCashRequestCountAggregateOutputType = {
    pet_id: number
    org_id: number
    emp_id: number
    amount: number
    currency: number
    reason: number
    request_date: number
    request_type: number
    attachments: number
    approved_date: number
    approved_by: number
    status: number
    created_at: number
    update_at: number
    _all: number
  }


  export type PettyCashRequestAvgAggregateInputType = {
    amount?: true
  }

  export type PettyCashRequestSumAggregateInputType = {
    amount?: true
  }

  export type PettyCashRequestMinAggregateInputType = {
    pet_id?: true
    org_id?: true
    emp_id?: true
    amount?: true
    currency?: true
    reason?: true
    request_date?: true
    request_type?: true
    attachments?: true
    approved_date?: true
    approved_by?: true
    status?: true
    created_at?: true
    update_at?: true
  }

  export type PettyCashRequestMaxAggregateInputType = {
    pet_id?: true
    org_id?: true
    emp_id?: true
    amount?: true
    currency?: true
    reason?: true
    request_date?: true
    request_type?: true
    attachments?: true
    approved_date?: true
    approved_by?: true
    status?: true
    created_at?: true
    update_at?: true
  }

  export type PettyCashRequestCountAggregateInputType = {
    pet_id?: true
    org_id?: true
    emp_id?: true
    amount?: true
    currency?: true
    reason?: true
    request_date?: true
    request_type?: true
    attachments?: true
    approved_date?: true
    approved_by?: true
    status?: true
    created_at?: true
    update_at?: true
    _all?: true
  }

  export type PettyCashRequestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PettyCashRequest to aggregate.
     */
    where?: PettyCashRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PettyCashRequests to fetch.
     */
    orderBy?: PettyCashRequestOrderByWithRelationInput | PettyCashRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PettyCashRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PettyCashRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PettyCashRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PettyCashRequests
    **/
    _count?: true | PettyCashRequestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PettyCashRequestAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PettyCashRequestSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PettyCashRequestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PettyCashRequestMaxAggregateInputType
  }

  export type GetPettyCashRequestAggregateType<T extends PettyCashRequestAggregateArgs> = {
        [P in keyof T & keyof AggregatePettyCashRequest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePettyCashRequest[P]>
      : GetScalarType<T[P], AggregatePettyCashRequest[P]>
  }




  export type PettyCashRequestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PettyCashRequestWhereInput
    orderBy?: PettyCashRequestOrderByWithAggregationInput | PettyCashRequestOrderByWithAggregationInput[]
    by: PettyCashRequestScalarFieldEnum[] | PettyCashRequestScalarFieldEnum
    having?: PettyCashRequestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PettyCashRequestCountAggregateInputType | true
    _avg?: PettyCashRequestAvgAggregateInputType
    _sum?: PettyCashRequestSumAggregateInputType
    _min?: PettyCashRequestMinAggregateInputType
    _max?: PettyCashRequestMaxAggregateInputType
  }

  export type PettyCashRequestGroupByOutputType = {
    pet_id: string
    org_id: string
    emp_id: string
    amount: number
    currency: string
    reason: string | null
    request_date: Date
    request_type: string
    attachments: string | null
    approved_date: Date | null
    approved_by: string | null
    status: string
    created_at: Date
    update_at: Date
    _count: PettyCashRequestCountAggregateOutputType | null
    _avg: PettyCashRequestAvgAggregateOutputType | null
    _sum: PettyCashRequestSumAggregateOutputType | null
    _min: PettyCashRequestMinAggregateOutputType | null
    _max: PettyCashRequestMaxAggregateOutputType | null
  }

  type GetPettyCashRequestGroupByPayload<T extends PettyCashRequestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PettyCashRequestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PettyCashRequestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PettyCashRequestGroupByOutputType[P]>
            : GetScalarType<T[P], PettyCashRequestGroupByOutputType[P]>
        }
      >
    >


  export type PettyCashRequestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    pet_id?: boolean
    org_id?: boolean
    emp_id?: boolean
    amount?: boolean
    currency?: boolean
    reason?: boolean
    request_date?: boolean
    request_type?: boolean
    attachments?: boolean
    approved_date?: boolean
    approved_by?: boolean
    status?: boolean
    created_at?: boolean
    update_at?: boolean
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
    approver?: boolean | PettyCashRequest$approverArgs<ExtArgs>
  }, ExtArgs["result"]["pettyCashRequest"]>

  export type PettyCashRequestSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    pet_id?: boolean
    org_id?: boolean
    emp_id?: boolean
    amount?: boolean
    currency?: boolean
    reason?: boolean
    request_date?: boolean
    request_type?: boolean
    attachments?: boolean
    approved_date?: boolean
    approved_by?: boolean
    status?: boolean
    created_at?: boolean
    update_at?: boolean
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
    approver?: boolean | PettyCashRequest$approverArgs<ExtArgs>
  }, ExtArgs["result"]["pettyCashRequest"]>

  export type PettyCashRequestSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    pet_id?: boolean
    org_id?: boolean
    emp_id?: boolean
    amount?: boolean
    currency?: boolean
    reason?: boolean
    request_date?: boolean
    request_type?: boolean
    attachments?: boolean
    approved_date?: boolean
    approved_by?: boolean
    status?: boolean
    created_at?: boolean
    update_at?: boolean
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
    approver?: boolean | PettyCashRequest$approverArgs<ExtArgs>
  }, ExtArgs["result"]["pettyCashRequest"]>

  export type PettyCashRequestSelectScalar = {
    pet_id?: boolean
    org_id?: boolean
    emp_id?: boolean
    amount?: boolean
    currency?: boolean
    reason?: boolean
    request_date?: boolean
    request_type?: boolean
    attachments?: boolean
    approved_date?: boolean
    approved_by?: boolean
    status?: boolean
    created_at?: boolean
    update_at?: boolean
  }

  export type PettyCashRequestOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"pet_id" | "org_id" | "emp_id" | "amount" | "currency" | "reason" | "request_date" | "request_type" | "attachments" | "approved_date" | "approved_by" | "status" | "created_at" | "update_at", ExtArgs["result"]["pettyCashRequest"]>
  export type PettyCashRequestInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
    approver?: boolean | PettyCashRequest$approverArgs<ExtArgs>
  }
  export type PettyCashRequestIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
    approver?: boolean | PettyCashRequest$approverArgs<ExtArgs>
  }
  export type PettyCashRequestIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
    approver?: boolean | PettyCashRequest$approverArgs<ExtArgs>
  }

  export type $PettyCashRequestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PettyCashRequest"
    objects: {
      organization: Prisma.$OrganizationPayload<ExtArgs>
      employee: Prisma.$EmployeePayload<ExtArgs>
      approver: Prisma.$EmployeePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      pet_id: string
      org_id: string
      emp_id: string
      amount: number
      currency: string
      reason: string | null
      request_date: Date
      request_type: string
      attachments: string | null
      approved_date: Date | null
      approved_by: string | null
      status: string
      created_at: Date
      update_at: Date
    }, ExtArgs["result"]["pettyCashRequest"]>
    composites: {}
  }

  type PettyCashRequestGetPayload<S extends boolean | null | undefined | PettyCashRequestDefaultArgs> = $Result.GetResult<Prisma.$PettyCashRequestPayload, S>

  type PettyCashRequestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PettyCashRequestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PettyCashRequestCountAggregateInputType | true
    }

  export interface PettyCashRequestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PettyCashRequest'], meta: { name: 'PettyCashRequest' } }
    /**
     * Find zero or one PettyCashRequest that matches the filter.
     * @param {PettyCashRequestFindUniqueArgs} args - Arguments to find a PettyCashRequest
     * @example
     * // Get one PettyCashRequest
     * const pettyCashRequest = await prisma.pettyCashRequest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PettyCashRequestFindUniqueArgs>(args: SelectSubset<T, PettyCashRequestFindUniqueArgs<ExtArgs>>): Prisma__PettyCashRequestClient<$Result.GetResult<Prisma.$PettyCashRequestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PettyCashRequest that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PettyCashRequestFindUniqueOrThrowArgs} args - Arguments to find a PettyCashRequest
     * @example
     * // Get one PettyCashRequest
     * const pettyCashRequest = await prisma.pettyCashRequest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PettyCashRequestFindUniqueOrThrowArgs>(args: SelectSubset<T, PettyCashRequestFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PettyCashRequestClient<$Result.GetResult<Prisma.$PettyCashRequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PettyCashRequest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PettyCashRequestFindFirstArgs} args - Arguments to find a PettyCashRequest
     * @example
     * // Get one PettyCashRequest
     * const pettyCashRequest = await prisma.pettyCashRequest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PettyCashRequestFindFirstArgs>(args?: SelectSubset<T, PettyCashRequestFindFirstArgs<ExtArgs>>): Prisma__PettyCashRequestClient<$Result.GetResult<Prisma.$PettyCashRequestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PettyCashRequest that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PettyCashRequestFindFirstOrThrowArgs} args - Arguments to find a PettyCashRequest
     * @example
     * // Get one PettyCashRequest
     * const pettyCashRequest = await prisma.pettyCashRequest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PettyCashRequestFindFirstOrThrowArgs>(args?: SelectSubset<T, PettyCashRequestFindFirstOrThrowArgs<ExtArgs>>): Prisma__PettyCashRequestClient<$Result.GetResult<Prisma.$PettyCashRequestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PettyCashRequests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PettyCashRequestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PettyCashRequests
     * const pettyCashRequests = await prisma.pettyCashRequest.findMany()
     * 
     * // Get first 10 PettyCashRequests
     * const pettyCashRequests = await prisma.pettyCashRequest.findMany({ take: 10 })
     * 
     * // Only select the `pet_id`
     * const pettyCashRequestWithPet_idOnly = await prisma.pettyCashRequest.findMany({ select: { pet_id: true } })
     * 
     */
    findMany<T extends PettyCashRequestFindManyArgs>(args?: SelectSubset<T, PettyCashRequestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PettyCashRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PettyCashRequest.
     * @param {PettyCashRequestCreateArgs} args - Arguments to create a PettyCashRequest.
     * @example
     * // Create one PettyCashRequest
     * const PettyCashRequest = await prisma.pettyCashRequest.create({
     *   data: {
     *     // ... data to create a PettyCashRequest
     *   }
     * })
     * 
     */
    create<T extends PettyCashRequestCreateArgs>(args: SelectSubset<T, PettyCashRequestCreateArgs<ExtArgs>>): Prisma__PettyCashRequestClient<$Result.GetResult<Prisma.$PettyCashRequestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PettyCashRequests.
     * @param {PettyCashRequestCreateManyArgs} args - Arguments to create many PettyCashRequests.
     * @example
     * // Create many PettyCashRequests
     * const pettyCashRequest = await prisma.pettyCashRequest.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PettyCashRequestCreateManyArgs>(args?: SelectSubset<T, PettyCashRequestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PettyCashRequests and returns the data saved in the database.
     * @param {PettyCashRequestCreateManyAndReturnArgs} args - Arguments to create many PettyCashRequests.
     * @example
     * // Create many PettyCashRequests
     * const pettyCashRequest = await prisma.pettyCashRequest.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PettyCashRequests and only return the `pet_id`
     * const pettyCashRequestWithPet_idOnly = await prisma.pettyCashRequest.createManyAndReturn({
     *   select: { pet_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PettyCashRequestCreateManyAndReturnArgs>(args?: SelectSubset<T, PettyCashRequestCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PettyCashRequestPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PettyCashRequest.
     * @param {PettyCashRequestDeleteArgs} args - Arguments to delete one PettyCashRequest.
     * @example
     * // Delete one PettyCashRequest
     * const PettyCashRequest = await prisma.pettyCashRequest.delete({
     *   where: {
     *     // ... filter to delete one PettyCashRequest
     *   }
     * })
     * 
     */
    delete<T extends PettyCashRequestDeleteArgs>(args: SelectSubset<T, PettyCashRequestDeleteArgs<ExtArgs>>): Prisma__PettyCashRequestClient<$Result.GetResult<Prisma.$PettyCashRequestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PettyCashRequest.
     * @param {PettyCashRequestUpdateArgs} args - Arguments to update one PettyCashRequest.
     * @example
     * // Update one PettyCashRequest
     * const pettyCashRequest = await prisma.pettyCashRequest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PettyCashRequestUpdateArgs>(args: SelectSubset<T, PettyCashRequestUpdateArgs<ExtArgs>>): Prisma__PettyCashRequestClient<$Result.GetResult<Prisma.$PettyCashRequestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PettyCashRequests.
     * @param {PettyCashRequestDeleteManyArgs} args - Arguments to filter PettyCashRequests to delete.
     * @example
     * // Delete a few PettyCashRequests
     * const { count } = await prisma.pettyCashRequest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PettyCashRequestDeleteManyArgs>(args?: SelectSubset<T, PettyCashRequestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PettyCashRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PettyCashRequestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PettyCashRequests
     * const pettyCashRequest = await prisma.pettyCashRequest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PettyCashRequestUpdateManyArgs>(args: SelectSubset<T, PettyCashRequestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PettyCashRequests and returns the data updated in the database.
     * @param {PettyCashRequestUpdateManyAndReturnArgs} args - Arguments to update many PettyCashRequests.
     * @example
     * // Update many PettyCashRequests
     * const pettyCashRequest = await prisma.pettyCashRequest.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PettyCashRequests and only return the `pet_id`
     * const pettyCashRequestWithPet_idOnly = await prisma.pettyCashRequest.updateManyAndReturn({
     *   select: { pet_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PettyCashRequestUpdateManyAndReturnArgs>(args: SelectSubset<T, PettyCashRequestUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PettyCashRequestPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PettyCashRequest.
     * @param {PettyCashRequestUpsertArgs} args - Arguments to update or create a PettyCashRequest.
     * @example
     * // Update or create a PettyCashRequest
     * const pettyCashRequest = await prisma.pettyCashRequest.upsert({
     *   create: {
     *     // ... data to create a PettyCashRequest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PettyCashRequest we want to update
     *   }
     * })
     */
    upsert<T extends PettyCashRequestUpsertArgs>(args: SelectSubset<T, PettyCashRequestUpsertArgs<ExtArgs>>): Prisma__PettyCashRequestClient<$Result.GetResult<Prisma.$PettyCashRequestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PettyCashRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PettyCashRequestCountArgs} args - Arguments to filter PettyCashRequests to count.
     * @example
     * // Count the number of PettyCashRequests
     * const count = await prisma.pettyCashRequest.count({
     *   where: {
     *     // ... the filter for the PettyCashRequests we want to count
     *   }
     * })
    **/
    count<T extends PettyCashRequestCountArgs>(
      args?: Subset<T, PettyCashRequestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PettyCashRequestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PettyCashRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PettyCashRequestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PettyCashRequestAggregateArgs>(args: Subset<T, PettyCashRequestAggregateArgs>): Prisma.PrismaPromise<GetPettyCashRequestAggregateType<T>>

    /**
     * Group by PettyCashRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PettyCashRequestGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PettyCashRequestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PettyCashRequestGroupByArgs['orderBy'] }
        : { orderBy?: PettyCashRequestGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PettyCashRequestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPettyCashRequestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PettyCashRequest model
   */
  readonly fields: PettyCashRequestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PettyCashRequest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PettyCashRequestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    organization<T extends OrganizationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrganizationDefaultArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    employee<T extends EmployeeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EmployeeDefaultArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    approver<T extends PettyCashRequest$approverArgs<ExtArgs> = {}>(args?: Subset<T, PettyCashRequest$approverArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PettyCashRequest model
   */
  interface PettyCashRequestFieldRefs {
    readonly pet_id: FieldRef<"PettyCashRequest", 'String'>
    readonly org_id: FieldRef<"PettyCashRequest", 'String'>
    readonly emp_id: FieldRef<"PettyCashRequest", 'String'>
    readonly amount: FieldRef<"PettyCashRequest", 'Float'>
    readonly currency: FieldRef<"PettyCashRequest", 'String'>
    readonly reason: FieldRef<"PettyCashRequest", 'String'>
    readonly request_date: FieldRef<"PettyCashRequest", 'DateTime'>
    readonly request_type: FieldRef<"PettyCashRequest", 'String'>
    readonly attachments: FieldRef<"PettyCashRequest", 'String'>
    readonly approved_date: FieldRef<"PettyCashRequest", 'DateTime'>
    readonly approved_by: FieldRef<"PettyCashRequest", 'String'>
    readonly status: FieldRef<"PettyCashRequest", 'String'>
    readonly created_at: FieldRef<"PettyCashRequest", 'DateTime'>
    readonly update_at: FieldRef<"PettyCashRequest", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PettyCashRequest findUnique
   */
  export type PettyCashRequestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PettyCashRequest
     */
    select?: PettyCashRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PettyCashRequest
     */
    omit?: PettyCashRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PettyCashRequestInclude<ExtArgs> | null
    /**
     * Filter, which PettyCashRequest to fetch.
     */
    where: PettyCashRequestWhereUniqueInput
  }

  /**
   * PettyCashRequest findUniqueOrThrow
   */
  export type PettyCashRequestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PettyCashRequest
     */
    select?: PettyCashRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PettyCashRequest
     */
    omit?: PettyCashRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PettyCashRequestInclude<ExtArgs> | null
    /**
     * Filter, which PettyCashRequest to fetch.
     */
    where: PettyCashRequestWhereUniqueInput
  }

  /**
   * PettyCashRequest findFirst
   */
  export type PettyCashRequestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PettyCashRequest
     */
    select?: PettyCashRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PettyCashRequest
     */
    omit?: PettyCashRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PettyCashRequestInclude<ExtArgs> | null
    /**
     * Filter, which PettyCashRequest to fetch.
     */
    where?: PettyCashRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PettyCashRequests to fetch.
     */
    orderBy?: PettyCashRequestOrderByWithRelationInput | PettyCashRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PettyCashRequests.
     */
    cursor?: PettyCashRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PettyCashRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PettyCashRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PettyCashRequests.
     */
    distinct?: PettyCashRequestScalarFieldEnum | PettyCashRequestScalarFieldEnum[]
  }

  /**
   * PettyCashRequest findFirstOrThrow
   */
  export type PettyCashRequestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PettyCashRequest
     */
    select?: PettyCashRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PettyCashRequest
     */
    omit?: PettyCashRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PettyCashRequestInclude<ExtArgs> | null
    /**
     * Filter, which PettyCashRequest to fetch.
     */
    where?: PettyCashRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PettyCashRequests to fetch.
     */
    orderBy?: PettyCashRequestOrderByWithRelationInput | PettyCashRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PettyCashRequests.
     */
    cursor?: PettyCashRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PettyCashRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PettyCashRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PettyCashRequests.
     */
    distinct?: PettyCashRequestScalarFieldEnum | PettyCashRequestScalarFieldEnum[]
  }

  /**
   * PettyCashRequest findMany
   */
  export type PettyCashRequestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PettyCashRequest
     */
    select?: PettyCashRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PettyCashRequest
     */
    omit?: PettyCashRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PettyCashRequestInclude<ExtArgs> | null
    /**
     * Filter, which PettyCashRequests to fetch.
     */
    where?: PettyCashRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PettyCashRequests to fetch.
     */
    orderBy?: PettyCashRequestOrderByWithRelationInput | PettyCashRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PettyCashRequests.
     */
    cursor?: PettyCashRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PettyCashRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PettyCashRequests.
     */
    skip?: number
    distinct?: PettyCashRequestScalarFieldEnum | PettyCashRequestScalarFieldEnum[]
  }

  /**
   * PettyCashRequest create
   */
  export type PettyCashRequestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PettyCashRequest
     */
    select?: PettyCashRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PettyCashRequest
     */
    omit?: PettyCashRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PettyCashRequestInclude<ExtArgs> | null
    /**
     * The data needed to create a PettyCashRequest.
     */
    data: XOR<PettyCashRequestCreateInput, PettyCashRequestUncheckedCreateInput>
  }

  /**
   * PettyCashRequest createMany
   */
  export type PettyCashRequestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PettyCashRequests.
     */
    data: PettyCashRequestCreateManyInput | PettyCashRequestCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PettyCashRequest createManyAndReturn
   */
  export type PettyCashRequestCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PettyCashRequest
     */
    select?: PettyCashRequestSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PettyCashRequest
     */
    omit?: PettyCashRequestOmit<ExtArgs> | null
    /**
     * The data used to create many PettyCashRequests.
     */
    data: PettyCashRequestCreateManyInput | PettyCashRequestCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PettyCashRequestIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PettyCashRequest update
   */
  export type PettyCashRequestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PettyCashRequest
     */
    select?: PettyCashRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PettyCashRequest
     */
    omit?: PettyCashRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PettyCashRequestInclude<ExtArgs> | null
    /**
     * The data needed to update a PettyCashRequest.
     */
    data: XOR<PettyCashRequestUpdateInput, PettyCashRequestUncheckedUpdateInput>
    /**
     * Choose, which PettyCashRequest to update.
     */
    where: PettyCashRequestWhereUniqueInput
  }

  /**
   * PettyCashRequest updateMany
   */
  export type PettyCashRequestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PettyCashRequests.
     */
    data: XOR<PettyCashRequestUpdateManyMutationInput, PettyCashRequestUncheckedUpdateManyInput>
    /**
     * Filter which PettyCashRequests to update
     */
    where?: PettyCashRequestWhereInput
    /**
     * Limit how many PettyCashRequests to update.
     */
    limit?: number
  }

  /**
   * PettyCashRequest updateManyAndReturn
   */
  export type PettyCashRequestUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PettyCashRequest
     */
    select?: PettyCashRequestSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PettyCashRequest
     */
    omit?: PettyCashRequestOmit<ExtArgs> | null
    /**
     * The data used to update PettyCashRequests.
     */
    data: XOR<PettyCashRequestUpdateManyMutationInput, PettyCashRequestUncheckedUpdateManyInput>
    /**
     * Filter which PettyCashRequests to update
     */
    where?: PettyCashRequestWhereInput
    /**
     * Limit how many PettyCashRequests to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PettyCashRequestIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PettyCashRequest upsert
   */
  export type PettyCashRequestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PettyCashRequest
     */
    select?: PettyCashRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PettyCashRequest
     */
    omit?: PettyCashRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PettyCashRequestInclude<ExtArgs> | null
    /**
     * The filter to search for the PettyCashRequest to update in case it exists.
     */
    where: PettyCashRequestWhereUniqueInput
    /**
     * In case the PettyCashRequest found by the `where` argument doesn't exist, create a new PettyCashRequest with this data.
     */
    create: XOR<PettyCashRequestCreateInput, PettyCashRequestUncheckedCreateInput>
    /**
     * In case the PettyCashRequest was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PettyCashRequestUpdateInput, PettyCashRequestUncheckedUpdateInput>
  }

  /**
   * PettyCashRequest delete
   */
  export type PettyCashRequestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PettyCashRequest
     */
    select?: PettyCashRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PettyCashRequest
     */
    omit?: PettyCashRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PettyCashRequestInclude<ExtArgs> | null
    /**
     * Filter which PettyCashRequest to delete.
     */
    where: PettyCashRequestWhereUniqueInput
  }

  /**
   * PettyCashRequest deleteMany
   */
  export type PettyCashRequestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PettyCashRequests to delete
     */
    where?: PettyCashRequestWhereInput
    /**
     * Limit how many PettyCashRequests to delete.
     */
    limit?: number
  }

  /**
   * PettyCashRequest.approver
   */
  export type PettyCashRequest$approverArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    where?: EmployeeWhereInput
  }

  /**
   * PettyCashRequest without action
   */
  export type PettyCashRequestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PettyCashRequest
     */
    select?: PettyCashRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PettyCashRequest
     */
    omit?: PettyCashRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PettyCashRequestInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const SubscriptionScalarFieldEnum: {
    sub_id: 'sub_id',
    org_id: 'org_id',
    plan_id: 'plan_id',
    start_date: 'start_date',
    end_date: 'end_date',
    renewal_date: 'renewal_date',
    billing_cycle: 'billing_cycle',
    status: 'status',
    auto_renew: 'auto_renew',
    trial_end_date: 'trial_end_date',
    cancelled_at: 'cancelled_at',
    payment_method: 'payment_method',
    created_at: 'created_at',
    update_at: 'update_at'
  };

  export type SubscriptionScalarFieldEnum = (typeof SubscriptionScalarFieldEnum)[keyof typeof SubscriptionScalarFieldEnum]


  export const DepartmentScalarFieldEnum: {
    dep_id: 'dep_id',
    org_id: 'org_id',
    name: 'name',
    head_id: 'head_id',
    parent_department_id: 'parent_department_id',
    created_at: 'created_at',
    update_at: 'update_at'
  };

  export type DepartmentScalarFieldEnum = (typeof DepartmentScalarFieldEnum)[keyof typeof DepartmentScalarFieldEnum]


  export const EmployeeScalarFieldEnum: {
    emp_id: 'emp_id',
    org_id: 'org_id',
    dep_id: 'dep_id',
    employee_number: 'employee_number',
    first_name: 'first_name',
    last_name: 'last_name',
    email: 'email',
    password: 'password',
    phone: 'phone',
    profile_photo_url: 'profile_photo_url',
    designation: 'designation',
    employment_type: 'employment_type',
    join_date: 'join_date',
    resign_date: 'resign_date',
    status: 'status',
    created_at: 'created_at',
    update_at: 'update_at'
  };

  export type EmployeeScalarFieldEnum = (typeof EmployeeScalarFieldEnum)[keyof typeof EmployeeScalarFieldEnum]


  export const OrganizationScalarFieldEnum: {
    org_id: 'org_id',
    sub_id: 'sub_id',
    name: 'name',
    industry: 'industry',
    registration_no: 'registration_no',
    address: 'address',
    email: 'email',
    password: 'password',
    phone: 'phone',
    logo_url: 'logo_url',
    created_at: 'created_at',
    update_at: 'update_at'
  };

  export type OrganizationScalarFieldEnum = (typeof OrganizationScalarFieldEnum)[keyof typeof OrganizationScalarFieldEnum]


  export const PlanScalarFieldEnum: {
    plan_id: 'plan_id',
    name: 'name',
    description: 'description',
    price_monthly: 'price_monthly',
    price_annual: 'price_annual',
    currency: 'currency',
    max_employees: 'max_employees',
    is_active: 'is_active',
    created_at: 'created_at',
    update_at: 'update_at'
  };

  export type PlanScalarFieldEnum = (typeof PlanScalarFieldEnum)[keyof typeof PlanScalarFieldEnum]


  export const FeatureScalarFieldEnum: {
    fet_id: 'fet_id',
    name: 'name',
    created_at: 'created_at',
    update_at: 'update_at'
  };

  export type FeatureScalarFieldEnum = (typeof FeatureScalarFieldEnum)[keyof typeof FeatureScalarFieldEnum]


  export const InvoiceScalarFieldEnum: {
    invoice_id: 'invoice_id',
    org_id: 'org_id',
    sub_id: 'sub_id',
    amount: 'amount',
    currency: 'currency',
    renewal_date: 'renewal_date',
    issue_date: 'issue_date',
    due_date: 'due_date',
    paid_date: 'paid_date',
    receipt: 'receipt',
    status: 'status',
    cancelled_at: 'cancelled_at',
    payment_method: 'payment_method',
    created_at: 'created_at',
    update_at: 'update_at'
  };

  export type InvoiceScalarFieldEnum = (typeof InvoiceScalarFieldEnum)[keyof typeof InvoiceScalarFieldEnum]


  export const AttendanceScalarFieldEnum: {
    att_id: 'att_id',
    org_id: 'org_id',
    emp_id: 'emp_id',
    date: 'date',
    check_in_time: 'check_in_time',
    check_in_location: 'check_in_location',
    check_out_time: 'check_out_time',
    check_out_location: 'check_out_location',
    work_hours: 'work_hours',
    status: 'status',
    created_at: 'created_at',
    update_at: 'update_at'
  };

  export type AttendanceScalarFieldEnum = (typeof AttendanceScalarFieldEnum)[keyof typeof AttendanceScalarFieldEnum]


  export const LeaveRequestScalarFieldEnum: {
    leave_id: 'leave_id',
    org_id: 'org_id',
    emp_id: 'emp_id',
    leave_type: 'leave_type',
    start_date: 'start_date',
    end_date: 'end_date',
    reason: 'reason',
    attachments: 'attachments',
    approved_by: 'approved_by',
    approved_date: 'approved_date',
    status: 'status',
    created_at: 'created_at',
    update_at: 'update_at'
  };

  export type LeaveRequestScalarFieldEnum = (typeof LeaveRequestScalarFieldEnum)[keyof typeof LeaveRequestScalarFieldEnum]


  export const PettyCashRequestScalarFieldEnum: {
    pet_id: 'pet_id',
    org_id: 'org_id',
    emp_id: 'emp_id',
    amount: 'amount',
    currency: 'currency',
    reason: 'reason',
    request_date: 'request_date',
    request_type: 'request_type',
    attachments: 'attachments',
    approved_date: 'approved_date',
    approved_by: 'approved_by',
    status: 'status',
    created_at: 'created_at',
    update_at: 'update_at'
  };

  export type PettyCashRequestScalarFieldEnum = (typeof PettyCashRequestScalarFieldEnum)[keyof typeof PettyCashRequestScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type SubscriptionWhereInput = {
    AND?: SubscriptionWhereInput | SubscriptionWhereInput[]
    OR?: SubscriptionWhereInput[]
    NOT?: SubscriptionWhereInput | SubscriptionWhereInput[]
    sub_id?: UuidFilter<"Subscription"> | string
    org_id?: UuidNullableFilter<"Subscription"> | string | null
    plan_id?: UuidNullableFilter<"Subscription"> | string | null
    start_date?: DateTimeFilter<"Subscription"> | Date | string
    end_date?: DateTimeFilter<"Subscription"> | Date | string
    renewal_date?: DateTimeNullableFilter<"Subscription"> | Date | string | null
    billing_cycle?: StringFilter<"Subscription"> | string
    status?: StringFilter<"Subscription"> | string
    auto_renew?: BoolFilter<"Subscription"> | boolean
    trial_end_date?: DateTimeNullableFilter<"Subscription"> | Date | string | null
    cancelled_at?: DateTimeNullableFilter<"Subscription"> | Date | string | null
    payment_method?: StringNullableFilter<"Subscription"> | string | null
    created_at?: DateTimeFilter<"Subscription"> | Date | string
    update_at?: DateTimeFilter<"Subscription"> | Date | string
    organization?: XOR<OrganizationNullableScalarRelationFilter, OrganizationWhereInput> | null
    plan?: XOR<PlanNullableScalarRelationFilter, PlanWhereInput> | null
    invoices?: InvoiceListRelationFilter
  }

  export type SubscriptionOrderByWithRelationInput = {
    sub_id?: SortOrder
    org_id?: SortOrderInput | SortOrder
    plan_id?: SortOrderInput | SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    renewal_date?: SortOrderInput | SortOrder
    billing_cycle?: SortOrder
    status?: SortOrder
    auto_renew?: SortOrder
    trial_end_date?: SortOrderInput | SortOrder
    cancelled_at?: SortOrderInput | SortOrder
    payment_method?: SortOrderInput | SortOrder
    created_at?: SortOrder
    update_at?: SortOrder
    organization?: OrganizationOrderByWithRelationInput
    plan?: PlanOrderByWithRelationInput
    invoices?: InvoiceOrderByRelationAggregateInput
  }

  export type SubscriptionWhereUniqueInput = Prisma.AtLeast<{
    sub_id?: string
    org_id?: string
    AND?: SubscriptionWhereInput | SubscriptionWhereInput[]
    OR?: SubscriptionWhereInput[]
    NOT?: SubscriptionWhereInput | SubscriptionWhereInput[]
    plan_id?: UuidNullableFilter<"Subscription"> | string | null
    start_date?: DateTimeFilter<"Subscription"> | Date | string
    end_date?: DateTimeFilter<"Subscription"> | Date | string
    renewal_date?: DateTimeNullableFilter<"Subscription"> | Date | string | null
    billing_cycle?: StringFilter<"Subscription"> | string
    status?: StringFilter<"Subscription"> | string
    auto_renew?: BoolFilter<"Subscription"> | boolean
    trial_end_date?: DateTimeNullableFilter<"Subscription"> | Date | string | null
    cancelled_at?: DateTimeNullableFilter<"Subscription"> | Date | string | null
    payment_method?: StringNullableFilter<"Subscription"> | string | null
    created_at?: DateTimeFilter<"Subscription"> | Date | string
    update_at?: DateTimeFilter<"Subscription"> | Date | string
    organization?: XOR<OrganizationNullableScalarRelationFilter, OrganizationWhereInput> | null
    plan?: XOR<PlanNullableScalarRelationFilter, PlanWhereInput> | null
    invoices?: InvoiceListRelationFilter
  }, "sub_id" | "org_id">

  export type SubscriptionOrderByWithAggregationInput = {
    sub_id?: SortOrder
    org_id?: SortOrderInput | SortOrder
    plan_id?: SortOrderInput | SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    renewal_date?: SortOrderInput | SortOrder
    billing_cycle?: SortOrder
    status?: SortOrder
    auto_renew?: SortOrder
    trial_end_date?: SortOrderInput | SortOrder
    cancelled_at?: SortOrderInput | SortOrder
    payment_method?: SortOrderInput | SortOrder
    created_at?: SortOrder
    update_at?: SortOrder
    _count?: SubscriptionCountOrderByAggregateInput
    _max?: SubscriptionMaxOrderByAggregateInput
    _min?: SubscriptionMinOrderByAggregateInput
  }

  export type SubscriptionScalarWhereWithAggregatesInput = {
    AND?: SubscriptionScalarWhereWithAggregatesInput | SubscriptionScalarWhereWithAggregatesInput[]
    OR?: SubscriptionScalarWhereWithAggregatesInput[]
    NOT?: SubscriptionScalarWhereWithAggregatesInput | SubscriptionScalarWhereWithAggregatesInput[]
    sub_id?: UuidWithAggregatesFilter<"Subscription"> | string
    org_id?: UuidNullableWithAggregatesFilter<"Subscription"> | string | null
    plan_id?: UuidNullableWithAggregatesFilter<"Subscription"> | string | null
    start_date?: DateTimeWithAggregatesFilter<"Subscription"> | Date | string
    end_date?: DateTimeWithAggregatesFilter<"Subscription"> | Date | string
    renewal_date?: DateTimeNullableWithAggregatesFilter<"Subscription"> | Date | string | null
    billing_cycle?: StringWithAggregatesFilter<"Subscription"> | string
    status?: StringWithAggregatesFilter<"Subscription"> | string
    auto_renew?: BoolWithAggregatesFilter<"Subscription"> | boolean
    trial_end_date?: DateTimeNullableWithAggregatesFilter<"Subscription"> | Date | string | null
    cancelled_at?: DateTimeNullableWithAggregatesFilter<"Subscription"> | Date | string | null
    payment_method?: StringNullableWithAggregatesFilter<"Subscription"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"Subscription"> | Date | string
    update_at?: DateTimeWithAggregatesFilter<"Subscription"> | Date | string
  }

  export type DepartmentWhereInput = {
    AND?: DepartmentWhereInput | DepartmentWhereInput[]
    OR?: DepartmentWhereInput[]
    NOT?: DepartmentWhereInput | DepartmentWhereInput[]
    dep_id?: UuidFilter<"Department"> | string
    org_id?: UuidFilter<"Department"> | string
    name?: StringFilter<"Department"> | string
    head_id?: UuidNullableFilter<"Department"> | string | null
    parent_department_id?: UuidNullableFilter<"Department"> | string | null
    created_at?: DateTimeFilter<"Department"> | Date | string
    update_at?: DateTimeFilter<"Department"> | Date | string
    organization?: XOR<OrganizationScalarRelationFilter, OrganizationWhereInput>
    parent_department?: XOR<DepartmentNullableScalarRelationFilter, DepartmentWhereInput> | null
    sub_departments?: DepartmentListRelationFilter
    head?: XOR<EmployeeNullableScalarRelationFilter, EmployeeWhereInput> | null
    employees?: EmployeeListRelationFilter
  }

  export type DepartmentOrderByWithRelationInput = {
    dep_id?: SortOrder
    org_id?: SortOrder
    name?: SortOrder
    head_id?: SortOrderInput | SortOrder
    parent_department_id?: SortOrderInput | SortOrder
    created_at?: SortOrder
    update_at?: SortOrder
    organization?: OrganizationOrderByWithRelationInput
    parent_department?: DepartmentOrderByWithRelationInput
    sub_departments?: DepartmentOrderByRelationAggregateInput
    head?: EmployeeOrderByWithRelationInput
    employees?: EmployeeOrderByRelationAggregateInput
  }

  export type DepartmentWhereUniqueInput = Prisma.AtLeast<{
    dep_id?: string
    head_id?: string
    AND?: DepartmentWhereInput | DepartmentWhereInput[]
    OR?: DepartmentWhereInput[]
    NOT?: DepartmentWhereInput | DepartmentWhereInput[]
    org_id?: UuidFilter<"Department"> | string
    name?: StringFilter<"Department"> | string
    parent_department_id?: UuidNullableFilter<"Department"> | string | null
    created_at?: DateTimeFilter<"Department"> | Date | string
    update_at?: DateTimeFilter<"Department"> | Date | string
    organization?: XOR<OrganizationScalarRelationFilter, OrganizationWhereInput>
    parent_department?: XOR<DepartmentNullableScalarRelationFilter, DepartmentWhereInput> | null
    sub_departments?: DepartmentListRelationFilter
    head?: XOR<EmployeeNullableScalarRelationFilter, EmployeeWhereInput> | null
    employees?: EmployeeListRelationFilter
  }, "dep_id" | "head_id">

  export type DepartmentOrderByWithAggregationInput = {
    dep_id?: SortOrder
    org_id?: SortOrder
    name?: SortOrder
    head_id?: SortOrderInput | SortOrder
    parent_department_id?: SortOrderInput | SortOrder
    created_at?: SortOrder
    update_at?: SortOrder
    _count?: DepartmentCountOrderByAggregateInput
    _max?: DepartmentMaxOrderByAggregateInput
    _min?: DepartmentMinOrderByAggregateInput
  }

  export type DepartmentScalarWhereWithAggregatesInput = {
    AND?: DepartmentScalarWhereWithAggregatesInput | DepartmentScalarWhereWithAggregatesInput[]
    OR?: DepartmentScalarWhereWithAggregatesInput[]
    NOT?: DepartmentScalarWhereWithAggregatesInput | DepartmentScalarWhereWithAggregatesInput[]
    dep_id?: UuidWithAggregatesFilter<"Department"> | string
    org_id?: UuidWithAggregatesFilter<"Department"> | string
    name?: StringWithAggregatesFilter<"Department"> | string
    head_id?: UuidNullableWithAggregatesFilter<"Department"> | string | null
    parent_department_id?: UuidNullableWithAggregatesFilter<"Department"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"Department"> | Date | string
    update_at?: DateTimeWithAggregatesFilter<"Department"> | Date | string
  }

  export type EmployeeWhereInput = {
    AND?: EmployeeWhereInput | EmployeeWhereInput[]
    OR?: EmployeeWhereInput[]
    NOT?: EmployeeWhereInput | EmployeeWhereInput[]
    emp_id?: UuidFilter<"Employee"> | string
    org_id?: UuidFilter<"Employee"> | string
    dep_id?: UuidNullableFilter<"Employee"> | string | null
    employee_number?: StringFilter<"Employee"> | string
    first_name?: StringFilter<"Employee"> | string
    last_name?: StringFilter<"Employee"> | string
    email?: StringFilter<"Employee"> | string
    password?: StringFilter<"Employee"> | string
    phone?: StringNullableFilter<"Employee"> | string | null
    profile_photo_url?: StringNullableFilter<"Employee"> | string | null
    designation?: StringNullableFilter<"Employee"> | string | null
    employment_type?: StringFilter<"Employee"> | string
    join_date?: DateTimeNullableFilter<"Employee"> | Date | string | null
    resign_date?: DateTimeNullableFilter<"Employee"> | Date | string | null
    status?: StringFilter<"Employee"> | string
    created_at?: DateTimeFilter<"Employee"> | Date | string
    update_at?: DateTimeFilter<"Employee"> | Date | string
    organization?: XOR<OrganizationScalarRelationFilter, OrganizationWhereInput>
    department?: XOR<DepartmentNullableScalarRelationFilter, DepartmentWhereInput> | null
    headed_department?: XOR<DepartmentNullableScalarRelationFilter, DepartmentWhereInput> | null
    attendances?: AttendanceListRelationFilter
    leave_requests?: LeaveRequestListRelationFilter
    approved_leaves?: LeaveRequestListRelationFilter
    petty_cash_requests?: PettyCashRequestListRelationFilter
    approved_petty_cash?: PettyCashRequestListRelationFilter
  }

  export type EmployeeOrderByWithRelationInput = {
    emp_id?: SortOrder
    org_id?: SortOrder
    dep_id?: SortOrderInput | SortOrder
    employee_number?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone?: SortOrderInput | SortOrder
    profile_photo_url?: SortOrderInput | SortOrder
    designation?: SortOrderInput | SortOrder
    employment_type?: SortOrder
    join_date?: SortOrderInput | SortOrder
    resign_date?: SortOrderInput | SortOrder
    status?: SortOrder
    created_at?: SortOrder
    update_at?: SortOrder
    organization?: OrganizationOrderByWithRelationInput
    department?: DepartmentOrderByWithRelationInput
    headed_department?: DepartmentOrderByWithRelationInput
    attendances?: AttendanceOrderByRelationAggregateInput
    leave_requests?: LeaveRequestOrderByRelationAggregateInput
    approved_leaves?: LeaveRequestOrderByRelationAggregateInput
    petty_cash_requests?: PettyCashRequestOrderByRelationAggregateInput
    approved_petty_cash?: PettyCashRequestOrderByRelationAggregateInput
  }

  export type EmployeeWhereUniqueInput = Prisma.AtLeast<{
    emp_id?: string
    email?: string
    AND?: EmployeeWhereInput | EmployeeWhereInput[]
    OR?: EmployeeWhereInput[]
    NOT?: EmployeeWhereInput | EmployeeWhereInput[]
    org_id?: UuidFilter<"Employee"> | string
    dep_id?: UuidNullableFilter<"Employee"> | string | null
    employee_number?: StringFilter<"Employee"> | string
    first_name?: StringFilter<"Employee"> | string
    last_name?: StringFilter<"Employee"> | string
    password?: StringFilter<"Employee"> | string
    phone?: StringNullableFilter<"Employee"> | string | null
    profile_photo_url?: StringNullableFilter<"Employee"> | string | null
    designation?: StringNullableFilter<"Employee"> | string | null
    employment_type?: StringFilter<"Employee"> | string
    join_date?: DateTimeNullableFilter<"Employee"> | Date | string | null
    resign_date?: DateTimeNullableFilter<"Employee"> | Date | string | null
    status?: StringFilter<"Employee"> | string
    created_at?: DateTimeFilter<"Employee"> | Date | string
    update_at?: DateTimeFilter<"Employee"> | Date | string
    organization?: XOR<OrganizationScalarRelationFilter, OrganizationWhereInput>
    department?: XOR<DepartmentNullableScalarRelationFilter, DepartmentWhereInput> | null
    headed_department?: XOR<DepartmentNullableScalarRelationFilter, DepartmentWhereInput> | null
    attendances?: AttendanceListRelationFilter
    leave_requests?: LeaveRequestListRelationFilter
    approved_leaves?: LeaveRequestListRelationFilter
    petty_cash_requests?: PettyCashRequestListRelationFilter
    approved_petty_cash?: PettyCashRequestListRelationFilter
  }, "emp_id" | "email">

  export type EmployeeOrderByWithAggregationInput = {
    emp_id?: SortOrder
    org_id?: SortOrder
    dep_id?: SortOrderInput | SortOrder
    employee_number?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone?: SortOrderInput | SortOrder
    profile_photo_url?: SortOrderInput | SortOrder
    designation?: SortOrderInput | SortOrder
    employment_type?: SortOrder
    join_date?: SortOrderInput | SortOrder
    resign_date?: SortOrderInput | SortOrder
    status?: SortOrder
    created_at?: SortOrder
    update_at?: SortOrder
    _count?: EmployeeCountOrderByAggregateInput
    _max?: EmployeeMaxOrderByAggregateInput
    _min?: EmployeeMinOrderByAggregateInput
  }

  export type EmployeeScalarWhereWithAggregatesInput = {
    AND?: EmployeeScalarWhereWithAggregatesInput | EmployeeScalarWhereWithAggregatesInput[]
    OR?: EmployeeScalarWhereWithAggregatesInput[]
    NOT?: EmployeeScalarWhereWithAggregatesInput | EmployeeScalarWhereWithAggregatesInput[]
    emp_id?: UuidWithAggregatesFilter<"Employee"> | string
    org_id?: UuidWithAggregatesFilter<"Employee"> | string
    dep_id?: UuidNullableWithAggregatesFilter<"Employee"> | string | null
    employee_number?: StringWithAggregatesFilter<"Employee"> | string
    first_name?: StringWithAggregatesFilter<"Employee"> | string
    last_name?: StringWithAggregatesFilter<"Employee"> | string
    email?: StringWithAggregatesFilter<"Employee"> | string
    password?: StringWithAggregatesFilter<"Employee"> | string
    phone?: StringNullableWithAggregatesFilter<"Employee"> | string | null
    profile_photo_url?: StringNullableWithAggregatesFilter<"Employee"> | string | null
    designation?: StringNullableWithAggregatesFilter<"Employee"> | string | null
    employment_type?: StringWithAggregatesFilter<"Employee"> | string
    join_date?: DateTimeNullableWithAggregatesFilter<"Employee"> | Date | string | null
    resign_date?: DateTimeNullableWithAggregatesFilter<"Employee"> | Date | string | null
    status?: StringWithAggregatesFilter<"Employee"> | string
    created_at?: DateTimeWithAggregatesFilter<"Employee"> | Date | string
    update_at?: DateTimeWithAggregatesFilter<"Employee"> | Date | string
  }

  export type OrganizationWhereInput = {
    AND?: OrganizationWhereInput | OrganizationWhereInput[]
    OR?: OrganizationWhereInput[]
    NOT?: OrganizationWhereInput | OrganizationWhereInput[]
    org_id?: UuidFilter<"Organization"> | string
    sub_id?: UuidNullableFilter<"Organization"> | string | null
    name?: StringFilter<"Organization"> | string
    industry?: StringNullableFilter<"Organization"> | string | null
    registration_no?: StringNullableFilter<"Organization"> | string | null
    address?: StringNullableFilter<"Organization"> | string | null
    email?: StringFilter<"Organization"> | string
    password?: StringFilter<"Organization"> | string
    phone?: StringNullableFilter<"Organization"> | string | null
    logo_url?: StringNullableFilter<"Organization"> | string | null
    created_at?: DateTimeFilter<"Organization"> | Date | string
    update_at?: DateTimeFilter<"Organization"> | Date | string
    subscription?: XOR<SubscriptionNullableScalarRelationFilter, SubscriptionWhereInput> | null
    invoices?: InvoiceListRelationFilter
    departments?: DepartmentListRelationFilter
    employees?: EmployeeListRelationFilter
    attendances?: AttendanceListRelationFilter
    leave_requests?: LeaveRequestListRelationFilter
    petty_cash_requests?: PettyCashRequestListRelationFilter
  }

  export type OrganizationOrderByWithRelationInput = {
    org_id?: SortOrder
    sub_id?: SortOrderInput | SortOrder
    name?: SortOrder
    industry?: SortOrderInput | SortOrder
    registration_no?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    email?: SortOrder
    password?: SortOrder
    phone?: SortOrderInput | SortOrder
    logo_url?: SortOrderInput | SortOrder
    created_at?: SortOrder
    update_at?: SortOrder
    subscription?: SubscriptionOrderByWithRelationInput
    invoices?: InvoiceOrderByRelationAggregateInput
    departments?: DepartmentOrderByRelationAggregateInput
    employees?: EmployeeOrderByRelationAggregateInput
    attendances?: AttendanceOrderByRelationAggregateInput
    leave_requests?: LeaveRequestOrderByRelationAggregateInput
    petty_cash_requests?: PettyCashRequestOrderByRelationAggregateInput
  }

  export type OrganizationWhereUniqueInput = Prisma.AtLeast<{
    org_id?: string
    AND?: OrganizationWhereInput | OrganizationWhereInput[]
    OR?: OrganizationWhereInput[]
    NOT?: OrganizationWhereInput | OrganizationWhereInput[]
    sub_id?: UuidNullableFilter<"Organization"> | string | null
    name?: StringFilter<"Organization"> | string
    industry?: StringNullableFilter<"Organization"> | string | null
    registration_no?: StringNullableFilter<"Organization"> | string | null
    address?: StringNullableFilter<"Organization"> | string | null
    email?: StringFilter<"Organization"> | string
    password?: StringFilter<"Organization"> | string
    phone?: StringNullableFilter<"Organization"> | string | null
    logo_url?: StringNullableFilter<"Organization"> | string | null
    created_at?: DateTimeFilter<"Organization"> | Date | string
    update_at?: DateTimeFilter<"Organization"> | Date | string
    subscription?: XOR<SubscriptionNullableScalarRelationFilter, SubscriptionWhereInput> | null
    invoices?: InvoiceListRelationFilter
    departments?: DepartmentListRelationFilter
    employees?: EmployeeListRelationFilter
    attendances?: AttendanceListRelationFilter
    leave_requests?: LeaveRequestListRelationFilter
    petty_cash_requests?: PettyCashRequestListRelationFilter
  }, "org_id">

  export type OrganizationOrderByWithAggregationInput = {
    org_id?: SortOrder
    sub_id?: SortOrderInput | SortOrder
    name?: SortOrder
    industry?: SortOrderInput | SortOrder
    registration_no?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    email?: SortOrder
    password?: SortOrder
    phone?: SortOrderInput | SortOrder
    logo_url?: SortOrderInput | SortOrder
    created_at?: SortOrder
    update_at?: SortOrder
    _count?: OrganizationCountOrderByAggregateInput
    _max?: OrganizationMaxOrderByAggregateInput
    _min?: OrganizationMinOrderByAggregateInput
  }

  export type OrganizationScalarWhereWithAggregatesInput = {
    AND?: OrganizationScalarWhereWithAggregatesInput | OrganizationScalarWhereWithAggregatesInput[]
    OR?: OrganizationScalarWhereWithAggregatesInput[]
    NOT?: OrganizationScalarWhereWithAggregatesInput | OrganizationScalarWhereWithAggregatesInput[]
    org_id?: UuidWithAggregatesFilter<"Organization"> | string
    sub_id?: UuidNullableWithAggregatesFilter<"Organization"> | string | null
    name?: StringWithAggregatesFilter<"Organization"> | string
    industry?: StringNullableWithAggregatesFilter<"Organization"> | string | null
    registration_no?: StringNullableWithAggregatesFilter<"Organization"> | string | null
    address?: StringNullableWithAggregatesFilter<"Organization"> | string | null
    email?: StringWithAggregatesFilter<"Organization"> | string
    password?: StringWithAggregatesFilter<"Organization"> | string
    phone?: StringNullableWithAggregatesFilter<"Organization"> | string | null
    logo_url?: StringNullableWithAggregatesFilter<"Organization"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"Organization"> | Date | string
    update_at?: DateTimeWithAggregatesFilter<"Organization"> | Date | string
  }

  export type PlanWhereInput = {
    AND?: PlanWhereInput | PlanWhereInput[]
    OR?: PlanWhereInput[]
    NOT?: PlanWhereInput | PlanWhereInput[]
    plan_id?: UuidFilter<"Plan"> | string
    name?: StringFilter<"Plan"> | string
    description?: StringNullableFilter<"Plan"> | string | null
    price_monthly?: FloatNullableFilter<"Plan"> | number | null
    price_annual?: FloatNullableFilter<"Plan"> | number | null
    currency?: StringFilter<"Plan"> | string
    max_employees?: IntNullableFilter<"Plan"> | number | null
    is_active?: BoolFilter<"Plan"> | boolean
    created_at?: DateTimeFilter<"Plan"> | Date | string
    update_at?: DateTimeFilter<"Plan"> | Date | string
    subscriptions?: SubscriptionListRelationFilter
    features?: FeatureListRelationFilter
  }

  export type PlanOrderByWithRelationInput = {
    plan_id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    price_monthly?: SortOrderInput | SortOrder
    price_annual?: SortOrderInput | SortOrder
    currency?: SortOrder
    max_employees?: SortOrderInput | SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    update_at?: SortOrder
    subscriptions?: SubscriptionOrderByRelationAggregateInput
    features?: FeatureOrderByRelationAggregateInput
  }

  export type PlanWhereUniqueInput = Prisma.AtLeast<{
    plan_id?: string
    name?: string
    AND?: PlanWhereInput | PlanWhereInput[]
    OR?: PlanWhereInput[]
    NOT?: PlanWhereInput | PlanWhereInput[]
    description?: StringNullableFilter<"Plan"> | string | null
    price_monthly?: FloatNullableFilter<"Plan"> | number | null
    price_annual?: FloatNullableFilter<"Plan"> | number | null
    currency?: StringFilter<"Plan"> | string
    max_employees?: IntNullableFilter<"Plan"> | number | null
    is_active?: BoolFilter<"Plan"> | boolean
    created_at?: DateTimeFilter<"Plan"> | Date | string
    update_at?: DateTimeFilter<"Plan"> | Date | string
    subscriptions?: SubscriptionListRelationFilter
    features?: FeatureListRelationFilter
  }, "plan_id" | "name">

  export type PlanOrderByWithAggregationInput = {
    plan_id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    price_monthly?: SortOrderInput | SortOrder
    price_annual?: SortOrderInput | SortOrder
    currency?: SortOrder
    max_employees?: SortOrderInput | SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    update_at?: SortOrder
    _count?: PlanCountOrderByAggregateInput
    _avg?: PlanAvgOrderByAggregateInput
    _max?: PlanMaxOrderByAggregateInput
    _min?: PlanMinOrderByAggregateInput
    _sum?: PlanSumOrderByAggregateInput
  }

  export type PlanScalarWhereWithAggregatesInput = {
    AND?: PlanScalarWhereWithAggregatesInput | PlanScalarWhereWithAggregatesInput[]
    OR?: PlanScalarWhereWithAggregatesInput[]
    NOT?: PlanScalarWhereWithAggregatesInput | PlanScalarWhereWithAggregatesInput[]
    plan_id?: UuidWithAggregatesFilter<"Plan"> | string
    name?: StringWithAggregatesFilter<"Plan"> | string
    description?: StringNullableWithAggregatesFilter<"Plan"> | string | null
    price_monthly?: FloatNullableWithAggregatesFilter<"Plan"> | number | null
    price_annual?: FloatNullableWithAggregatesFilter<"Plan"> | number | null
    currency?: StringWithAggregatesFilter<"Plan"> | string
    max_employees?: IntNullableWithAggregatesFilter<"Plan"> | number | null
    is_active?: BoolWithAggregatesFilter<"Plan"> | boolean
    created_at?: DateTimeWithAggregatesFilter<"Plan"> | Date | string
    update_at?: DateTimeWithAggregatesFilter<"Plan"> | Date | string
  }

  export type FeatureWhereInput = {
    AND?: FeatureWhereInput | FeatureWhereInput[]
    OR?: FeatureWhereInput[]
    NOT?: FeatureWhereInput | FeatureWhereInput[]
    fet_id?: UuidFilter<"Feature"> | string
    name?: StringFilter<"Feature"> | string
    created_at?: DateTimeFilter<"Feature"> | Date | string
    update_at?: DateTimeFilter<"Feature"> | Date | string
    plans?: PlanListRelationFilter
  }

  export type FeatureOrderByWithRelationInput = {
    fet_id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    update_at?: SortOrder
    plans?: PlanOrderByRelationAggregateInput
  }

  export type FeatureWhereUniqueInput = Prisma.AtLeast<{
    fet_id?: string
    name?: string
    AND?: FeatureWhereInput | FeatureWhereInput[]
    OR?: FeatureWhereInput[]
    NOT?: FeatureWhereInput | FeatureWhereInput[]
    created_at?: DateTimeFilter<"Feature"> | Date | string
    update_at?: DateTimeFilter<"Feature"> | Date | string
    plans?: PlanListRelationFilter
  }, "fet_id" | "name">

  export type FeatureOrderByWithAggregationInput = {
    fet_id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    update_at?: SortOrder
    _count?: FeatureCountOrderByAggregateInput
    _max?: FeatureMaxOrderByAggregateInput
    _min?: FeatureMinOrderByAggregateInput
  }

  export type FeatureScalarWhereWithAggregatesInput = {
    AND?: FeatureScalarWhereWithAggregatesInput | FeatureScalarWhereWithAggregatesInput[]
    OR?: FeatureScalarWhereWithAggregatesInput[]
    NOT?: FeatureScalarWhereWithAggregatesInput | FeatureScalarWhereWithAggregatesInput[]
    fet_id?: UuidWithAggregatesFilter<"Feature"> | string
    name?: StringWithAggregatesFilter<"Feature"> | string
    created_at?: DateTimeWithAggregatesFilter<"Feature"> | Date | string
    update_at?: DateTimeWithAggregatesFilter<"Feature"> | Date | string
  }

  export type InvoiceWhereInput = {
    AND?: InvoiceWhereInput | InvoiceWhereInput[]
    OR?: InvoiceWhereInput[]
    NOT?: InvoiceWhereInput | InvoiceWhereInput[]
    invoice_id?: UuidFilter<"Invoice"> | string
    org_id?: UuidFilter<"Invoice"> | string
    sub_id?: UuidFilter<"Invoice"> | string
    amount?: FloatFilter<"Invoice"> | number
    currency?: StringFilter<"Invoice"> | string
    renewal_date?: DateTimeNullableFilter<"Invoice"> | Date | string | null
    issue_date?: DateTimeFilter<"Invoice"> | Date | string
    due_date?: DateTimeFilter<"Invoice"> | Date | string
    paid_date?: DateTimeNullableFilter<"Invoice"> | Date | string | null
    receipt?: StringNullableFilter<"Invoice"> | string | null
    status?: StringFilter<"Invoice"> | string
    cancelled_at?: DateTimeNullableFilter<"Invoice"> | Date | string | null
    payment_method?: StringNullableFilter<"Invoice"> | string | null
    created_at?: DateTimeFilter<"Invoice"> | Date | string
    update_at?: DateTimeFilter<"Invoice"> | Date | string
    organization?: XOR<OrganizationScalarRelationFilter, OrganizationWhereInput>
    subscription?: XOR<SubscriptionScalarRelationFilter, SubscriptionWhereInput>
  }

  export type InvoiceOrderByWithRelationInput = {
    invoice_id?: SortOrder
    org_id?: SortOrder
    sub_id?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    renewal_date?: SortOrderInput | SortOrder
    issue_date?: SortOrder
    due_date?: SortOrder
    paid_date?: SortOrderInput | SortOrder
    receipt?: SortOrderInput | SortOrder
    status?: SortOrder
    cancelled_at?: SortOrderInput | SortOrder
    payment_method?: SortOrderInput | SortOrder
    created_at?: SortOrder
    update_at?: SortOrder
    organization?: OrganizationOrderByWithRelationInput
    subscription?: SubscriptionOrderByWithRelationInput
  }

  export type InvoiceWhereUniqueInput = Prisma.AtLeast<{
    invoice_id?: string
    AND?: InvoiceWhereInput | InvoiceWhereInput[]
    OR?: InvoiceWhereInput[]
    NOT?: InvoiceWhereInput | InvoiceWhereInput[]
    org_id?: UuidFilter<"Invoice"> | string
    sub_id?: UuidFilter<"Invoice"> | string
    amount?: FloatFilter<"Invoice"> | number
    currency?: StringFilter<"Invoice"> | string
    renewal_date?: DateTimeNullableFilter<"Invoice"> | Date | string | null
    issue_date?: DateTimeFilter<"Invoice"> | Date | string
    due_date?: DateTimeFilter<"Invoice"> | Date | string
    paid_date?: DateTimeNullableFilter<"Invoice"> | Date | string | null
    receipt?: StringNullableFilter<"Invoice"> | string | null
    status?: StringFilter<"Invoice"> | string
    cancelled_at?: DateTimeNullableFilter<"Invoice"> | Date | string | null
    payment_method?: StringNullableFilter<"Invoice"> | string | null
    created_at?: DateTimeFilter<"Invoice"> | Date | string
    update_at?: DateTimeFilter<"Invoice"> | Date | string
    organization?: XOR<OrganizationScalarRelationFilter, OrganizationWhereInput>
    subscription?: XOR<SubscriptionScalarRelationFilter, SubscriptionWhereInput>
  }, "invoice_id">

  export type InvoiceOrderByWithAggregationInput = {
    invoice_id?: SortOrder
    org_id?: SortOrder
    sub_id?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    renewal_date?: SortOrderInput | SortOrder
    issue_date?: SortOrder
    due_date?: SortOrder
    paid_date?: SortOrderInput | SortOrder
    receipt?: SortOrderInput | SortOrder
    status?: SortOrder
    cancelled_at?: SortOrderInput | SortOrder
    payment_method?: SortOrderInput | SortOrder
    created_at?: SortOrder
    update_at?: SortOrder
    _count?: InvoiceCountOrderByAggregateInput
    _avg?: InvoiceAvgOrderByAggregateInput
    _max?: InvoiceMaxOrderByAggregateInput
    _min?: InvoiceMinOrderByAggregateInput
    _sum?: InvoiceSumOrderByAggregateInput
  }

  export type InvoiceScalarWhereWithAggregatesInput = {
    AND?: InvoiceScalarWhereWithAggregatesInput | InvoiceScalarWhereWithAggregatesInput[]
    OR?: InvoiceScalarWhereWithAggregatesInput[]
    NOT?: InvoiceScalarWhereWithAggregatesInput | InvoiceScalarWhereWithAggregatesInput[]
    invoice_id?: UuidWithAggregatesFilter<"Invoice"> | string
    org_id?: UuidWithAggregatesFilter<"Invoice"> | string
    sub_id?: UuidWithAggregatesFilter<"Invoice"> | string
    amount?: FloatWithAggregatesFilter<"Invoice"> | number
    currency?: StringWithAggregatesFilter<"Invoice"> | string
    renewal_date?: DateTimeNullableWithAggregatesFilter<"Invoice"> | Date | string | null
    issue_date?: DateTimeWithAggregatesFilter<"Invoice"> | Date | string
    due_date?: DateTimeWithAggregatesFilter<"Invoice"> | Date | string
    paid_date?: DateTimeNullableWithAggregatesFilter<"Invoice"> | Date | string | null
    receipt?: StringNullableWithAggregatesFilter<"Invoice"> | string | null
    status?: StringWithAggregatesFilter<"Invoice"> | string
    cancelled_at?: DateTimeNullableWithAggregatesFilter<"Invoice"> | Date | string | null
    payment_method?: StringNullableWithAggregatesFilter<"Invoice"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"Invoice"> | Date | string
    update_at?: DateTimeWithAggregatesFilter<"Invoice"> | Date | string
  }

  export type AttendanceWhereInput = {
    AND?: AttendanceWhereInput | AttendanceWhereInput[]
    OR?: AttendanceWhereInput[]
    NOT?: AttendanceWhereInput | AttendanceWhereInput[]
    att_id?: UuidFilter<"Attendance"> | string
    org_id?: UuidFilter<"Attendance"> | string
    emp_id?: UuidFilter<"Attendance"> | string
    date?: DateTimeFilter<"Attendance"> | Date | string
    check_in_time?: DateTimeNullableFilter<"Attendance"> | Date | string | null
    check_in_location?: StringNullableFilter<"Attendance"> | string | null
    check_out_time?: DateTimeNullableFilter<"Attendance"> | Date | string | null
    check_out_location?: StringNullableFilter<"Attendance"> | string | null
    work_hours?: FloatNullableFilter<"Attendance"> | number | null
    status?: StringFilter<"Attendance"> | string
    created_at?: DateTimeFilter<"Attendance"> | Date | string
    update_at?: DateTimeFilter<"Attendance"> | Date | string
    organization?: XOR<OrganizationScalarRelationFilter, OrganizationWhereInput>
    employee?: XOR<EmployeeScalarRelationFilter, EmployeeWhereInput>
  }

  export type AttendanceOrderByWithRelationInput = {
    att_id?: SortOrder
    org_id?: SortOrder
    emp_id?: SortOrder
    date?: SortOrder
    check_in_time?: SortOrderInput | SortOrder
    check_in_location?: SortOrderInput | SortOrder
    check_out_time?: SortOrderInput | SortOrder
    check_out_location?: SortOrderInput | SortOrder
    work_hours?: SortOrderInput | SortOrder
    status?: SortOrder
    created_at?: SortOrder
    update_at?: SortOrder
    organization?: OrganizationOrderByWithRelationInput
    employee?: EmployeeOrderByWithRelationInput
  }

  export type AttendanceWhereUniqueInput = Prisma.AtLeast<{
    att_id?: string
    AND?: AttendanceWhereInput | AttendanceWhereInput[]
    OR?: AttendanceWhereInput[]
    NOT?: AttendanceWhereInput | AttendanceWhereInput[]
    org_id?: UuidFilter<"Attendance"> | string
    emp_id?: UuidFilter<"Attendance"> | string
    date?: DateTimeFilter<"Attendance"> | Date | string
    check_in_time?: DateTimeNullableFilter<"Attendance"> | Date | string | null
    check_in_location?: StringNullableFilter<"Attendance"> | string | null
    check_out_time?: DateTimeNullableFilter<"Attendance"> | Date | string | null
    check_out_location?: StringNullableFilter<"Attendance"> | string | null
    work_hours?: FloatNullableFilter<"Attendance"> | number | null
    status?: StringFilter<"Attendance"> | string
    created_at?: DateTimeFilter<"Attendance"> | Date | string
    update_at?: DateTimeFilter<"Attendance"> | Date | string
    organization?: XOR<OrganizationScalarRelationFilter, OrganizationWhereInput>
    employee?: XOR<EmployeeScalarRelationFilter, EmployeeWhereInput>
  }, "att_id">

  export type AttendanceOrderByWithAggregationInput = {
    att_id?: SortOrder
    org_id?: SortOrder
    emp_id?: SortOrder
    date?: SortOrder
    check_in_time?: SortOrderInput | SortOrder
    check_in_location?: SortOrderInput | SortOrder
    check_out_time?: SortOrderInput | SortOrder
    check_out_location?: SortOrderInput | SortOrder
    work_hours?: SortOrderInput | SortOrder
    status?: SortOrder
    created_at?: SortOrder
    update_at?: SortOrder
    _count?: AttendanceCountOrderByAggregateInput
    _avg?: AttendanceAvgOrderByAggregateInput
    _max?: AttendanceMaxOrderByAggregateInput
    _min?: AttendanceMinOrderByAggregateInput
    _sum?: AttendanceSumOrderByAggregateInput
  }

  export type AttendanceScalarWhereWithAggregatesInput = {
    AND?: AttendanceScalarWhereWithAggregatesInput | AttendanceScalarWhereWithAggregatesInput[]
    OR?: AttendanceScalarWhereWithAggregatesInput[]
    NOT?: AttendanceScalarWhereWithAggregatesInput | AttendanceScalarWhereWithAggregatesInput[]
    att_id?: UuidWithAggregatesFilter<"Attendance"> | string
    org_id?: UuidWithAggregatesFilter<"Attendance"> | string
    emp_id?: UuidWithAggregatesFilter<"Attendance"> | string
    date?: DateTimeWithAggregatesFilter<"Attendance"> | Date | string
    check_in_time?: DateTimeNullableWithAggregatesFilter<"Attendance"> | Date | string | null
    check_in_location?: StringNullableWithAggregatesFilter<"Attendance"> | string | null
    check_out_time?: DateTimeNullableWithAggregatesFilter<"Attendance"> | Date | string | null
    check_out_location?: StringNullableWithAggregatesFilter<"Attendance"> | string | null
    work_hours?: FloatNullableWithAggregatesFilter<"Attendance"> | number | null
    status?: StringWithAggregatesFilter<"Attendance"> | string
    created_at?: DateTimeWithAggregatesFilter<"Attendance"> | Date | string
    update_at?: DateTimeWithAggregatesFilter<"Attendance"> | Date | string
  }

  export type LeaveRequestWhereInput = {
    AND?: LeaveRequestWhereInput | LeaveRequestWhereInput[]
    OR?: LeaveRequestWhereInput[]
    NOT?: LeaveRequestWhereInput | LeaveRequestWhereInput[]
    leave_id?: UuidFilter<"LeaveRequest"> | string
    org_id?: UuidFilter<"LeaveRequest"> | string
    emp_id?: UuidFilter<"LeaveRequest"> | string
    leave_type?: StringFilter<"LeaveRequest"> | string
    start_date?: DateTimeFilter<"LeaveRequest"> | Date | string
    end_date?: DateTimeFilter<"LeaveRequest"> | Date | string
    reason?: StringNullableFilter<"LeaveRequest"> | string | null
    attachments?: StringNullableFilter<"LeaveRequest"> | string | null
    approved_by?: UuidNullableFilter<"LeaveRequest"> | string | null
    approved_date?: DateTimeNullableFilter<"LeaveRequest"> | Date | string | null
    status?: StringFilter<"LeaveRequest"> | string
    created_at?: DateTimeFilter<"LeaveRequest"> | Date | string
    update_at?: DateTimeFilter<"LeaveRequest"> | Date | string
    organization?: XOR<OrganizationScalarRelationFilter, OrganizationWhereInput>
    employee?: XOR<EmployeeScalarRelationFilter, EmployeeWhereInput>
    approver?: XOR<EmployeeNullableScalarRelationFilter, EmployeeWhereInput> | null
  }

  export type LeaveRequestOrderByWithRelationInput = {
    leave_id?: SortOrder
    org_id?: SortOrder
    emp_id?: SortOrder
    leave_type?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    reason?: SortOrderInput | SortOrder
    attachments?: SortOrderInput | SortOrder
    approved_by?: SortOrderInput | SortOrder
    approved_date?: SortOrderInput | SortOrder
    status?: SortOrder
    created_at?: SortOrder
    update_at?: SortOrder
    organization?: OrganizationOrderByWithRelationInput
    employee?: EmployeeOrderByWithRelationInput
    approver?: EmployeeOrderByWithRelationInput
  }

  export type LeaveRequestWhereUniqueInput = Prisma.AtLeast<{
    leave_id?: string
    AND?: LeaveRequestWhereInput | LeaveRequestWhereInput[]
    OR?: LeaveRequestWhereInput[]
    NOT?: LeaveRequestWhereInput | LeaveRequestWhereInput[]
    org_id?: UuidFilter<"LeaveRequest"> | string
    emp_id?: UuidFilter<"LeaveRequest"> | string
    leave_type?: StringFilter<"LeaveRequest"> | string
    start_date?: DateTimeFilter<"LeaveRequest"> | Date | string
    end_date?: DateTimeFilter<"LeaveRequest"> | Date | string
    reason?: StringNullableFilter<"LeaveRequest"> | string | null
    attachments?: StringNullableFilter<"LeaveRequest"> | string | null
    approved_by?: UuidNullableFilter<"LeaveRequest"> | string | null
    approved_date?: DateTimeNullableFilter<"LeaveRequest"> | Date | string | null
    status?: StringFilter<"LeaveRequest"> | string
    created_at?: DateTimeFilter<"LeaveRequest"> | Date | string
    update_at?: DateTimeFilter<"LeaveRequest"> | Date | string
    organization?: XOR<OrganizationScalarRelationFilter, OrganizationWhereInput>
    employee?: XOR<EmployeeScalarRelationFilter, EmployeeWhereInput>
    approver?: XOR<EmployeeNullableScalarRelationFilter, EmployeeWhereInput> | null
  }, "leave_id">

  export type LeaveRequestOrderByWithAggregationInput = {
    leave_id?: SortOrder
    org_id?: SortOrder
    emp_id?: SortOrder
    leave_type?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    reason?: SortOrderInput | SortOrder
    attachments?: SortOrderInput | SortOrder
    approved_by?: SortOrderInput | SortOrder
    approved_date?: SortOrderInput | SortOrder
    status?: SortOrder
    created_at?: SortOrder
    update_at?: SortOrder
    _count?: LeaveRequestCountOrderByAggregateInput
    _max?: LeaveRequestMaxOrderByAggregateInput
    _min?: LeaveRequestMinOrderByAggregateInput
  }

  export type LeaveRequestScalarWhereWithAggregatesInput = {
    AND?: LeaveRequestScalarWhereWithAggregatesInput | LeaveRequestScalarWhereWithAggregatesInput[]
    OR?: LeaveRequestScalarWhereWithAggregatesInput[]
    NOT?: LeaveRequestScalarWhereWithAggregatesInput | LeaveRequestScalarWhereWithAggregatesInput[]
    leave_id?: UuidWithAggregatesFilter<"LeaveRequest"> | string
    org_id?: UuidWithAggregatesFilter<"LeaveRequest"> | string
    emp_id?: UuidWithAggregatesFilter<"LeaveRequest"> | string
    leave_type?: StringWithAggregatesFilter<"LeaveRequest"> | string
    start_date?: DateTimeWithAggregatesFilter<"LeaveRequest"> | Date | string
    end_date?: DateTimeWithAggregatesFilter<"LeaveRequest"> | Date | string
    reason?: StringNullableWithAggregatesFilter<"LeaveRequest"> | string | null
    attachments?: StringNullableWithAggregatesFilter<"LeaveRequest"> | string | null
    approved_by?: UuidNullableWithAggregatesFilter<"LeaveRequest"> | string | null
    approved_date?: DateTimeNullableWithAggregatesFilter<"LeaveRequest"> | Date | string | null
    status?: StringWithAggregatesFilter<"LeaveRequest"> | string
    created_at?: DateTimeWithAggregatesFilter<"LeaveRequest"> | Date | string
    update_at?: DateTimeWithAggregatesFilter<"LeaveRequest"> | Date | string
  }

  export type PettyCashRequestWhereInput = {
    AND?: PettyCashRequestWhereInput | PettyCashRequestWhereInput[]
    OR?: PettyCashRequestWhereInput[]
    NOT?: PettyCashRequestWhereInput | PettyCashRequestWhereInput[]
    pet_id?: UuidFilter<"PettyCashRequest"> | string
    org_id?: UuidFilter<"PettyCashRequest"> | string
    emp_id?: UuidFilter<"PettyCashRequest"> | string
    amount?: FloatFilter<"PettyCashRequest"> | number
    currency?: StringFilter<"PettyCashRequest"> | string
    reason?: StringNullableFilter<"PettyCashRequest"> | string | null
    request_date?: DateTimeFilter<"PettyCashRequest"> | Date | string
    request_type?: StringFilter<"PettyCashRequest"> | string
    attachments?: StringNullableFilter<"PettyCashRequest"> | string | null
    approved_date?: DateTimeNullableFilter<"PettyCashRequest"> | Date | string | null
    approved_by?: UuidNullableFilter<"PettyCashRequest"> | string | null
    status?: StringFilter<"PettyCashRequest"> | string
    created_at?: DateTimeFilter<"PettyCashRequest"> | Date | string
    update_at?: DateTimeFilter<"PettyCashRequest"> | Date | string
    organization?: XOR<OrganizationScalarRelationFilter, OrganizationWhereInput>
    employee?: XOR<EmployeeScalarRelationFilter, EmployeeWhereInput>
    approver?: XOR<EmployeeNullableScalarRelationFilter, EmployeeWhereInput> | null
  }

  export type PettyCashRequestOrderByWithRelationInput = {
    pet_id?: SortOrder
    org_id?: SortOrder
    emp_id?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    reason?: SortOrderInput | SortOrder
    request_date?: SortOrder
    request_type?: SortOrder
    attachments?: SortOrderInput | SortOrder
    approved_date?: SortOrderInput | SortOrder
    approved_by?: SortOrderInput | SortOrder
    status?: SortOrder
    created_at?: SortOrder
    update_at?: SortOrder
    organization?: OrganizationOrderByWithRelationInput
    employee?: EmployeeOrderByWithRelationInput
    approver?: EmployeeOrderByWithRelationInput
  }

  export type PettyCashRequestWhereUniqueInput = Prisma.AtLeast<{
    pet_id?: string
    AND?: PettyCashRequestWhereInput | PettyCashRequestWhereInput[]
    OR?: PettyCashRequestWhereInput[]
    NOT?: PettyCashRequestWhereInput | PettyCashRequestWhereInput[]
    org_id?: UuidFilter<"PettyCashRequest"> | string
    emp_id?: UuidFilter<"PettyCashRequest"> | string
    amount?: FloatFilter<"PettyCashRequest"> | number
    currency?: StringFilter<"PettyCashRequest"> | string
    reason?: StringNullableFilter<"PettyCashRequest"> | string | null
    request_date?: DateTimeFilter<"PettyCashRequest"> | Date | string
    request_type?: StringFilter<"PettyCashRequest"> | string
    attachments?: StringNullableFilter<"PettyCashRequest"> | string | null
    approved_date?: DateTimeNullableFilter<"PettyCashRequest"> | Date | string | null
    approved_by?: UuidNullableFilter<"PettyCashRequest"> | string | null
    status?: StringFilter<"PettyCashRequest"> | string
    created_at?: DateTimeFilter<"PettyCashRequest"> | Date | string
    update_at?: DateTimeFilter<"PettyCashRequest"> | Date | string
    organization?: XOR<OrganizationScalarRelationFilter, OrganizationWhereInput>
    employee?: XOR<EmployeeScalarRelationFilter, EmployeeWhereInput>
    approver?: XOR<EmployeeNullableScalarRelationFilter, EmployeeWhereInput> | null
  }, "pet_id">

  export type PettyCashRequestOrderByWithAggregationInput = {
    pet_id?: SortOrder
    org_id?: SortOrder
    emp_id?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    reason?: SortOrderInput | SortOrder
    request_date?: SortOrder
    request_type?: SortOrder
    attachments?: SortOrderInput | SortOrder
    approved_date?: SortOrderInput | SortOrder
    approved_by?: SortOrderInput | SortOrder
    status?: SortOrder
    created_at?: SortOrder
    update_at?: SortOrder
    _count?: PettyCashRequestCountOrderByAggregateInput
    _avg?: PettyCashRequestAvgOrderByAggregateInput
    _max?: PettyCashRequestMaxOrderByAggregateInput
    _min?: PettyCashRequestMinOrderByAggregateInput
    _sum?: PettyCashRequestSumOrderByAggregateInput
  }

  export type PettyCashRequestScalarWhereWithAggregatesInput = {
    AND?: PettyCashRequestScalarWhereWithAggregatesInput | PettyCashRequestScalarWhereWithAggregatesInput[]
    OR?: PettyCashRequestScalarWhereWithAggregatesInput[]
    NOT?: PettyCashRequestScalarWhereWithAggregatesInput | PettyCashRequestScalarWhereWithAggregatesInput[]
    pet_id?: UuidWithAggregatesFilter<"PettyCashRequest"> | string
    org_id?: UuidWithAggregatesFilter<"PettyCashRequest"> | string
    emp_id?: UuidWithAggregatesFilter<"PettyCashRequest"> | string
    amount?: FloatWithAggregatesFilter<"PettyCashRequest"> | number
    currency?: StringWithAggregatesFilter<"PettyCashRequest"> | string
    reason?: StringNullableWithAggregatesFilter<"PettyCashRequest"> | string | null
    request_date?: DateTimeWithAggregatesFilter<"PettyCashRequest"> | Date | string
    request_type?: StringWithAggregatesFilter<"PettyCashRequest"> | string
    attachments?: StringNullableWithAggregatesFilter<"PettyCashRequest"> | string | null
    approved_date?: DateTimeNullableWithAggregatesFilter<"PettyCashRequest"> | Date | string | null
    approved_by?: UuidNullableWithAggregatesFilter<"PettyCashRequest"> | string | null
    status?: StringWithAggregatesFilter<"PettyCashRequest"> | string
    created_at?: DateTimeWithAggregatesFilter<"PettyCashRequest"> | Date | string
    update_at?: DateTimeWithAggregatesFilter<"PettyCashRequest"> | Date | string
  }

  export type SubscriptionCreateInput = {
    sub_id?: string
    start_date: Date | string
    end_date: Date | string
    renewal_date?: Date | string | null
    billing_cycle: string
    status: string
    auto_renew?: boolean
    trial_end_date?: Date | string | null
    cancelled_at?: Date | string | null
    payment_method?: string | null
    created_at?: Date | string
    update_at?: Date | string
    organization?: OrganizationCreateNestedOneWithoutSubscriptionInput
    plan?: PlanCreateNestedOneWithoutSubscriptionsInput
    invoices?: InvoiceCreateNestedManyWithoutSubscriptionInput
  }

  export type SubscriptionUncheckedCreateInput = {
    sub_id?: string
    org_id?: string | null
    plan_id?: string | null
    start_date: Date | string
    end_date: Date | string
    renewal_date?: Date | string | null
    billing_cycle: string
    status: string
    auto_renew?: boolean
    trial_end_date?: Date | string | null
    cancelled_at?: Date | string | null
    payment_method?: string | null
    created_at?: Date | string
    update_at?: Date | string
    invoices?: InvoiceUncheckedCreateNestedManyWithoutSubscriptionInput
  }

  export type SubscriptionUpdateInput = {
    sub_id?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    renewal_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    billing_cycle?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    auto_renew?: BoolFieldUpdateOperationsInput | boolean
    trial_end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelled_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    payment_method?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
    organization?: OrganizationUpdateOneWithoutSubscriptionNestedInput
    plan?: PlanUpdateOneWithoutSubscriptionsNestedInput
    invoices?: InvoiceUpdateManyWithoutSubscriptionNestedInput
  }

  export type SubscriptionUncheckedUpdateInput = {
    sub_id?: StringFieldUpdateOperationsInput | string
    org_id?: NullableStringFieldUpdateOperationsInput | string | null
    plan_id?: NullableStringFieldUpdateOperationsInput | string | null
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    renewal_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    billing_cycle?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    auto_renew?: BoolFieldUpdateOperationsInput | boolean
    trial_end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelled_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    payment_method?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
    invoices?: InvoiceUncheckedUpdateManyWithoutSubscriptionNestedInput
  }

  export type SubscriptionCreateManyInput = {
    sub_id?: string
    org_id?: string | null
    plan_id?: string | null
    start_date: Date | string
    end_date: Date | string
    renewal_date?: Date | string | null
    billing_cycle: string
    status: string
    auto_renew?: boolean
    trial_end_date?: Date | string | null
    cancelled_at?: Date | string | null
    payment_method?: string | null
    created_at?: Date | string
    update_at?: Date | string
  }

  export type SubscriptionUpdateManyMutationInput = {
    sub_id?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    renewal_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    billing_cycle?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    auto_renew?: BoolFieldUpdateOperationsInput | boolean
    trial_end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelled_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    payment_method?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriptionUncheckedUpdateManyInput = {
    sub_id?: StringFieldUpdateOperationsInput | string
    org_id?: NullableStringFieldUpdateOperationsInput | string | null
    plan_id?: NullableStringFieldUpdateOperationsInput | string | null
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    renewal_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    billing_cycle?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    auto_renew?: BoolFieldUpdateOperationsInput | boolean
    trial_end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelled_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    payment_method?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DepartmentCreateInput = {
    dep_id?: string
    name: string
    created_at?: Date | string
    update_at?: Date | string
    organization: OrganizationCreateNestedOneWithoutDepartmentsInput
    parent_department?: DepartmentCreateNestedOneWithoutSub_departmentsInput
    sub_departments?: DepartmentCreateNestedManyWithoutParent_departmentInput
    head?: EmployeeCreateNestedOneWithoutHeaded_departmentInput
    employees?: EmployeeCreateNestedManyWithoutDepartmentInput
  }

  export type DepartmentUncheckedCreateInput = {
    dep_id?: string
    org_id: string
    name: string
    head_id?: string | null
    parent_department_id?: string | null
    created_at?: Date | string
    update_at?: Date | string
    sub_departments?: DepartmentUncheckedCreateNestedManyWithoutParent_departmentInput
    employees?: EmployeeUncheckedCreateNestedManyWithoutDepartmentInput
  }

  export type DepartmentUpdateInput = {
    dep_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
    organization?: OrganizationUpdateOneRequiredWithoutDepartmentsNestedInput
    parent_department?: DepartmentUpdateOneWithoutSub_departmentsNestedInput
    sub_departments?: DepartmentUpdateManyWithoutParent_departmentNestedInput
    head?: EmployeeUpdateOneWithoutHeaded_departmentNestedInput
    employees?: EmployeeUpdateManyWithoutDepartmentNestedInput
  }

  export type DepartmentUncheckedUpdateInput = {
    dep_id?: StringFieldUpdateOperationsInput | string
    org_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    head_id?: NullableStringFieldUpdateOperationsInput | string | null
    parent_department_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
    sub_departments?: DepartmentUncheckedUpdateManyWithoutParent_departmentNestedInput
    employees?: EmployeeUncheckedUpdateManyWithoutDepartmentNestedInput
  }

  export type DepartmentCreateManyInput = {
    dep_id?: string
    org_id: string
    name: string
    head_id?: string | null
    parent_department_id?: string | null
    created_at?: Date | string
    update_at?: Date | string
  }

  export type DepartmentUpdateManyMutationInput = {
    dep_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DepartmentUncheckedUpdateManyInput = {
    dep_id?: StringFieldUpdateOperationsInput | string
    org_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    head_id?: NullableStringFieldUpdateOperationsInput | string | null
    parent_department_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmployeeCreateInput = {
    emp_id?: string
    employee_number: string
    first_name: string
    last_name: string
    email: string
    password: string
    phone?: string | null
    profile_photo_url?: string | null
    designation?: string | null
    employment_type: string
    join_date?: Date | string | null
    resign_date?: Date | string | null
    status: string
    created_at?: Date | string
    update_at?: Date | string
    organization: OrganizationCreateNestedOneWithoutEmployeesInput
    department?: DepartmentCreateNestedOneWithoutEmployeesInput
    headed_department?: DepartmentCreateNestedOneWithoutHeadInput
    attendances?: AttendanceCreateNestedManyWithoutEmployeeInput
    leave_requests?: LeaveRequestCreateNestedManyWithoutEmployeeInput
    approved_leaves?: LeaveRequestCreateNestedManyWithoutApproverInput
    petty_cash_requests?: PettyCashRequestCreateNestedManyWithoutEmployeeInput
    approved_petty_cash?: PettyCashRequestCreateNestedManyWithoutApproverInput
  }

  export type EmployeeUncheckedCreateInput = {
    emp_id?: string
    org_id: string
    dep_id?: string | null
    employee_number: string
    first_name: string
    last_name: string
    email: string
    password: string
    phone?: string | null
    profile_photo_url?: string | null
    designation?: string | null
    employment_type: string
    join_date?: Date | string | null
    resign_date?: Date | string | null
    status: string
    created_at?: Date | string
    update_at?: Date | string
    headed_department?: DepartmentUncheckedCreateNestedOneWithoutHeadInput
    attendances?: AttendanceUncheckedCreateNestedManyWithoutEmployeeInput
    leave_requests?: LeaveRequestUncheckedCreateNestedManyWithoutEmployeeInput
    approved_leaves?: LeaveRequestUncheckedCreateNestedManyWithoutApproverInput
    petty_cash_requests?: PettyCashRequestUncheckedCreateNestedManyWithoutEmployeeInput
    approved_petty_cash?: PettyCashRequestUncheckedCreateNestedManyWithoutApproverInput
  }

  export type EmployeeUpdateInput = {
    emp_id?: StringFieldUpdateOperationsInput | string
    employee_number?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    profile_photo_url?: NullableStringFieldUpdateOperationsInput | string | null
    designation?: NullableStringFieldUpdateOperationsInput | string | null
    employment_type?: StringFieldUpdateOperationsInput | string
    join_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resign_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
    organization?: OrganizationUpdateOneRequiredWithoutEmployeesNestedInput
    department?: DepartmentUpdateOneWithoutEmployeesNestedInput
    headed_department?: DepartmentUpdateOneWithoutHeadNestedInput
    attendances?: AttendanceUpdateManyWithoutEmployeeNestedInput
    leave_requests?: LeaveRequestUpdateManyWithoutEmployeeNestedInput
    approved_leaves?: LeaveRequestUpdateManyWithoutApproverNestedInput
    petty_cash_requests?: PettyCashRequestUpdateManyWithoutEmployeeNestedInput
    approved_petty_cash?: PettyCashRequestUpdateManyWithoutApproverNestedInput
  }

  export type EmployeeUncheckedUpdateInput = {
    emp_id?: StringFieldUpdateOperationsInput | string
    org_id?: StringFieldUpdateOperationsInput | string
    dep_id?: NullableStringFieldUpdateOperationsInput | string | null
    employee_number?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    profile_photo_url?: NullableStringFieldUpdateOperationsInput | string | null
    designation?: NullableStringFieldUpdateOperationsInput | string | null
    employment_type?: StringFieldUpdateOperationsInput | string
    join_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resign_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
    headed_department?: DepartmentUncheckedUpdateOneWithoutHeadNestedInput
    attendances?: AttendanceUncheckedUpdateManyWithoutEmployeeNestedInput
    leave_requests?: LeaveRequestUncheckedUpdateManyWithoutEmployeeNestedInput
    approved_leaves?: LeaveRequestUncheckedUpdateManyWithoutApproverNestedInput
    petty_cash_requests?: PettyCashRequestUncheckedUpdateManyWithoutEmployeeNestedInput
    approved_petty_cash?: PettyCashRequestUncheckedUpdateManyWithoutApproverNestedInput
  }

  export type EmployeeCreateManyInput = {
    emp_id?: string
    org_id: string
    dep_id?: string | null
    employee_number: string
    first_name: string
    last_name: string
    email: string
    password: string
    phone?: string | null
    profile_photo_url?: string | null
    designation?: string | null
    employment_type: string
    join_date?: Date | string | null
    resign_date?: Date | string | null
    status: string
    created_at?: Date | string
    update_at?: Date | string
  }

  export type EmployeeUpdateManyMutationInput = {
    emp_id?: StringFieldUpdateOperationsInput | string
    employee_number?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    profile_photo_url?: NullableStringFieldUpdateOperationsInput | string | null
    designation?: NullableStringFieldUpdateOperationsInput | string | null
    employment_type?: StringFieldUpdateOperationsInput | string
    join_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resign_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmployeeUncheckedUpdateManyInput = {
    emp_id?: StringFieldUpdateOperationsInput | string
    org_id?: StringFieldUpdateOperationsInput | string
    dep_id?: NullableStringFieldUpdateOperationsInput | string | null
    employee_number?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    profile_photo_url?: NullableStringFieldUpdateOperationsInput | string | null
    designation?: NullableStringFieldUpdateOperationsInput | string | null
    employment_type?: StringFieldUpdateOperationsInput | string
    join_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resign_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrganizationCreateInput = {
    org_id?: string
    sub_id?: string | null
    name: string
    industry?: string | null
    registration_no?: string | null
    address?: string | null
    email: string
    password: string
    phone?: string | null
    logo_url?: string | null
    created_at?: Date | string
    update_at?: Date | string
    subscription?: SubscriptionCreateNestedOneWithoutOrganizationInput
    invoices?: InvoiceCreateNestedManyWithoutOrganizationInput
    departments?: DepartmentCreateNestedManyWithoutOrganizationInput
    employees?: EmployeeCreateNestedManyWithoutOrganizationInput
    attendances?: AttendanceCreateNestedManyWithoutOrganizationInput
    leave_requests?: LeaveRequestCreateNestedManyWithoutOrganizationInput
    petty_cash_requests?: PettyCashRequestCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationUncheckedCreateInput = {
    org_id?: string
    sub_id?: string | null
    name: string
    industry?: string | null
    registration_no?: string | null
    address?: string | null
    email: string
    password: string
    phone?: string | null
    logo_url?: string | null
    created_at?: Date | string
    update_at?: Date | string
    subscription?: SubscriptionUncheckedCreateNestedOneWithoutOrganizationInput
    invoices?: InvoiceUncheckedCreateNestedManyWithoutOrganizationInput
    departments?: DepartmentUncheckedCreateNestedManyWithoutOrganizationInput
    employees?: EmployeeUncheckedCreateNestedManyWithoutOrganizationInput
    attendances?: AttendanceUncheckedCreateNestedManyWithoutOrganizationInput
    leave_requests?: LeaveRequestUncheckedCreateNestedManyWithoutOrganizationInput
    petty_cash_requests?: PettyCashRequestUncheckedCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationUpdateInput = {
    org_id?: StringFieldUpdateOperationsInput | string
    sub_id?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    registration_no?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    logo_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
    subscription?: SubscriptionUpdateOneWithoutOrganizationNestedInput
    invoices?: InvoiceUpdateManyWithoutOrganizationNestedInput
    departments?: DepartmentUpdateManyWithoutOrganizationNestedInput
    employees?: EmployeeUpdateManyWithoutOrganizationNestedInput
    attendances?: AttendanceUpdateManyWithoutOrganizationNestedInput
    leave_requests?: LeaveRequestUpdateManyWithoutOrganizationNestedInput
    petty_cash_requests?: PettyCashRequestUpdateManyWithoutOrganizationNestedInput
  }

  export type OrganizationUncheckedUpdateInput = {
    org_id?: StringFieldUpdateOperationsInput | string
    sub_id?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    registration_no?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    logo_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
    subscription?: SubscriptionUncheckedUpdateOneWithoutOrganizationNestedInput
    invoices?: InvoiceUncheckedUpdateManyWithoutOrganizationNestedInput
    departments?: DepartmentUncheckedUpdateManyWithoutOrganizationNestedInput
    employees?: EmployeeUncheckedUpdateManyWithoutOrganizationNestedInput
    attendances?: AttendanceUncheckedUpdateManyWithoutOrganizationNestedInput
    leave_requests?: LeaveRequestUncheckedUpdateManyWithoutOrganizationNestedInput
    petty_cash_requests?: PettyCashRequestUncheckedUpdateManyWithoutOrganizationNestedInput
  }

  export type OrganizationCreateManyInput = {
    org_id?: string
    sub_id?: string | null
    name: string
    industry?: string | null
    registration_no?: string | null
    address?: string | null
    email: string
    password: string
    phone?: string | null
    logo_url?: string | null
    created_at?: Date | string
    update_at?: Date | string
  }

  export type OrganizationUpdateManyMutationInput = {
    org_id?: StringFieldUpdateOperationsInput | string
    sub_id?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    registration_no?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    logo_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrganizationUncheckedUpdateManyInput = {
    org_id?: StringFieldUpdateOperationsInput | string
    sub_id?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    registration_no?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    logo_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlanCreateInput = {
    plan_id?: string
    name: string
    description?: string | null
    price_monthly?: number | null
    price_annual?: number | null
    currency: string
    max_employees?: number | null
    is_active?: boolean
    created_at?: Date | string
    update_at?: Date | string
    subscriptions?: SubscriptionCreateNestedManyWithoutPlanInput
    features?: FeatureCreateNestedManyWithoutPlansInput
  }

  export type PlanUncheckedCreateInput = {
    plan_id?: string
    name: string
    description?: string | null
    price_monthly?: number | null
    price_annual?: number | null
    currency: string
    max_employees?: number | null
    is_active?: boolean
    created_at?: Date | string
    update_at?: Date | string
    subscriptions?: SubscriptionUncheckedCreateNestedManyWithoutPlanInput
    features?: FeatureUncheckedCreateNestedManyWithoutPlansInput
  }

  export type PlanUpdateInput = {
    plan_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price_monthly?: NullableFloatFieldUpdateOperationsInput | number | null
    price_annual?: NullableFloatFieldUpdateOperationsInput | number | null
    currency?: StringFieldUpdateOperationsInput | string
    max_employees?: NullableIntFieldUpdateOperationsInput | number | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
    subscriptions?: SubscriptionUpdateManyWithoutPlanNestedInput
    features?: FeatureUpdateManyWithoutPlansNestedInput
  }

  export type PlanUncheckedUpdateInput = {
    plan_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price_monthly?: NullableFloatFieldUpdateOperationsInput | number | null
    price_annual?: NullableFloatFieldUpdateOperationsInput | number | null
    currency?: StringFieldUpdateOperationsInput | string
    max_employees?: NullableIntFieldUpdateOperationsInput | number | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
    subscriptions?: SubscriptionUncheckedUpdateManyWithoutPlanNestedInput
    features?: FeatureUncheckedUpdateManyWithoutPlansNestedInput
  }

  export type PlanCreateManyInput = {
    plan_id?: string
    name: string
    description?: string | null
    price_monthly?: number | null
    price_annual?: number | null
    currency: string
    max_employees?: number | null
    is_active?: boolean
    created_at?: Date | string
    update_at?: Date | string
  }

  export type PlanUpdateManyMutationInput = {
    plan_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price_monthly?: NullableFloatFieldUpdateOperationsInput | number | null
    price_annual?: NullableFloatFieldUpdateOperationsInput | number | null
    currency?: StringFieldUpdateOperationsInput | string
    max_employees?: NullableIntFieldUpdateOperationsInput | number | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlanUncheckedUpdateManyInput = {
    plan_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price_monthly?: NullableFloatFieldUpdateOperationsInput | number | null
    price_annual?: NullableFloatFieldUpdateOperationsInput | number | null
    currency?: StringFieldUpdateOperationsInput | string
    max_employees?: NullableIntFieldUpdateOperationsInput | number | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeatureCreateInput = {
    fet_id?: string
    name: string
    created_at?: Date | string
    update_at?: Date | string
    plans?: PlanCreateNestedManyWithoutFeaturesInput
  }

  export type FeatureUncheckedCreateInput = {
    fet_id?: string
    name: string
    created_at?: Date | string
    update_at?: Date | string
    plans?: PlanUncheckedCreateNestedManyWithoutFeaturesInput
  }

  export type FeatureUpdateInput = {
    fet_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
    plans?: PlanUpdateManyWithoutFeaturesNestedInput
  }

  export type FeatureUncheckedUpdateInput = {
    fet_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
    plans?: PlanUncheckedUpdateManyWithoutFeaturesNestedInput
  }

  export type FeatureCreateManyInput = {
    fet_id?: string
    name: string
    created_at?: Date | string
    update_at?: Date | string
  }

  export type FeatureUpdateManyMutationInput = {
    fet_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeatureUncheckedUpdateManyInput = {
    fet_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvoiceCreateInput = {
    invoice_id?: string
    amount: number
    currency: string
    renewal_date?: Date | string | null
    issue_date: Date | string
    due_date: Date | string
    paid_date?: Date | string | null
    receipt?: string | null
    status: string
    cancelled_at?: Date | string | null
    payment_method?: string | null
    created_at?: Date | string
    update_at?: Date | string
    organization: OrganizationCreateNestedOneWithoutInvoicesInput
    subscription: SubscriptionCreateNestedOneWithoutInvoicesInput
  }

  export type InvoiceUncheckedCreateInput = {
    invoice_id?: string
    org_id: string
    sub_id: string
    amount: number
    currency: string
    renewal_date?: Date | string | null
    issue_date: Date | string
    due_date: Date | string
    paid_date?: Date | string | null
    receipt?: string | null
    status: string
    cancelled_at?: Date | string | null
    payment_method?: string | null
    created_at?: Date | string
    update_at?: Date | string
  }

  export type InvoiceUpdateInput = {
    invoice_id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    renewal_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    issue_date?: DateTimeFieldUpdateOperationsInput | Date | string
    due_date?: DateTimeFieldUpdateOperationsInput | Date | string
    paid_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    receipt?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    cancelled_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    payment_method?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
    organization?: OrganizationUpdateOneRequiredWithoutInvoicesNestedInput
    subscription?: SubscriptionUpdateOneRequiredWithoutInvoicesNestedInput
  }

  export type InvoiceUncheckedUpdateInput = {
    invoice_id?: StringFieldUpdateOperationsInput | string
    org_id?: StringFieldUpdateOperationsInput | string
    sub_id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    renewal_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    issue_date?: DateTimeFieldUpdateOperationsInput | Date | string
    due_date?: DateTimeFieldUpdateOperationsInput | Date | string
    paid_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    receipt?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    cancelled_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    payment_method?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvoiceCreateManyInput = {
    invoice_id?: string
    org_id: string
    sub_id: string
    amount: number
    currency: string
    renewal_date?: Date | string | null
    issue_date: Date | string
    due_date: Date | string
    paid_date?: Date | string | null
    receipt?: string | null
    status: string
    cancelled_at?: Date | string | null
    payment_method?: string | null
    created_at?: Date | string
    update_at?: Date | string
  }

  export type InvoiceUpdateManyMutationInput = {
    invoice_id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    renewal_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    issue_date?: DateTimeFieldUpdateOperationsInput | Date | string
    due_date?: DateTimeFieldUpdateOperationsInput | Date | string
    paid_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    receipt?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    cancelled_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    payment_method?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvoiceUncheckedUpdateManyInput = {
    invoice_id?: StringFieldUpdateOperationsInput | string
    org_id?: StringFieldUpdateOperationsInput | string
    sub_id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    renewal_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    issue_date?: DateTimeFieldUpdateOperationsInput | Date | string
    due_date?: DateTimeFieldUpdateOperationsInput | Date | string
    paid_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    receipt?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    cancelled_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    payment_method?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttendanceCreateInput = {
    att_id?: string
    date: Date | string
    check_in_time?: Date | string | null
    check_in_location?: string | null
    check_out_time?: Date | string | null
    check_out_location?: string | null
    work_hours?: number | null
    status: string
    created_at?: Date | string
    update_at?: Date | string
    organization: OrganizationCreateNestedOneWithoutAttendancesInput
    employee: EmployeeCreateNestedOneWithoutAttendancesInput
  }

  export type AttendanceUncheckedCreateInput = {
    att_id?: string
    org_id: string
    emp_id: string
    date: Date | string
    check_in_time?: Date | string | null
    check_in_location?: string | null
    check_out_time?: Date | string | null
    check_out_location?: string | null
    work_hours?: number | null
    status: string
    created_at?: Date | string
    update_at?: Date | string
  }

  export type AttendanceUpdateInput = {
    att_id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    check_in_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    check_in_location?: NullableStringFieldUpdateOperationsInput | string | null
    check_out_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    check_out_location?: NullableStringFieldUpdateOperationsInput | string | null
    work_hours?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
    organization?: OrganizationUpdateOneRequiredWithoutAttendancesNestedInput
    employee?: EmployeeUpdateOneRequiredWithoutAttendancesNestedInput
  }

  export type AttendanceUncheckedUpdateInput = {
    att_id?: StringFieldUpdateOperationsInput | string
    org_id?: StringFieldUpdateOperationsInput | string
    emp_id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    check_in_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    check_in_location?: NullableStringFieldUpdateOperationsInput | string | null
    check_out_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    check_out_location?: NullableStringFieldUpdateOperationsInput | string | null
    work_hours?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttendanceCreateManyInput = {
    att_id?: string
    org_id: string
    emp_id: string
    date: Date | string
    check_in_time?: Date | string | null
    check_in_location?: string | null
    check_out_time?: Date | string | null
    check_out_location?: string | null
    work_hours?: number | null
    status: string
    created_at?: Date | string
    update_at?: Date | string
  }

  export type AttendanceUpdateManyMutationInput = {
    att_id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    check_in_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    check_in_location?: NullableStringFieldUpdateOperationsInput | string | null
    check_out_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    check_out_location?: NullableStringFieldUpdateOperationsInput | string | null
    work_hours?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttendanceUncheckedUpdateManyInput = {
    att_id?: StringFieldUpdateOperationsInput | string
    org_id?: StringFieldUpdateOperationsInput | string
    emp_id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    check_in_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    check_in_location?: NullableStringFieldUpdateOperationsInput | string | null
    check_out_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    check_out_location?: NullableStringFieldUpdateOperationsInput | string | null
    work_hours?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeaveRequestCreateInput = {
    leave_id?: string
    leave_type: string
    start_date: Date | string
    end_date: Date | string
    reason?: string | null
    attachments?: string | null
    approved_date?: Date | string | null
    status: string
    created_at?: Date | string
    update_at?: Date | string
    organization: OrganizationCreateNestedOneWithoutLeave_requestsInput
    employee: EmployeeCreateNestedOneWithoutLeave_requestsInput
    approver?: EmployeeCreateNestedOneWithoutApproved_leavesInput
  }

  export type LeaveRequestUncheckedCreateInput = {
    leave_id?: string
    org_id: string
    emp_id: string
    leave_type: string
    start_date: Date | string
    end_date: Date | string
    reason?: string | null
    attachments?: string | null
    approved_by?: string | null
    approved_date?: Date | string | null
    status: string
    created_at?: Date | string
    update_at?: Date | string
  }

  export type LeaveRequestUpdateInput = {
    leave_id?: StringFieldUpdateOperationsInput | string
    leave_type?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    attachments?: NullableStringFieldUpdateOperationsInput | string | null
    approved_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
    organization?: OrganizationUpdateOneRequiredWithoutLeave_requestsNestedInput
    employee?: EmployeeUpdateOneRequiredWithoutLeave_requestsNestedInput
    approver?: EmployeeUpdateOneWithoutApproved_leavesNestedInput
  }

  export type LeaveRequestUncheckedUpdateInput = {
    leave_id?: StringFieldUpdateOperationsInput | string
    org_id?: StringFieldUpdateOperationsInput | string
    emp_id?: StringFieldUpdateOperationsInput | string
    leave_type?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    attachments?: NullableStringFieldUpdateOperationsInput | string | null
    approved_by?: NullableStringFieldUpdateOperationsInput | string | null
    approved_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeaveRequestCreateManyInput = {
    leave_id?: string
    org_id: string
    emp_id: string
    leave_type: string
    start_date: Date | string
    end_date: Date | string
    reason?: string | null
    attachments?: string | null
    approved_by?: string | null
    approved_date?: Date | string | null
    status: string
    created_at?: Date | string
    update_at?: Date | string
  }

  export type LeaveRequestUpdateManyMutationInput = {
    leave_id?: StringFieldUpdateOperationsInput | string
    leave_type?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    attachments?: NullableStringFieldUpdateOperationsInput | string | null
    approved_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeaveRequestUncheckedUpdateManyInput = {
    leave_id?: StringFieldUpdateOperationsInput | string
    org_id?: StringFieldUpdateOperationsInput | string
    emp_id?: StringFieldUpdateOperationsInput | string
    leave_type?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    attachments?: NullableStringFieldUpdateOperationsInput | string | null
    approved_by?: NullableStringFieldUpdateOperationsInput | string | null
    approved_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PettyCashRequestCreateInput = {
    pet_id?: string
    amount: number
    currency: string
    reason?: string | null
    request_date: Date | string
    request_type: string
    attachments?: string | null
    approved_date?: Date | string | null
    status: string
    created_at?: Date | string
    update_at?: Date | string
    organization: OrganizationCreateNestedOneWithoutPetty_cash_requestsInput
    employee: EmployeeCreateNestedOneWithoutPetty_cash_requestsInput
    approver?: EmployeeCreateNestedOneWithoutApproved_petty_cashInput
  }

  export type PettyCashRequestUncheckedCreateInput = {
    pet_id?: string
    org_id: string
    emp_id: string
    amount: number
    currency: string
    reason?: string | null
    request_date: Date | string
    request_type: string
    attachments?: string | null
    approved_date?: Date | string | null
    approved_by?: string | null
    status: string
    created_at?: Date | string
    update_at?: Date | string
  }

  export type PettyCashRequestUpdateInput = {
    pet_id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    request_date?: DateTimeFieldUpdateOperationsInput | Date | string
    request_type?: StringFieldUpdateOperationsInput | string
    attachments?: NullableStringFieldUpdateOperationsInput | string | null
    approved_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
    organization?: OrganizationUpdateOneRequiredWithoutPetty_cash_requestsNestedInput
    employee?: EmployeeUpdateOneRequiredWithoutPetty_cash_requestsNestedInput
    approver?: EmployeeUpdateOneWithoutApproved_petty_cashNestedInput
  }

  export type PettyCashRequestUncheckedUpdateInput = {
    pet_id?: StringFieldUpdateOperationsInput | string
    org_id?: StringFieldUpdateOperationsInput | string
    emp_id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    request_date?: DateTimeFieldUpdateOperationsInput | Date | string
    request_type?: StringFieldUpdateOperationsInput | string
    attachments?: NullableStringFieldUpdateOperationsInput | string | null
    approved_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approved_by?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PettyCashRequestCreateManyInput = {
    pet_id?: string
    org_id: string
    emp_id: string
    amount: number
    currency: string
    reason?: string | null
    request_date: Date | string
    request_type: string
    attachments?: string | null
    approved_date?: Date | string | null
    approved_by?: string | null
    status: string
    created_at?: Date | string
    update_at?: Date | string
  }

  export type PettyCashRequestUpdateManyMutationInput = {
    pet_id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    request_date?: DateTimeFieldUpdateOperationsInput | Date | string
    request_type?: StringFieldUpdateOperationsInput | string
    attachments?: NullableStringFieldUpdateOperationsInput | string | null
    approved_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PettyCashRequestUncheckedUpdateManyInput = {
    pet_id?: StringFieldUpdateOperationsInput | string
    org_id?: StringFieldUpdateOperationsInput | string
    emp_id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    request_date?: DateTimeFieldUpdateOperationsInput | Date | string
    request_type?: StringFieldUpdateOperationsInput | string
    attachments?: NullableStringFieldUpdateOperationsInput | string | null
    approved_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approved_by?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type UuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type OrganizationNullableScalarRelationFilter = {
    is?: OrganizationWhereInput | null
    isNot?: OrganizationWhereInput | null
  }

  export type PlanNullableScalarRelationFilter = {
    is?: PlanWhereInput | null
    isNot?: PlanWhereInput | null
  }

  export type InvoiceListRelationFilter = {
    every?: InvoiceWhereInput
    some?: InvoiceWhereInput
    none?: InvoiceWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type InvoiceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SubscriptionCountOrderByAggregateInput = {
    sub_id?: SortOrder
    org_id?: SortOrder
    plan_id?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    renewal_date?: SortOrder
    billing_cycle?: SortOrder
    status?: SortOrder
    auto_renew?: SortOrder
    trial_end_date?: SortOrder
    cancelled_at?: SortOrder
    payment_method?: SortOrder
    created_at?: SortOrder
    update_at?: SortOrder
  }

  export type SubscriptionMaxOrderByAggregateInput = {
    sub_id?: SortOrder
    org_id?: SortOrder
    plan_id?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    renewal_date?: SortOrder
    billing_cycle?: SortOrder
    status?: SortOrder
    auto_renew?: SortOrder
    trial_end_date?: SortOrder
    cancelled_at?: SortOrder
    payment_method?: SortOrder
    created_at?: SortOrder
    update_at?: SortOrder
  }

  export type SubscriptionMinOrderByAggregateInput = {
    sub_id?: SortOrder
    org_id?: SortOrder
    plan_id?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    renewal_date?: SortOrder
    billing_cycle?: SortOrder
    status?: SortOrder
    auto_renew?: SortOrder
    trial_end_date?: SortOrder
    cancelled_at?: SortOrder
    payment_method?: SortOrder
    created_at?: SortOrder
    update_at?: SortOrder
  }

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type UuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type OrganizationScalarRelationFilter = {
    is?: OrganizationWhereInput
    isNot?: OrganizationWhereInput
  }

  export type DepartmentNullableScalarRelationFilter = {
    is?: DepartmentWhereInput | null
    isNot?: DepartmentWhereInput | null
  }

  export type DepartmentListRelationFilter = {
    every?: DepartmentWhereInput
    some?: DepartmentWhereInput
    none?: DepartmentWhereInput
  }

  export type EmployeeNullableScalarRelationFilter = {
    is?: EmployeeWhereInput | null
    isNot?: EmployeeWhereInput | null
  }

  export type EmployeeListRelationFilter = {
    every?: EmployeeWhereInput
    some?: EmployeeWhereInput
    none?: EmployeeWhereInput
  }

  export type DepartmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EmployeeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DepartmentCountOrderByAggregateInput = {
    dep_id?: SortOrder
    org_id?: SortOrder
    name?: SortOrder
    head_id?: SortOrder
    parent_department_id?: SortOrder
    created_at?: SortOrder
    update_at?: SortOrder
  }

  export type DepartmentMaxOrderByAggregateInput = {
    dep_id?: SortOrder
    org_id?: SortOrder
    name?: SortOrder
    head_id?: SortOrder
    parent_department_id?: SortOrder
    created_at?: SortOrder
    update_at?: SortOrder
  }

  export type DepartmentMinOrderByAggregateInput = {
    dep_id?: SortOrder
    org_id?: SortOrder
    name?: SortOrder
    head_id?: SortOrder
    parent_department_id?: SortOrder
    created_at?: SortOrder
    update_at?: SortOrder
  }

  export type AttendanceListRelationFilter = {
    every?: AttendanceWhereInput
    some?: AttendanceWhereInput
    none?: AttendanceWhereInput
  }

  export type LeaveRequestListRelationFilter = {
    every?: LeaveRequestWhereInput
    some?: LeaveRequestWhereInput
    none?: LeaveRequestWhereInput
  }

  export type PettyCashRequestListRelationFilter = {
    every?: PettyCashRequestWhereInput
    some?: PettyCashRequestWhereInput
    none?: PettyCashRequestWhereInput
  }

  export type AttendanceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LeaveRequestOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PettyCashRequestOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EmployeeCountOrderByAggregateInput = {
    emp_id?: SortOrder
    org_id?: SortOrder
    dep_id?: SortOrder
    employee_number?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone?: SortOrder
    profile_photo_url?: SortOrder
    designation?: SortOrder
    employment_type?: SortOrder
    join_date?: SortOrder
    resign_date?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    update_at?: SortOrder
  }

  export type EmployeeMaxOrderByAggregateInput = {
    emp_id?: SortOrder
    org_id?: SortOrder
    dep_id?: SortOrder
    employee_number?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone?: SortOrder
    profile_photo_url?: SortOrder
    designation?: SortOrder
    employment_type?: SortOrder
    join_date?: SortOrder
    resign_date?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    update_at?: SortOrder
  }

  export type EmployeeMinOrderByAggregateInput = {
    emp_id?: SortOrder
    org_id?: SortOrder
    dep_id?: SortOrder
    employee_number?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone?: SortOrder
    profile_photo_url?: SortOrder
    designation?: SortOrder
    employment_type?: SortOrder
    join_date?: SortOrder
    resign_date?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    update_at?: SortOrder
  }

  export type SubscriptionNullableScalarRelationFilter = {
    is?: SubscriptionWhereInput | null
    isNot?: SubscriptionWhereInput | null
  }

  export type OrganizationCountOrderByAggregateInput = {
    org_id?: SortOrder
    sub_id?: SortOrder
    name?: SortOrder
    industry?: SortOrder
    registration_no?: SortOrder
    address?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone?: SortOrder
    logo_url?: SortOrder
    created_at?: SortOrder
    update_at?: SortOrder
  }

  export type OrganizationMaxOrderByAggregateInput = {
    org_id?: SortOrder
    sub_id?: SortOrder
    name?: SortOrder
    industry?: SortOrder
    registration_no?: SortOrder
    address?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone?: SortOrder
    logo_url?: SortOrder
    created_at?: SortOrder
    update_at?: SortOrder
  }

  export type OrganizationMinOrderByAggregateInput = {
    org_id?: SortOrder
    sub_id?: SortOrder
    name?: SortOrder
    industry?: SortOrder
    registration_no?: SortOrder
    address?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone?: SortOrder
    logo_url?: SortOrder
    created_at?: SortOrder
    update_at?: SortOrder
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type SubscriptionListRelationFilter = {
    every?: SubscriptionWhereInput
    some?: SubscriptionWhereInput
    none?: SubscriptionWhereInput
  }

  export type FeatureListRelationFilter = {
    every?: FeatureWhereInput
    some?: FeatureWhereInput
    none?: FeatureWhereInput
  }

  export type SubscriptionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FeatureOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PlanCountOrderByAggregateInput = {
    plan_id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price_monthly?: SortOrder
    price_annual?: SortOrder
    currency?: SortOrder
    max_employees?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    update_at?: SortOrder
  }

  export type PlanAvgOrderByAggregateInput = {
    price_monthly?: SortOrder
    price_annual?: SortOrder
    max_employees?: SortOrder
  }

  export type PlanMaxOrderByAggregateInput = {
    plan_id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price_monthly?: SortOrder
    price_annual?: SortOrder
    currency?: SortOrder
    max_employees?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    update_at?: SortOrder
  }

  export type PlanMinOrderByAggregateInput = {
    plan_id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price_monthly?: SortOrder
    price_annual?: SortOrder
    currency?: SortOrder
    max_employees?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    update_at?: SortOrder
  }

  export type PlanSumOrderByAggregateInput = {
    price_monthly?: SortOrder
    price_annual?: SortOrder
    max_employees?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type PlanListRelationFilter = {
    every?: PlanWhereInput
    some?: PlanWhereInput
    none?: PlanWhereInput
  }

  export type PlanOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FeatureCountOrderByAggregateInput = {
    fet_id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    update_at?: SortOrder
  }

  export type FeatureMaxOrderByAggregateInput = {
    fet_id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    update_at?: SortOrder
  }

  export type FeatureMinOrderByAggregateInput = {
    fet_id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    update_at?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type SubscriptionScalarRelationFilter = {
    is?: SubscriptionWhereInput
    isNot?: SubscriptionWhereInput
  }

  export type InvoiceCountOrderByAggregateInput = {
    invoice_id?: SortOrder
    org_id?: SortOrder
    sub_id?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    renewal_date?: SortOrder
    issue_date?: SortOrder
    due_date?: SortOrder
    paid_date?: SortOrder
    receipt?: SortOrder
    status?: SortOrder
    cancelled_at?: SortOrder
    payment_method?: SortOrder
    created_at?: SortOrder
    update_at?: SortOrder
  }

  export type InvoiceAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type InvoiceMaxOrderByAggregateInput = {
    invoice_id?: SortOrder
    org_id?: SortOrder
    sub_id?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    renewal_date?: SortOrder
    issue_date?: SortOrder
    due_date?: SortOrder
    paid_date?: SortOrder
    receipt?: SortOrder
    status?: SortOrder
    cancelled_at?: SortOrder
    payment_method?: SortOrder
    created_at?: SortOrder
    update_at?: SortOrder
  }

  export type InvoiceMinOrderByAggregateInput = {
    invoice_id?: SortOrder
    org_id?: SortOrder
    sub_id?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    renewal_date?: SortOrder
    issue_date?: SortOrder
    due_date?: SortOrder
    paid_date?: SortOrder
    receipt?: SortOrder
    status?: SortOrder
    cancelled_at?: SortOrder
    payment_method?: SortOrder
    created_at?: SortOrder
    update_at?: SortOrder
  }

  export type InvoiceSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type EmployeeScalarRelationFilter = {
    is?: EmployeeWhereInput
    isNot?: EmployeeWhereInput
  }

  export type AttendanceCountOrderByAggregateInput = {
    att_id?: SortOrder
    org_id?: SortOrder
    emp_id?: SortOrder
    date?: SortOrder
    check_in_time?: SortOrder
    check_in_location?: SortOrder
    check_out_time?: SortOrder
    check_out_location?: SortOrder
    work_hours?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    update_at?: SortOrder
  }

  export type AttendanceAvgOrderByAggregateInput = {
    work_hours?: SortOrder
  }

  export type AttendanceMaxOrderByAggregateInput = {
    att_id?: SortOrder
    org_id?: SortOrder
    emp_id?: SortOrder
    date?: SortOrder
    check_in_time?: SortOrder
    check_in_location?: SortOrder
    check_out_time?: SortOrder
    check_out_location?: SortOrder
    work_hours?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    update_at?: SortOrder
  }

  export type AttendanceMinOrderByAggregateInput = {
    att_id?: SortOrder
    org_id?: SortOrder
    emp_id?: SortOrder
    date?: SortOrder
    check_in_time?: SortOrder
    check_in_location?: SortOrder
    check_out_time?: SortOrder
    check_out_location?: SortOrder
    work_hours?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    update_at?: SortOrder
  }

  export type AttendanceSumOrderByAggregateInput = {
    work_hours?: SortOrder
  }

  export type LeaveRequestCountOrderByAggregateInput = {
    leave_id?: SortOrder
    org_id?: SortOrder
    emp_id?: SortOrder
    leave_type?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    reason?: SortOrder
    attachments?: SortOrder
    approved_by?: SortOrder
    approved_date?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    update_at?: SortOrder
  }

  export type LeaveRequestMaxOrderByAggregateInput = {
    leave_id?: SortOrder
    org_id?: SortOrder
    emp_id?: SortOrder
    leave_type?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    reason?: SortOrder
    attachments?: SortOrder
    approved_by?: SortOrder
    approved_date?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    update_at?: SortOrder
  }

  export type LeaveRequestMinOrderByAggregateInput = {
    leave_id?: SortOrder
    org_id?: SortOrder
    emp_id?: SortOrder
    leave_type?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    reason?: SortOrder
    attachments?: SortOrder
    approved_by?: SortOrder
    approved_date?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    update_at?: SortOrder
  }

  export type PettyCashRequestCountOrderByAggregateInput = {
    pet_id?: SortOrder
    org_id?: SortOrder
    emp_id?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    reason?: SortOrder
    request_date?: SortOrder
    request_type?: SortOrder
    attachments?: SortOrder
    approved_date?: SortOrder
    approved_by?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    update_at?: SortOrder
  }

  export type PettyCashRequestAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type PettyCashRequestMaxOrderByAggregateInput = {
    pet_id?: SortOrder
    org_id?: SortOrder
    emp_id?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    reason?: SortOrder
    request_date?: SortOrder
    request_type?: SortOrder
    attachments?: SortOrder
    approved_date?: SortOrder
    approved_by?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    update_at?: SortOrder
  }

  export type PettyCashRequestMinOrderByAggregateInput = {
    pet_id?: SortOrder
    org_id?: SortOrder
    emp_id?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    reason?: SortOrder
    request_date?: SortOrder
    request_type?: SortOrder
    attachments?: SortOrder
    approved_date?: SortOrder
    approved_by?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    update_at?: SortOrder
  }

  export type PettyCashRequestSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type OrganizationCreateNestedOneWithoutSubscriptionInput = {
    create?: XOR<OrganizationCreateWithoutSubscriptionInput, OrganizationUncheckedCreateWithoutSubscriptionInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutSubscriptionInput
    connect?: OrganizationWhereUniqueInput
  }

  export type PlanCreateNestedOneWithoutSubscriptionsInput = {
    create?: XOR<PlanCreateWithoutSubscriptionsInput, PlanUncheckedCreateWithoutSubscriptionsInput>
    connectOrCreate?: PlanCreateOrConnectWithoutSubscriptionsInput
    connect?: PlanWhereUniqueInput
  }

  export type InvoiceCreateNestedManyWithoutSubscriptionInput = {
    create?: XOR<InvoiceCreateWithoutSubscriptionInput, InvoiceUncheckedCreateWithoutSubscriptionInput> | InvoiceCreateWithoutSubscriptionInput[] | InvoiceUncheckedCreateWithoutSubscriptionInput[]
    connectOrCreate?: InvoiceCreateOrConnectWithoutSubscriptionInput | InvoiceCreateOrConnectWithoutSubscriptionInput[]
    createMany?: InvoiceCreateManySubscriptionInputEnvelope
    connect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
  }

  export type InvoiceUncheckedCreateNestedManyWithoutSubscriptionInput = {
    create?: XOR<InvoiceCreateWithoutSubscriptionInput, InvoiceUncheckedCreateWithoutSubscriptionInput> | InvoiceCreateWithoutSubscriptionInput[] | InvoiceUncheckedCreateWithoutSubscriptionInput[]
    connectOrCreate?: InvoiceCreateOrConnectWithoutSubscriptionInput | InvoiceCreateOrConnectWithoutSubscriptionInput[]
    createMany?: InvoiceCreateManySubscriptionInputEnvelope
    connect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type OrganizationUpdateOneWithoutSubscriptionNestedInput = {
    create?: XOR<OrganizationCreateWithoutSubscriptionInput, OrganizationUncheckedCreateWithoutSubscriptionInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutSubscriptionInput
    upsert?: OrganizationUpsertWithoutSubscriptionInput
    disconnect?: OrganizationWhereInput | boolean
    delete?: OrganizationWhereInput | boolean
    connect?: OrganizationWhereUniqueInput
    update?: XOR<XOR<OrganizationUpdateToOneWithWhereWithoutSubscriptionInput, OrganizationUpdateWithoutSubscriptionInput>, OrganizationUncheckedUpdateWithoutSubscriptionInput>
  }

  export type PlanUpdateOneWithoutSubscriptionsNestedInput = {
    create?: XOR<PlanCreateWithoutSubscriptionsInput, PlanUncheckedCreateWithoutSubscriptionsInput>
    connectOrCreate?: PlanCreateOrConnectWithoutSubscriptionsInput
    upsert?: PlanUpsertWithoutSubscriptionsInput
    disconnect?: PlanWhereInput | boolean
    delete?: PlanWhereInput | boolean
    connect?: PlanWhereUniqueInput
    update?: XOR<XOR<PlanUpdateToOneWithWhereWithoutSubscriptionsInput, PlanUpdateWithoutSubscriptionsInput>, PlanUncheckedUpdateWithoutSubscriptionsInput>
  }

  export type InvoiceUpdateManyWithoutSubscriptionNestedInput = {
    create?: XOR<InvoiceCreateWithoutSubscriptionInput, InvoiceUncheckedCreateWithoutSubscriptionInput> | InvoiceCreateWithoutSubscriptionInput[] | InvoiceUncheckedCreateWithoutSubscriptionInput[]
    connectOrCreate?: InvoiceCreateOrConnectWithoutSubscriptionInput | InvoiceCreateOrConnectWithoutSubscriptionInput[]
    upsert?: InvoiceUpsertWithWhereUniqueWithoutSubscriptionInput | InvoiceUpsertWithWhereUniqueWithoutSubscriptionInput[]
    createMany?: InvoiceCreateManySubscriptionInputEnvelope
    set?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    disconnect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    delete?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    connect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    update?: InvoiceUpdateWithWhereUniqueWithoutSubscriptionInput | InvoiceUpdateWithWhereUniqueWithoutSubscriptionInput[]
    updateMany?: InvoiceUpdateManyWithWhereWithoutSubscriptionInput | InvoiceUpdateManyWithWhereWithoutSubscriptionInput[]
    deleteMany?: InvoiceScalarWhereInput | InvoiceScalarWhereInput[]
  }

  export type InvoiceUncheckedUpdateManyWithoutSubscriptionNestedInput = {
    create?: XOR<InvoiceCreateWithoutSubscriptionInput, InvoiceUncheckedCreateWithoutSubscriptionInput> | InvoiceCreateWithoutSubscriptionInput[] | InvoiceUncheckedCreateWithoutSubscriptionInput[]
    connectOrCreate?: InvoiceCreateOrConnectWithoutSubscriptionInput | InvoiceCreateOrConnectWithoutSubscriptionInput[]
    upsert?: InvoiceUpsertWithWhereUniqueWithoutSubscriptionInput | InvoiceUpsertWithWhereUniqueWithoutSubscriptionInput[]
    createMany?: InvoiceCreateManySubscriptionInputEnvelope
    set?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    disconnect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    delete?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    connect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    update?: InvoiceUpdateWithWhereUniqueWithoutSubscriptionInput | InvoiceUpdateWithWhereUniqueWithoutSubscriptionInput[]
    updateMany?: InvoiceUpdateManyWithWhereWithoutSubscriptionInput | InvoiceUpdateManyWithWhereWithoutSubscriptionInput[]
    deleteMany?: InvoiceScalarWhereInput | InvoiceScalarWhereInput[]
  }

  export type OrganizationCreateNestedOneWithoutDepartmentsInput = {
    create?: XOR<OrganizationCreateWithoutDepartmentsInput, OrganizationUncheckedCreateWithoutDepartmentsInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutDepartmentsInput
    connect?: OrganizationWhereUniqueInput
  }

  export type DepartmentCreateNestedOneWithoutSub_departmentsInput = {
    create?: XOR<DepartmentCreateWithoutSub_departmentsInput, DepartmentUncheckedCreateWithoutSub_departmentsInput>
    connectOrCreate?: DepartmentCreateOrConnectWithoutSub_departmentsInput
    connect?: DepartmentWhereUniqueInput
  }

  export type DepartmentCreateNestedManyWithoutParent_departmentInput = {
    create?: XOR<DepartmentCreateWithoutParent_departmentInput, DepartmentUncheckedCreateWithoutParent_departmentInput> | DepartmentCreateWithoutParent_departmentInput[] | DepartmentUncheckedCreateWithoutParent_departmentInput[]
    connectOrCreate?: DepartmentCreateOrConnectWithoutParent_departmentInput | DepartmentCreateOrConnectWithoutParent_departmentInput[]
    createMany?: DepartmentCreateManyParent_departmentInputEnvelope
    connect?: DepartmentWhereUniqueInput | DepartmentWhereUniqueInput[]
  }

  export type EmployeeCreateNestedOneWithoutHeaded_departmentInput = {
    create?: XOR<EmployeeCreateWithoutHeaded_departmentInput, EmployeeUncheckedCreateWithoutHeaded_departmentInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutHeaded_departmentInput
    connect?: EmployeeWhereUniqueInput
  }

  export type EmployeeCreateNestedManyWithoutDepartmentInput = {
    create?: XOR<EmployeeCreateWithoutDepartmentInput, EmployeeUncheckedCreateWithoutDepartmentInput> | EmployeeCreateWithoutDepartmentInput[] | EmployeeUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: EmployeeCreateOrConnectWithoutDepartmentInput | EmployeeCreateOrConnectWithoutDepartmentInput[]
    createMany?: EmployeeCreateManyDepartmentInputEnvelope
    connect?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
  }

  export type DepartmentUncheckedCreateNestedManyWithoutParent_departmentInput = {
    create?: XOR<DepartmentCreateWithoutParent_departmentInput, DepartmentUncheckedCreateWithoutParent_departmentInput> | DepartmentCreateWithoutParent_departmentInput[] | DepartmentUncheckedCreateWithoutParent_departmentInput[]
    connectOrCreate?: DepartmentCreateOrConnectWithoutParent_departmentInput | DepartmentCreateOrConnectWithoutParent_departmentInput[]
    createMany?: DepartmentCreateManyParent_departmentInputEnvelope
    connect?: DepartmentWhereUniqueInput | DepartmentWhereUniqueInput[]
  }

  export type EmployeeUncheckedCreateNestedManyWithoutDepartmentInput = {
    create?: XOR<EmployeeCreateWithoutDepartmentInput, EmployeeUncheckedCreateWithoutDepartmentInput> | EmployeeCreateWithoutDepartmentInput[] | EmployeeUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: EmployeeCreateOrConnectWithoutDepartmentInput | EmployeeCreateOrConnectWithoutDepartmentInput[]
    createMany?: EmployeeCreateManyDepartmentInputEnvelope
    connect?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
  }

  export type OrganizationUpdateOneRequiredWithoutDepartmentsNestedInput = {
    create?: XOR<OrganizationCreateWithoutDepartmentsInput, OrganizationUncheckedCreateWithoutDepartmentsInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutDepartmentsInput
    upsert?: OrganizationUpsertWithoutDepartmentsInput
    connect?: OrganizationWhereUniqueInput
    update?: XOR<XOR<OrganizationUpdateToOneWithWhereWithoutDepartmentsInput, OrganizationUpdateWithoutDepartmentsInput>, OrganizationUncheckedUpdateWithoutDepartmentsInput>
  }

  export type DepartmentUpdateOneWithoutSub_departmentsNestedInput = {
    create?: XOR<DepartmentCreateWithoutSub_departmentsInput, DepartmentUncheckedCreateWithoutSub_departmentsInput>
    connectOrCreate?: DepartmentCreateOrConnectWithoutSub_departmentsInput
    upsert?: DepartmentUpsertWithoutSub_departmentsInput
    disconnect?: DepartmentWhereInput | boolean
    delete?: DepartmentWhereInput | boolean
    connect?: DepartmentWhereUniqueInput
    update?: XOR<XOR<DepartmentUpdateToOneWithWhereWithoutSub_departmentsInput, DepartmentUpdateWithoutSub_departmentsInput>, DepartmentUncheckedUpdateWithoutSub_departmentsInput>
  }

  export type DepartmentUpdateManyWithoutParent_departmentNestedInput = {
    create?: XOR<DepartmentCreateWithoutParent_departmentInput, DepartmentUncheckedCreateWithoutParent_departmentInput> | DepartmentCreateWithoutParent_departmentInput[] | DepartmentUncheckedCreateWithoutParent_departmentInput[]
    connectOrCreate?: DepartmentCreateOrConnectWithoutParent_departmentInput | DepartmentCreateOrConnectWithoutParent_departmentInput[]
    upsert?: DepartmentUpsertWithWhereUniqueWithoutParent_departmentInput | DepartmentUpsertWithWhereUniqueWithoutParent_departmentInput[]
    createMany?: DepartmentCreateManyParent_departmentInputEnvelope
    set?: DepartmentWhereUniqueInput | DepartmentWhereUniqueInput[]
    disconnect?: DepartmentWhereUniqueInput | DepartmentWhereUniqueInput[]
    delete?: DepartmentWhereUniqueInput | DepartmentWhereUniqueInput[]
    connect?: DepartmentWhereUniqueInput | DepartmentWhereUniqueInput[]
    update?: DepartmentUpdateWithWhereUniqueWithoutParent_departmentInput | DepartmentUpdateWithWhereUniqueWithoutParent_departmentInput[]
    updateMany?: DepartmentUpdateManyWithWhereWithoutParent_departmentInput | DepartmentUpdateManyWithWhereWithoutParent_departmentInput[]
    deleteMany?: DepartmentScalarWhereInput | DepartmentScalarWhereInput[]
  }

  export type EmployeeUpdateOneWithoutHeaded_departmentNestedInput = {
    create?: XOR<EmployeeCreateWithoutHeaded_departmentInput, EmployeeUncheckedCreateWithoutHeaded_departmentInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutHeaded_departmentInput
    upsert?: EmployeeUpsertWithoutHeaded_departmentInput
    disconnect?: EmployeeWhereInput | boolean
    delete?: EmployeeWhereInput | boolean
    connect?: EmployeeWhereUniqueInput
    update?: XOR<XOR<EmployeeUpdateToOneWithWhereWithoutHeaded_departmentInput, EmployeeUpdateWithoutHeaded_departmentInput>, EmployeeUncheckedUpdateWithoutHeaded_departmentInput>
  }

  export type EmployeeUpdateManyWithoutDepartmentNestedInput = {
    create?: XOR<EmployeeCreateWithoutDepartmentInput, EmployeeUncheckedCreateWithoutDepartmentInput> | EmployeeCreateWithoutDepartmentInput[] | EmployeeUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: EmployeeCreateOrConnectWithoutDepartmentInput | EmployeeCreateOrConnectWithoutDepartmentInput[]
    upsert?: EmployeeUpsertWithWhereUniqueWithoutDepartmentInput | EmployeeUpsertWithWhereUniqueWithoutDepartmentInput[]
    createMany?: EmployeeCreateManyDepartmentInputEnvelope
    set?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    disconnect?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    delete?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    connect?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    update?: EmployeeUpdateWithWhereUniqueWithoutDepartmentInput | EmployeeUpdateWithWhereUniqueWithoutDepartmentInput[]
    updateMany?: EmployeeUpdateManyWithWhereWithoutDepartmentInput | EmployeeUpdateManyWithWhereWithoutDepartmentInput[]
    deleteMany?: EmployeeScalarWhereInput | EmployeeScalarWhereInput[]
  }

  export type DepartmentUncheckedUpdateManyWithoutParent_departmentNestedInput = {
    create?: XOR<DepartmentCreateWithoutParent_departmentInput, DepartmentUncheckedCreateWithoutParent_departmentInput> | DepartmentCreateWithoutParent_departmentInput[] | DepartmentUncheckedCreateWithoutParent_departmentInput[]
    connectOrCreate?: DepartmentCreateOrConnectWithoutParent_departmentInput | DepartmentCreateOrConnectWithoutParent_departmentInput[]
    upsert?: DepartmentUpsertWithWhereUniqueWithoutParent_departmentInput | DepartmentUpsertWithWhereUniqueWithoutParent_departmentInput[]
    createMany?: DepartmentCreateManyParent_departmentInputEnvelope
    set?: DepartmentWhereUniqueInput | DepartmentWhereUniqueInput[]
    disconnect?: DepartmentWhereUniqueInput | DepartmentWhereUniqueInput[]
    delete?: DepartmentWhereUniqueInput | DepartmentWhereUniqueInput[]
    connect?: DepartmentWhereUniqueInput | DepartmentWhereUniqueInput[]
    update?: DepartmentUpdateWithWhereUniqueWithoutParent_departmentInput | DepartmentUpdateWithWhereUniqueWithoutParent_departmentInput[]
    updateMany?: DepartmentUpdateManyWithWhereWithoutParent_departmentInput | DepartmentUpdateManyWithWhereWithoutParent_departmentInput[]
    deleteMany?: DepartmentScalarWhereInput | DepartmentScalarWhereInput[]
  }

  export type EmployeeUncheckedUpdateManyWithoutDepartmentNestedInput = {
    create?: XOR<EmployeeCreateWithoutDepartmentInput, EmployeeUncheckedCreateWithoutDepartmentInput> | EmployeeCreateWithoutDepartmentInput[] | EmployeeUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: EmployeeCreateOrConnectWithoutDepartmentInput | EmployeeCreateOrConnectWithoutDepartmentInput[]
    upsert?: EmployeeUpsertWithWhereUniqueWithoutDepartmentInput | EmployeeUpsertWithWhereUniqueWithoutDepartmentInput[]
    createMany?: EmployeeCreateManyDepartmentInputEnvelope
    set?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    disconnect?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    delete?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    connect?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    update?: EmployeeUpdateWithWhereUniqueWithoutDepartmentInput | EmployeeUpdateWithWhereUniqueWithoutDepartmentInput[]
    updateMany?: EmployeeUpdateManyWithWhereWithoutDepartmentInput | EmployeeUpdateManyWithWhereWithoutDepartmentInput[]
    deleteMany?: EmployeeScalarWhereInput | EmployeeScalarWhereInput[]
  }

  export type OrganizationCreateNestedOneWithoutEmployeesInput = {
    create?: XOR<OrganizationCreateWithoutEmployeesInput, OrganizationUncheckedCreateWithoutEmployeesInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutEmployeesInput
    connect?: OrganizationWhereUniqueInput
  }

  export type DepartmentCreateNestedOneWithoutEmployeesInput = {
    create?: XOR<DepartmentCreateWithoutEmployeesInput, DepartmentUncheckedCreateWithoutEmployeesInput>
    connectOrCreate?: DepartmentCreateOrConnectWithoutEmployeesInput
    connect?: DepartmentWhereUniqueInput
  }

  export type DepartmentCreateNestedOneWithoutHeadInput = {
    create?: XOR<DepartmentCreateWithoutHeadInput, DepartmentUncheckedCreateWithoutHeadInput>
    connectOrCreate?: DepartmentCreateOrConnectWithoutHeadInput
    connect?: DepartmentWhereUniqueInput
  }

  export type AttendanceCreateNestedManyWithoutEmployeeInput = {
    create?: XOR<AttendanceCreateWithoutEmployeeInput, AttendanceUncheckedCreateWithoutEmployeeInput> | AttendanceCreateWithoutEmployeeInput[] | AttendanceUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: AttendanceCreateOrConnectWithoutEmployeeInput | AttendanceCreateOrConnectWithoutEmployeeInput[]
    createMany?: AttendanceCreateManyEmployeeInputEnvelope
    connect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
  }

  export type LeaveRequestCreateNestedManyWithoutEmployeeInput = {
    create?: XOR<LeaveRequestCreateWithoutEmployeeInput, LeaveRequestUncheckedCreateWithoutEmployeeInput> | LeaveRequestCreateWithoutEmployeeInput[] | LeaveRequestUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: LeaveRequestCreateOrConnectWithoutEmployeeInput | LeaveRequestCreateOrConnectWithoutEmployeeInput[]
    createMany?: LeaveRequestCreateManyEmployeeInputEnvelope
    connect?: LeaveRequestWhereUniqueInput | LeaveRequestWhereUniqueInput[]
  }

  export type LeaveRequestCreateNestedManyWithoutApproverInput = {
    create?: XOR<LeaveRequestCreateWithoutApproverInput, LeaveRequestUncheckedCreateWithoutApproverInput> | LeaveRequestCreateWithoutApproverInput[] | LeaveRequestUncheckedCreateWithoutApproverInput[]
    connectOrCreate?: LeaveRequestCreateOrConnectWithoutApproverInput | LeaveRequestCreateOrConnectWithoutApproverInput[]
    createMany?: LeaveRequestCreateManyApproverInputEnvelope
    connect?: LeaveRequestWhereUniqueInput | LeaveRequestWhereUniqueInput[]
  }

  export type PettyCashRequestCreateNestedManyWithoutEmployeeInput = {
    create?: XOR<PettyCashRequestCreateWithoutEmployeeInput, PettyCashRequestUncheckedCreateWithoutEmployeeInput> | PettyCashRequestCreateWithoutEmployeeInput[] | PettyCashRequestUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: PettyCashRequestCreateOrConnectWithoutEmployeeInput | PettyCashRequestCreateOrConnectWithoutEmployeeInput[]
    createMany?: PettyCashRequestCreateManyEmployeeInputEnvelope
    connect?: PettyCashRequestWhereUniqueInput | PettyCashRequestWhereUniqueInput[]
  }

  export type PettyCashRequestCreateNestedManyWithoutApproverInput = {
    create?: XOR<PettyCashRequestCreateWithoutApproverInput, PettyCashRequestUncheckedCreateWithoutApproverInput> | PettyCashRequestCreateWithoutApproverInput[] | PettyCashRequestUncheckedCreateWithoutApproverInput[]
    connectOrCreate?: PettyCashRequestCreateOrConnectWithoutApproverInput | PettyCashRequestCreateOrConnectWithoutApproverInput[]
    createMany?: PettyCashRequestCreateManyApproverInputEnvelope
    connect?: PettyCashRequestWhereUniqueInput | PettyCashRequestWhereUniqueInput[]
  }

  export type DepartmentUncheckedCreateNestedOneWithoutHeadInput = {
    create?: XOR<DepartmentCreateWithoutHeadInput, DepartmentUncheckedCreateWithoutHeadInput>
    connectOrCreate?: DepartmentCreateOrConnectWithoutHeadInput
    connect?: DepartmentWhereUniqueInput
  }

  export type AttendanceUncheckedCreateNestedManyWithoutEmployeeInput = {
    create?: XOR<AttendanceCreateWithoutEmployeeInput, AttendanceUncheckedCreateWithoutEmployeeInput> | AttendanceCreateWithoutEmployeeInput[] | AttendanceUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: AttendanceCreateOrConnectWithoutEmployeeInput | AttendanceCreateOrConnectWithoutEmployeeInput[]
    createMany?: AttendanceCreateManyEmployeeInputEnvelope
    connect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
  }

  export type LeaveRequestUncheckedCreateNestedManyWithoutEmployeeInput = {
    create?: XOR<LeaveRequestCreateWithoutEmployeeInput, LeaveRequestUncheckedCreateWithoutEmployeeInput> | LeaveRequestCreateWithoutEmployeeInput[] | LeaveRequestUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: LeaveRequestCreateOrConnectWithoutEmployeeInput | LeaveRequestCreateOrConnectWithoutEmployeeInput[]
    createMany?: LeaveRequestCreateManyEmployeeInputEnvelope
    connect?: LeaveRequestWhereUniqueInput | LeaveRequestWhereUniqueInput[]
  }

  export type LeaveRequestUncheckedCreateNestedManyWithoutApproverInput = {
    create?: XOR<LeaveRequestCreateWithoutApproverInput, LeaveRequestUncheckedCreateWithoutApproverInput> | LeaveRequestCreateWithoutApproverInput[] | LeaveRequestUncheckedCreateWithoutApproverInput[]
    connectOrCreate?: LeaveRequestCreateOrConnectWithoutApproverInput | LeaveRequestCreateOrConnectWithoutApproverInput[]
    createMany?: LeaveRequestCreateManyApproverInputEnvelope
    connect?: LeaveRequestWhereUniqueInput | LeaveRequestWhereUniqueInput[]
  }

  export type PettyCashRequestUncheckedCreateNestedManyWithoutEmployeeInput = {
    create?: XOR<PettyCashRequestCreateWithoutEmployeeInput, PettyCashRequestUncheckedCreateWithoutEmployeeInput> | PettyCashRequestCreateWithoutEmployeeInput[] | PettyCashRequestUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: PettyCashRequestCreateOrConnectWithoutEmployeeInput | PettyCashRequestCreateOrConnectWithoutEmployeeInput[]
    createMany?: PettyCashRequestCreateManyEmployeeInputEnvelope
    connect?: PettyCashRequestWhereUniqueInput | PettyCashRequestWhereUniqueInput[]
  }

  export type PettyCashRequestUncheckedCreateNestedManyWithoutApproverInput = {
    create?: XOR<PettyCashRequestCreateWithoutApproverInput, PettyCashRequestUncheckedCreateWithoutApproverInput> | PettyCashRequestCreateWithoutApproverInput[] | PettyCashRequestUncheckedCreateWithoutApproverInput[]
    connectOrCreate?: PettyCashRequestCreateOrConnectWithoutApproverInput | PettyCashRequestCreateOrConnectWithoutApproverInput[]
    createMany?: PettyCashRequestCreateManyApproverInputEnvelope
    connect?: PettyCashRequestWhereUniqueInput | PettyCashRequestWhereUniqueInput[]
  }

  export type OrganizationUpdateOneRequiredWithoutEmployeesNestedInput = {
    create?: XOR<OrganizationCreateWithoutEmployeesInput, OrganizationUncheckedCreateWithoutEmployeesInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutEmployeesInput
    upsert?: OrganizationUpsertWithoutEmployeesInput
    connect?: OrganizationWhereUniqueInput
    update?: XOR<XOR<OrganizationUpdateToOneWithWhereWithoutEmployeesInput, OrganizationUpdateWithoutEmployeesInput>, OrganizationUncheckedUpdateWithoutEmployeesInput>
  }

  export type DepartmentUpdateOneWithoutEmployeesNestedInput = {
    create?: XOR<DepartmentCreateWithoutEmployeesInput, DepartmentUncheckedCreateWithoutEmployeesInput>
    connectOrCreate?: DepartmentCreateOrConnectWithoutEmployeesInput
    upsert?: DepartmentUpsertWithoutEmployeesInput
    disconnect?: DepartmentWhereInput | boolean
    delete?: DepartmentWhereInput | boolean
    connect?: DepartmentWhereUniqueInput
    update?: XOR<XOR<DepartmentUpdateToOneWithWhereWithoutEmployeesInput, DepartmentUpdateWithoutEmployeesInput>, DepartmentUncheckedUpdateWithoutEmployeesInput>
  }

  export type DepartmentUpdateOneWithoutHeadNestedInput = {
    create?: XOR<DepartmentCreateWithoutHeadInput, DepartmentUncheckedCreateWithoutHeadInput>
    connectOrCreate?: DepartmentCreateOrConnectWithoutHeadInput
    upsert?: DepartmentUpsertWithoutHeadInput
    disconnect?: DepartmentWhereInput | boolean
    delete?: DepartmentWhereInput | boolean
    connect?: DepartmentWhereUniqueInput
    update?: XOR<XOR<DepartmentUpdateToOneWithWhereWithoutHeadInput, DepartmentUpdateWithoutHeadInput>, DepartmentUncheckedUpdateWithoutHeadInput>
  }

  export type AttendanceUpdateManyWithoutEmployeeNestedInput = {
    create?: XOR<AttendanceCreateWithoutEmployeeInput, AttendanceUncheckedCreateWithoutEmployeeInput> | AttendanceCreateWithoutEmployeeInput[] | AttendanceUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: AttendanceCreateOrConnectWithoutEmployeeInput | AttendanceCreateOrConnectWithoutEmployeeInput[]
    upsert?: AttendanceUpsertWithWhereUniqueWithoutEmployeeInput | AttendanceUpsertWithWhereUniqueWithoutEmployeeInput[]
    createMany?: AttendanceCreateManyEmployeeInputEnvelope
    set?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    disconnect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    delete?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    connect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    update?: AttendanceUpdateWithWhereUniqueWithoutEmployeeInput | AttendanceUpdateWithWhereUniqueWithoutEmployeeInput[]
    updateMany?: AttendanceUpdateManyWithWhereWithoutEmployeeInput | AttendanceUpdateManyWithWhereWithoutEmployeeInput[]
    deleteMany?: AttendanceScalarWhereInput | AttendanceScalarWhereInput[]
  }

  export type LeaveRequestUpdateManyWithoutEmployeeNestedInput = {
    create?: XOR<LeaveRequestCreateWithoutEmployeeInput, LeaveRequestUncheckedCreateWithoutEmployeeInput> | LeaveRequestCreateWithoutEmployeeInput[] | LeaveRequestUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: LeaveRequestCreateOrConnectWithoutEmployeeInput | LeaveRequestCreateOrConnectWithoutEmployeeInput[]
    upsert?: LeaveRequestUpsertWithWhereUniqueWithoutEmployeeInput | LeaveRequestUpsertWithWhereUniqueWithoutEmployeeInput[]
    createMany?: LeaveRequestCreateManyEmployeeInputEnvelope
    set?: LeaveRequestWhereUniqueInput | LeaveRequestWhereUniqueInput[]
    disconnect?: LeaveRequestWhereUniqueInput | LeaveRequestWhereUniqueInput[]
    delete?: LeaveRequestWhereUniqueInput | LeaveRequestWhereUniqueInput[]
    connect?: LeaveRequestWhereUniqueInput | LeaveRequestWhereUniqueInput[]
    update?: LeaveRequestUpdateWithWhereUniqueWithoutEmployeeInput | LeaveRequestUpdateWithWhereUniqueWithoutEmployeeInput[]
    updateMany?: LeaveRequestUpdateManyWithWhereWithoutEmployeeInput | LeaveRequestUpdateManyWithWhereWithoutEmployeeInput[]
    deleteMany?: LeaveRequestScalarWhereInput | LeaveRequestScalarWhereInput[]
  }

  export type LeaveRequestUpdateManyWithoutApproverNestedInput = {
    create?: XOR<LeaveRequestCreateWithoutApproverInput, LeaveRequestUncheckedCreateWithoutApproverInput> | LeaveRequestCreateWithoutApproverInput[] | LeaveRequestUncheckedCreateWithoutApproverInput[]
    connectOrCreate?: LeaveRequestCreateOrConnectWithoutApproverInput | LeaveRequestCreateOrConnectWithoutApproverInput[]
    upsert?: LeaveRequestUpsertWithWhereUniqueWithoutApproverInput | LeaveRequestUpsertWithWhereUniqueWithoutApproverInput[]
    createMany?: LeaveRequestCreateManyApproverInputEnvelope
    set?: LeaveRequestWhereUniqueInput | LeaveRequestWhereUniqueInput[]
    disconnect?: LeaveRequestWhereUniqueInput | LeaveRequestWhereUniqueInput[]
    delete?: LeaveRequestWhereUniqueInput | LeaveRequestWhereUniqueInput[]
    connect?: LeaveRequestWhereUniqueInput | LeaveRequestWhereUniqueInput[]
    update?: LeaveRequestUpdateWithWhereUniqueWithoutApproverInput | LeaveRequestUpdateWithWhereUniqueWithoutApproverInput[]
    updateMany?: LeaveRequestUpdateManyWithWhereWithoutApproverInput | LeaveRequestUpdateManyWithWhereWithoutApproverInput[]
    deleteMany?: LeaveRequestScalarWhereInput | LeaveRequestScalarWhereInput[]
  }

  export type PettyCashRequestUpdateManyWithoutEmployeeNestedInput = {
    create?: XOR<PettyCashRequestCreateWithoutEmployeeInput, PettyCashRequestUncheckedCreateWithoutEmployeeInput> | PettyCashRequestCreateWithoutEmployeeInput[] | PettyCashRequestUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: PettyCashRequestCreateOrConnectWithoutEmployeeInput | PettyCashRequestCreateOrConnectWithoutEmployeeInput[]
    upsert?: PettyCashRequestUpsertWithWhereUniqueWithoutEmployeeInput | PettyCashRequestUpsertWithWhereUniqueWithoutEmployeeInput[]
    createMany?: PettyCashRequestCreateManyEmployeeInputEnvelope
    set?: PettyCashRequestWhereUniqueInput | PettyCashRequestWhereUniqueInput[]
    disconnect?: PettyCashRequestWhereUniqueInput | PettyCashRequestWhereUniqueInput[]
    delete?: PettyCashRequestWhereUniqueInput | PettyCashRequestWhereUniqueInput[]
    connect?: PettyCashRequestWhereUniqueInput | PettyCashRequestWhereUniqueInput[]
    update?: PettyCashRequestUpdateWithWhereUniqueWithoutEmployeeInput | PettyCashRequestUpdateWithWhereUniqueWithoutEmployeeInput[]
    updateMany?: PettyCashRequestUpdateManyWithWhereWithoutEmployeeInput | PettyCashRequestUpdateManyWithWhereWithoutEmployeeInput[]
    deleteMany?: PettyCashRequestScalarWhereInput | PettyCashRequestScalarWhereInput[]
  }

  export type PettyCashRequestUpdateManyWithoutApproverNestedInput = {
    create?: XOR<PettyCashRequestCreateWithoutApproverInput, PettyCashRequestUncheckedCreateWithoutApproverInput> | PettyCashRequestCreateWithoutApproverInput[] | PettyCashRequestUncheckedCreateWithoutApproverInput[]
    connectOrCreate?: PettyCashRequestCreateOrConnectWithoutApproverInput | PettyCashRequestCreateOrConnectWithoutApproverInput[]
    upsert?: PettyCashRequestUpsertWithWhereUniqueWithoutApproverInput | PettyCashRequestUpsertWithWhereUniqueWithoutApproverInput[]
    createMany?: PettyCashRequestCreateManyApproverInputEnvelope
    set?: PettyCashRequestWhereUniqueInput | PettyCashRequestWhereUniqueInput[]
    disconnect?: PettyCashRequestWhereUniqueInput | PettyCashRequestWhereUniqueInput[]
    delete?: PettyCashRequestWhereUniqueInput | PettyCashRequestWhereUniqueInput[]
    connect?: PettyCashRequestWhereUniqueInput | PettyCashRequestWhereUniqueInput[]
    update?: PettyCashRequestUpdateWithWhereUniqueWithoutApproverInput | PettyCashRequestUpdateWithWhereUniqueWithoutApproverInput[]
    updateMany?: PettyCashRequestUpdateManyWithWhereWithoutApproverInput | PettyCashRequestUpdateManyWithWhereWithoutApproverInput[]
    deleteMany?: PettyCashRequestScalarWhereInput | PettyCashRequestScalarWhereInput[]
  }

  export type DepartmentUncheckedUpdateOneWithoutHeadNestedInput = {
    create?: XOR<DepartmentCreateWithoutHeadInput, DepartmentUncheckedCreateWithoutHeadInput>
    connectOrCreate?: DepartmentCreateOrConnectWithoutHeadInput
    upsert?: DepartmentUpsertWithoutHeadInput
    disconnect?: DepartmentWhereInput | boolean
    delete?: DepartmentWhereInput | boolean
    connect?: DepartmentWhereUniqueInput
    update?: XOR<XOR<DepartmentUpdateToOneWithWhereWithoutHeadInput, DepartmentUpdateWithoutHeadInput>, DepartmentUncheckedUpdateWithoutHeadInput>
  }

  export type AttendanceUncheckedUpdateManyWithoutEmployeeNestedInput = {
    create?: XOR<AttendanceCreateWithoutEmployeeInput, AttendanceUncheckedCreateWithoutEmployeeInput> | AttendanceCreateWithoutEmployeeInput[] | AttendanceUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: AttendanceCreateOrConnectWithoutEmployeeInput | AttendanceCreateOrConnectWithoutEmployeeInput[]
    upsert?: AttendanceUpsertWithWhereUniqueWithoutEmployeeInput | AttendanceUpsertWithWhereUniqueWithoutEmployeeInput[]
    createMany?: AttendanceCreateManyEmployeeInputEnvelope
    set?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    disconnect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    delete?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    connect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    update?: AttendanceUpdateWithWhereUniqueWithoutEmployeeInput | AttendanceUpdateWithWhereUniqueWithoutEmployeeInput[]
    updateMany?: AttendanceUpdateManyWithWhereWithoutEmployeeInput | AttendanceUpdateManyWithWhereWithoutEmployeeInput[]
    deleteMany?: AttendanceScalarWhereInput | AttendanceScalarWhereInput[]
  }

  export type LeaveRequestUncheckedUpdateManyWithoutEmployeeNestedInput = {
    create?: XOR<LeaveRequestCreateWithoutEmployeeInput, LeaveRequestUncheckedCreateWithoutEmployeeInput> | LeaveRequestCreateWithoutEmployeeInput[] | LeaveRequestUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: LeaveRequestCreateOrConnectWithoutEmployeeInput | LeaveRequestCreateOrConnectWithoutEmployeeInput[]
    upsert?: LeaveRequestUpsertWithWhereUniqueWithoutEmployeeInput | LeaveRequestUpsertWithWhereUniqueWithoutEmployeeInput[]
    createMany?: LeaveRequestCreateManyEmployeeInputEnvelope
    set?: LeaveRequestWhereUniqueInput | LeaveRequestWhereUniqueInput[]
    disconnect?: LeaveRequestWhereUniqueInput | LeaveRequestWhereUniqueInput[]
    delete?: LeaveRequestWhereUniqueInput | LeaveRequestWhereUniqueInput[]
    connect?: LeaveRequestWhereUniqueInput | LeaveRequestWhereUniqueInput[]
    update?: LeaveRequestUpdateWithWhereUniqueWithoutEmployeeInput | LeaveRequestUpdateWithWhereUniqueWithoutEmployeeInput[]
    updateMany?: LeaveRequestUpdateManyWithWhereWithoutEmployeeInput | LeaveRequestUpdateManyWithWhereWithoutEmployeeInput[]
    deleteMany?: LeaveRequestScalarWhereInput | LeaveRequestScalarWhereInput[]
  }

  export type LeaveRequestUncheckedUpdateManyWithoutApproverNestedInput = {
    create?: XOR<LeaveRequestCreateWithoutApproverInput, LeaveRequestUncheckedCreateWithoutApproverInput> | LeaveRequestCreateWithoutApproverInput[] | LeaveRequestUncheckedCreateWithoutApproverInput[]
    connectOrCreate?: LeaveRequestCreateOrConnectWithoutApproverInput | LeaveRequestCreateOrConnectWithoutApproverInput[]
    upsert?: LeaveRequestUpsertWithWhereUniqueWithoutApproverInput | LeaveRequestUpsertWithWhereUniqueWithoutApproverInput[]
    createMany?: LeaveRequestCreateManyApproverInputEnvelope
    set?: LeaveRequestWhereUniqueInput | LeaveRequestWhereUniqueInput[]
    disconnect?: LeaveRequestWhereUniqueInput | LeaveRequestWhereUniqueInput[]
    delete?: LeaveRequestWhereUniqueInput | LeaveRequestWhereUniqueInput[]
    connect?: LeaveRequestWhereUniqueInput | LeaveRequestWhereUniqueInput[]
    update?: LeaveRequestUpdateWithWhereUniqueWithoutApproverInput | LeaveRequestUpdateWithWhereUniqueWithoutApproverInput[]
    updateMany?: LeaveRequestUpdateManyWithWhereWithoutApproverInput | LeaveRequestUpdateManyWithWhereWithoutApproverInput[]
    deleteMany?: LeaveRequestScalarWhereInput | LeaveRequestScalarWhereInput[]
  }

  export type PettyCashRequestUncheckedUpdateManyWithoutEmployeeNestedInput = {
    create?: XOR<PettyCashRequestCreateWithoutEmployeeInput, PettyCashRequestUncheckedCreateWithoutEmployeeInput> | PettyCashRequestCreateWithoutEmployeeInput[] | PettyCashRequestUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: PettyCashRequestCreateOrConnectWithoutEmployeeInput | PettyCashRequestCreateOrConnectWithoutEmployeeInput[]
    upsert?: PettyCashRequestUpsertWithWhereUniqueWithoutEmployeeInput | PettyCashRequestUpsertWithWhereUniqueWithoutEmployeeInput[]
    createMany?: PettyCashRequestCreateManyEmployeeInputEnvelope
    set?: PettyCashRequestWhereUniqueInput | PettyCashRequestWhereUniqueInput[]
    disconnect?: PettyCashRequestWhereUniqueInput | PettyCashRequestWhereUniqueInput[]
    delete?: PettyCashRequestWhereUniqueInput | PettyCashRequestWhereUniqueInput[]
    connect?: PettyCashRequestWhereUniqueInput | PettyCashRequestWhereUniqueInput[]
    update?: PettyCashRequestUpdateWithWhereUniqueWithoutEmployeeInput | PettyCashRequestUpdateWithWhereUniqueWithoutEmployeeInput[]
    updateMany?: PettyCashRequestUpdateManyWithWhereWithoutEmployeeInput | PettyCashRequestUpdateManyWithWhereWithoutEmployeeInput[]
    deleteMany?: PettyCashRequestScalarWhereInput | PettyCashRequestScalarWhereInput[]
  }

  export type PettyCashRequestUncheckedUpdateManyWithoutApproverNestedInput = {
    create?: XOR<PettyCashRequestCreateWithoutApproverInput, PettyCashRequestUncheckedCreateWithoutApproverInput> | PettyCashRequestCreateWithoutApproverInput[] | PettyCashRequestUncheckedCreateWithoutApproverInput[]
    connectOrCreate?: PettyCashRequestCreateOrConnectWithoutApproverInput | PettyCashRequestCreateOrConnectWithoutApproverInput[]
    upsert?: PettyCashRequestUpsertWithWhereUniqueWithoutApproverInput | PettyCashRequestUpsertWithWhereUniqueWithoutApproverInput[]
    createMany?: PettyCashRequestCreateManyApproverInputEnvelope
    set?: PettyCashRequestWhereUniqueInput | PettyCashRequestWhereUniqueInput[]
    disconnect?: PettyCashRequestWhereUniqueInput | PettyCashRequestWhereUniqueInput[]
    delete?: PettyCashRequestWhereUniqueInput | PettyCashRequestWhereUniqueInput[]
    connect?: PettyCashRequestWhereUniqueInput | PettyCashRequestWhereUniqueInput[]
    update?: PettyCashRequestUpdateWithWhereUniqueWithoutApproverInput | PettyCashRequestUpdateWithWhereUniqueWithoutApproverInput[]
    updateMany?: PettyCashRequestUpdateManyWithWhereWithoutApproverInput | PettyCashRequestUpdateManyWithWhereWithoutApproverInput[]
    deleteMany?: PettyCashRequestScalarWhereInput | PettyCashRequestScalarWhereInput[]
  }

  export type SubscriptionCreateNestedOneWithoutOrganizationInput = {
    create?: XOR<SubscriptionCreateWithoutOrganizationInput, SubscriptionUncheckedCreateWithoutOrganizationInput>
    connectOrCreate?: SubscriptionCreateOrConnectWithoutOrganizationInput
    connect?: SubscriptionWhereUniqueInput
  }

  export type InvoiceCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<InvoiceCreateWithoutOrganizationInput, InvoiceUncheckedCreateWithoutOrganizationInput> | InvoiceCreateWithoutOrganizationInput[] | InvoiceUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: InvoiceCreateOrConnectWithoutOrganizationInput | InvoiceCreateOrConnectWithoutOrganizationInput[]
    createMany?: InvoiceCreateManyOrganizationInputEnvelope
    connect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
  }

  export type DepartmentCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<DepartmentCreateWithoutOrganizationInput, DepartmentUncheckedCreateWithoutOrganizationInput> | DepartmentCreateWithoutOrganizationInput[] | DepartmentUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: DepartmentCreateOrConnectWithoutOrganizationInput | DepartmentCreateOrConnectWithoutOrganizationInput[]
    createMany?: DepartmentCreateManyOrganizationInputEnvelope
    connect?: DepartmentWhereUniqueInput | DepartmentWhereUniqueInput[]
  }

  export type EmployeeCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<EmployeeCreateWithoutOrganizationInput, EmployeeUncheckedCreateWithoutOrganizationInput> | EmployeeCreateWithoutOrganizationInput[] | EmployeeUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: EmployeeCreateOrConnectWithoutOrganizationInput | EmployeeCreateOrConnectWithoutOrganizationInput[]
    createMany?: EmployeeCreateManyOrganizationInputEnvelope
    connect?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
  }

  export type AttendanceCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<AttendanceCreateWithoutOrganizationInput, AttendanceUncheckedCreateWithoutOrganizationInput> | AttendanceCreateWithoutOrganizationInput[] | AttendanceUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: AttendanceCreateOrConnectWithoutOrganizationInput | AttendanceCreateOrConnectWithoutOrganizationInput[]
    createMany?: AttendanceCreateManyOrganizationInputEnvelope
    connect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
  }

  export type LeaveRequestCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<LeaveRequestCreateWithoutOrganizationInput, LeaveRequestUncheckedCreateWithoutOrganizationInput> | LeaveRequestCreateWithoutOrganizationInput[] | LeaveRequestUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: LeaveRequestCreateOrConnectWithoutOrganizationInput | LeaveRequestCreateOrConnectWithoutOrganizationInput[]
    createMany?: LeaveRequestCreateManyOrganizationInputEnvelope
    connect?: LeaveRequestWhereUniqueInput | LeaveRequestWhereUniqueInput[]
  }

  export type PettyCashRequestCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<PettyCashRequestCreateWithoutOrganizationInput, PettyCashRequestUncheckedCreateWithoutOrganizationInput> | PettyCashRequestCreateWithoutOrganizationInput[] | PettyCashRequestUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: PettyCashRequestCreateOrConnectWithoutOrganizationInput | PettyCashRequestCreateOrConnectWithoutOrganizationInput[]
    createMany?: PettyCashRequestCreateManyOrganizationInputEnvelope
    connect?: PettyCashRequestWhereUniqueInput | PettyCashRequestWhereUniqueInput[]
  }

  export type SubscriptionUncheckedCreateNestedOneWithoutOrganizationInput = {
    create?: XOR<SubscriptionCreateWithoutOrganizationInput, SubscriptionUncheckedCreateWithoutOrganizationInput>
    connectOrCreate?: SubscriptionCreateOrConnectWithoutOrganizationInput
    connect?: SubscriptionWhereUniqueInput
  }

  export type InvoiceUncheckedCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<InvoiceCreateWithoutOrganizationInput, InvoiceUncheckedCreateWithoutOrganizationInput> | InvoiceCreateWithoutOrganizationInput[] | InvoiceUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: InvoiceCreateOrConnectWithoutOrganizationInput | InvoiceCreateOrConnectWithoutOrganizationInput[]
    createMany?: InvoiceCreateManyOrganizationInputEnvelope
    connect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
  }

  export type DepartmentUncheckedCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<DepartmentCreateWithoutOrganizationInput, DepartmentUncheckedCreateWithoutOrganizationInput> | DepartmentCreateWithoutOrganizationInput[] | DepartmentUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: DepartmentCreateOrConnectWithoutOrganizationInput | DepartmentCreateOrConnectWithoutOrganizationInput[]
    createMany?: DepartmentCreateManyOrganizationInputEnvelope
    connect?: DepartmentWhereUniqueInput | DepartmentWhereUniqueInput[]
  }

  export type EmployeeUncheckedCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<EmployeeCreateWithoutOrganizationInput, EmployeeUncheckedCreateWithoutOrganizationInput> | EmployeeCreateWithoutOrganizationInput[] | EmployeeUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: EmployeeCreateOrConnectWithoutOrganizationInput | EmployeeCreateOrConnectWithoutOrganizationInput[]
    createMany?: EmployeeCreateManyOrganizationInputEnvelope
    connect?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
  }

  export type AttendanceUncheckedCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<AttendanceCreateWithoutOrganizationInput, AttendanceUncheckedCreateWithoutOrganizationInput> | AttendanceCreateWithoutOrganizationInput[] | AttendanceUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: AttendanceCreateOrConnectWithoutOrganizationInput | AttendanceCreateOrConnectWithoutOrganizationInput[]
    createMany?: AttendanceCreateManyOrganizationInputEnvelope
    connect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
  }

  export type LeaveRequestUncheckedCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<LeaveRequestCreateWithoutOrganizationInput, LeaveRequestUncheckedCreateWithoutOrganizationInput> | LeaveRequestCreateWithoutOrganizationInput[] | LeaveRequestUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: LeaveRequestCreateOrConnectWithoutOrganizationInput | LeaveRequestCreateOrConnectWithoutOrganizationInput[]
    createMany?: LeaveRequestCreateManyOrganizationInputEnvelope
    connect?: LeaveRequestWhereUniqueInput | LeaveRequestWhereUniqueInput[]
  }

  export type PettyCashRequestUncheckedCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<PettyCashRequestCreateWithoutOrganizationInput, PettyCashRequestUncheckedCreateWithoutOrganizationInput> | PettyCashRequestCreateWithoutOrganizationInput[] | PettyCashRequestUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: PettyCashRequestCreateOrConnectWithoutOrganizationInput | PettyCashRequestCreateOrConnectWithoutOrganizationInput[]
    createMany?: PettyCashRequestCreateManyOrganizationInputEnvelope
    connect?: PettyCashRequestWhereUniqueInput | PettyCashRequestWhereUniqueInput[]
  }

  export type SubscriptionUpdateOneWithoutOrganizationNestedInput = {
    create?: XOR<SubscriptionCreateWithoutOrganizationInput, SubscriptionUncheckedCreateWithoutOrganizationInput>
    connectOrCreate?: SubscriptionCreateOrConnectWithoutOrganizationInput
    upsert?: SubscriptionUpsertWithoutOrganizationInput
    disconnect?: SubscriptionWhereInput | boolean
    delete?: SubscriptionWhereInput | boolean
    connect?: SubscriptionWhereUniqueInput
    update?: XOR<XOR<SubscriptionUpdateToOneWithWhereWithoutOrganizationInput, SubscriptionUpdateWithoutOrganizationInput>, SubscriptionUncheckedUpdateWithoutOrganizationInput>
  }

  export type InvoiceUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<InvoiceCreateWithoutOrganizationInput, InvoiceUncheckedCreateWithoutOrganizationInput> | InvoiceCreateWithoutOrganizationInput[] | InvoiceUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: InvoiceCreateOrConnectWithoutOrganizationInput | InvoiceCreateOrConnectWithoutOrganizationInput[]
    upsert?: InvoiceUpsertWithWhereUniqueWithoutOrganizationInput | InvoiceUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: InvoiceCreateManyOrganizationInputEnvelope
    set?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    disconnect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    delete?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    connect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    update?: InvoiceUpdateWithWhereUniqueWithoutOrganizationInput | InvoiceUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: InvoiceUpdateManyWithWhereWithoutOrganizationInput | InvoiceUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: InvoiceScalarWhereInput | InvoiceScalarWhereInput[]
  }

  export type DepartmentUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<DepartmentCreateWithoutOrganizationInput, DepartmentUncheckedCreateWithoutOrganizationInput> | DepartmentCreateWithoutOrganizationInput[] | DepartmentUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: DepartmentCreateOrConnectWithoutOrganizationInput | DepartmentCreateOrConnectWithoutOrganizationInput[]
    upsert?: DepartmentUpsertWithWhereUniqueWithoutOrganizationInput | DepartmentUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: DepartmentCreateManyOrganizationInputEnvelope
    set?: DepartmentWhereUniqueInput | DepartmentWhereUniqueInput[]
    disconnect?: DepartmentWhereUniqueInput | DepartmentWhereUniqueInput[]
    delete?: DepartmentWhereUniqueInput | DepartmentWhereUniqueInput[]
    connect?: DepartmentWhereUniqueInput | DepartmentWhereUniqueInput[]
    update?: DepartmentUpdateWithWhereUniqueWithoutOrganizationInput | DepartmentUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: DepartmentUpdateManyWithWhereWithoutOrganizationInput | DepartmentUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: DepartmentScalarWhereInput | DepartmentScalarWhereInput[]
  }

  export type EmployeeUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<EmployeeCreateWithoutOrganizationInput, EmployeeUncheckedCreateWithoutOrganizationInput> | EmployeeCreateWithoutOrganizationInput[] | EmployeeUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: EmployeeCreateOrConnectWithoutOrganizationInput | EmployeeCreateOrConnectWithoutOrganizationInput[]
    upsert?: EmployeeUpsertWithWhereUniqueWithoutOrganizationInput | EmployeeUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: EmployeeCreateManyOrganizationInputEnvelope
    set?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    disconnect?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    delete?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    connect?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    update?: EmployeeUpdateWithWhereUniqueWithoutOrganizationInput | EmployeeUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: EmployeeUpdateManyWithWhereWithoutOrganizationInput | EmployeeUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: EmployeeScalarWhereInput | EmployeeScalarWhereInput[]
  }

  export type AttendanceUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<AttendanceCreateWithoutOrganizationInput, AttendanceUncheckedCreateWithoutOrganizationInput> | AttendanceCreateWithoutOrganizationInput[] | AttendanceUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: AttendanceCreateOrConnectWithoutOrganizationInput | AttendanceCreateOrConnectWithoutOrganizationInput[]
    upsert?: AttendanceUpsertWithWhereUniqueWithoutOrganizationInput | AttendanceUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: AttendanceCreateManyOrganizationInputEnvelope
    set?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    disconnect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    delete?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    connect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    update?: AttendanceUpdateWithWhereUniqueWithoutOrganizationInput | AttendanceUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: AttendanceUpdateManyWithWhereWithoutOrganizationInput | AttendanceUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: AttendanceScalarWhereInput | AttendanceScalarWhereInput[]
  }

  export type LeaveRequestUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<LeaveRequestCreateWithoutOrganizationInput, LeaveRequestUncheckedCreateWithoutOrganizationInput> | LeaveRequestCreateWithoutOrganizationInput[] | LeaveRequestUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: LeaveRequestCreateOrConnectWithoutOrganizationInput | LeaveRequestCreateOrConnectWithoutOrganizationInput[]
    upsert?: LeaveRequestUpsertWithWhereUniqueWithoutOrganizationInput | LeaveRequestUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: LeaveRequestCreateManyOrganizationInputEnvelope
    set?: LeaveRequestWhereUniqueInput | LeaveRequestWhereUniqueInput[]
    disconnect?: LeaveRequestWhereUniqueInput | LeaveRequestWhereUniqueInput[]
    delete?: LeaveRequestWhereUniqueInput | LeaveRequestWhereUniqueInput[]
    connect?: LeaveRequestWhereUniqueInput | LeaveRequestWhereUniqueInput[]
    update?: LeaveRequestUpdateWithWhereUniqueWithoutOrganizationInput | LeaveRequestUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: LeaveRequestUpdateManyWithWhereWithoutOrganizationInput | LeaveRequestUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: LeaveRequestScalarWhereInput | LeaveRequestScalarWhereInput[]
  }

  export type PettyCashRequestUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<PettyCashRequestCreateWithoutOrganizationInput, PettyCashRequestUncheckedCreateWithoutOrganizationInput> | PettyCashRequestCreateWithoutOrganizationInput[] | PettyCashRequestUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: PettyCashRequestCreateOrConnectWithoutOrganizationInput | PettyCashRequestCreateOrConnectWithoutOrganizationInput[]
    upsert?: PettyCashRequestUpsertWithWhereUniqueWithoutOrganizationInput | PettyCashRequestUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: PettyCashRequestCreateManyOrganizationInputEnvelope
    set?: PettyCashRequestWhereUniqueInput | PettyCashRequestWhereUniqueInput[]
    disconnect?: PettyCashRequestWhereUniqueInput | PettyCashRequestWhereUniqueInput[]
    delete?: PettyCashRequestWhereUniqueInput | PettyCashRequestWhereUniqueInput[]
    connect?: PettyCashRequestWhereUniqueInput | PettyCashRequestWhereUniqueInput[]
    update?: PettyCashRequestUpdateWithWhereUniqueWithoutOrganizationInput | PettyCashRequestUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: PettyCashRequestUpdateManyWithWhereWithoutOrganizationInput | PettyCashRequestUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: PettyCashRequestScalarWhereInput | PettyCashRequestScalarWhereInput[]
  }

  export type SubscriptionUncheckedUpdateOneWithoutOrganizationNestedInput = {
    create?: XOR<SubscriptionCreateWithoutOrganizationInput, SubscriptionUncheckedCreateWithoutOrganizationInput>
    connectOrCreate?: SubscriptionCreateOrConnectWithoutOrganizationInput
    upsert?: SubscriptionUpsertWithoutOrganizationInput
    disconnect?: SubscriptionWhereInput | boolean
    delete?: SubscriptionWhereInput | boolean
    connect?: SubscriptionWhereUniqueInput
    update?: XOR<XOR<SubscriptionUpdateToOneWithWhereWithoutOrganizationInput, SubscriptionUpdateWithoutOrganizationInput>, SubscriptionUncheckedUpdateWithoutOrganizationInput>
  }

  export type InvoiceUncheckedUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<InvoiceCreateWithoutOrganizationInput, InvoiceUncheckedCreateWithoutOrganizationInput> | InvoiceCreateWithoutOrganizationInput[] | InvoiceUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: InvoiceCreateOrConnectWithoutOrganizationInput | InvoiceCreateOrConnectWithoutOrganizationInput[]
    upsert?: InvoiceUpsertWithWhereUniqueWithoutOrganizationInput | InvoiceUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: InvoiceCreateManyOrganizationInputEnvelope
    set?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    disconnect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    delete?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    connect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    update?: InvoiceUpdateWithWhereUniqueWithoutOrganizationInput | InvoiceUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: InvoiceUpdateManyWithWhereWithoutOrganizationInput | InvoiceUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: InvoiceScalarWhereInput | InvoiceScalarWhereInput[]
  }

  export type DepartmentUncheckedUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<DepartmentCreateWithoutOrganizationInput, DepartmentUncheckedCreateWithoutOrganizationInput> | DepartmentCreateWithoutOrganizationInput[] | DepartmentUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: DepartmentCreateOrConnectWithoutOrganizationInput | DepartmentCreateOrConnectWithoutOrganizationInput[]
    upsert?: DepartmentUpsertWithWhereUniqueWithoutOrganizationInput | DepartmentUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: DepartmentCreateManyOrganizationInputEnvelope
    set?: DepartmentWhereUniqueInput | DepartmentWhereUniqueInput[]
    disconnect?: DepartmentWhereUniqueInput | DepartmentWhereUniqueInput[]
    delete?: DepartmentWhereUniqueInput | DepartmentWhereUniqueInput[]
    connect?: DepartmentWhereUniqueInput | DepartmentWhereUniqueInput[]
    update?: DepartmentUpdateWithWhereUniqueWithoutOrganizationInput | DepartmentUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: DepartmentUpdateManyWithWhereWithoutOrganizationInput | DepartmentUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: DepartmentScalarWhereInput | DepartmentScalarWhereInput[]
  }

  export type EmployeeUncheckedUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<EmployeeCreateWithoutOrganizationInput, EmployeeUncheckedCreateWithoutOrganizationInput> | EmployeeCreateWithoutOrganizationInput[] | EmployeeUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: EmployeeCreateOrConnectWithoutOrganizationInput | EmployeeCreateOrConnectWithoutOrganizationInput[]
    upsert?: EmployeeUpsertWithWhereUniqueWithoutOrganizationInput | EmployeeUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: EmployeeCreateManyOrganizationInputEnvelope
    set?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    disconnect?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    delete?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    connect?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    update?: EmployeeUpdateWithWhereUniqueWithoutOrganizationInput | EmployeeUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: EmployeeUpdateManyWithWhereWithoutOrganizationInput | EmployeeUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: EmployeeScalarWhereInput | EmployeeScalarWhereInput[]
  }

  export type AttendanceUncheckedUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<AttendanceCreateWithoutOrganizationInput, AttendanceUncheckedCreateWithoutOrganizationInput> | AttendanceCreateWithoutOrganizationInput[] | AttendanceUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: AttendanceCreateOrConnectWithoutOrganizationInput | AttendanceCreateOrConnectWithoutOrganizationInput[]
    upsert?: AttendanceUpsertWithWhereUniqueWithoutOrganizationInput | AttendanceUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: AttendanceCreateManyOrganizationInputEnvelope
    set?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    disconnect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    delete?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    connect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    update?: AttendanceUpdateWithWhereUniqueWithoutOrganizationInput | AttendanceUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: AttendanceUpdateManyWithWhereWithoutOrganizationInput | AttendanceUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: AttendanceScalarWhereInput | AttendanceScalarWhereInput[]
  }

  export type LeaveRequestUncheckedUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<LeaveRequestCreateWithoutOrganizationInput, LeaveRequestUncheckedCreateWithoutOrganizationInput> | LeaveRequestCreateWithoutOrganizationInput[] | LeaveRequestUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: LeaveRequestCreateOrConnectWithoutOrganizationInput | LeaveRequestCreateOrConnectWithoutOrganizationInput[]
    upsert?: LeaveRequestUpsertWithWhereUniqueWithoutOrganizationInput | LeaveRequestUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: LeaveRequestCreateManyOrganizationInputEnvelope
    set?: LeaveRequestWhereUniqueInput | LeaveRequestWhereUniqueInput[]
    disconnect?: LeaveRequestWhereUniqueInput | LeaveRequestWhereUniqueInput[]
    delete?: LeaveRequestWhereUniqueInput | LeaveRequestWhereUniqueInput[]
    connect?: LeaveRequestWhereUniqueInput | LeaveRequestWhereUniqueInput[]
    update?: LeaveRequestUpdateWithWhereUniqueWithoutOrganizationInput | LeaveRequestUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: LeaveRequestUpdateManyWithWhereWithoutOrganizationInput | LeaveRequestUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: LeaveRequestScalarWhereInput | LeaveRequestScalarWhereInput[]
  }

  export type PettyCashRequestUncheckedUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<PettyCashRequestCreateWithoutOrganizationInput, PettyCashRequestUncheckedCreateWithoutOrganizationInput> | PettyCashRequestCreateWithoutOrganizationInput[] | PettyCashRequestUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: PettyCashRequestCreateOrConnectWithoutOrganizationInput | PettyCashRequestCreateOrConnectWithoutOrganizationInput[]
    upsert?: PettyCashRequestUpsertWithWhereUniqueWithoutOrganizationInput | PettyCashRequestUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: PettyCashRequestCreateManyOrganizationInputEnvelope
    set?: PettyCashRequestWhereUniqueInput | PettyCashRequestWhereUniqueInput[]
    disconnect?: PettyCashRequestWhereUniqueInput | PettyCashRequestWhereUniqueInput[]
    delete?: PettyCashRequestWhereUniqueInput | PettyCashRequestWhereUniqueInput[]
    connect?: PettyCashRequestWhereUniqueInput | PettyCashRequestWhereUniqueInput[]
    update?: PettyCashRequestUpdateWithWhereUniqueWithoutOrganizationInput | PettyCashRequestUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: PettyCashRequestUpdateManyWithWhereWithoutOrganizationInput | PettyCashRequestUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: PettyCashRequestScalarWhereInput | PettyCashRequestScalarWhereInput[]
  }

  export type SubscriptionCreateNestedManyWithoutPlanInput = {
    create?: XOR<SubscriptionCreateWithoutPlanInput, SubscriptionUncheckedCreateWithoutPlanInput> | SubscriptionCreateWithoutPlanInput[] | SubscriptionUncheckedCreateWithoutPlanInput[]
    connectOrCreate?: SubscriptionCreateOrConnectWithoutPlanInput | SubscriptionCreateOrConnectWithoutPlanInput[]
    createMany?: SubscriptionCreateManyPlanInputEnvelope
    connect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
  }

  export type FeatureCreateNestedManyWithoutPlansInput = {
    create?: XOR<FeatureCreateWithoutPlansInput, FeatureUncheckedCreateWithoutPlansInput> | FeatureCreateWithoutPlansInput[] | FeatureUncheckedCreateWithoutPlansInput[]
    connectOrCreate?: FeatureCreateOrConnectWithoutPlansInput | FeatureCreateOrConnectWithoutPlansInput[]
    connect?: FeatureWhereUniqueInput | FeatureWhereUniqueInput[]
  }

  export type SubscriptionUncheckedCreateNestedManyWithoutPlanInput = {
    create?: XOR<SubscriptionCreateWithoutPlanInput, SubscriptionUncheckedCreateWithoutPlanInput> | SubscriptionCreateWithoutPlanInput[] | SubscriptionUncheckedCreateWithoutPlanInput[]
    connectOrCreate?: SubscriptionCreateOrConnectWithoutPlanInput | SubscriptionCreateOrConnectWithoutPlanInput[]
    createMany?: SubscriptionCreateManyPlanInputEnvelope
    connect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
  }

  export type FeatureUncheckedCreateNestedManyWithoutPlansInput = {
    create?: XOR<FeatureCreateWithoutPlansInput, FeatureUncheckedCreateWithoutPlansInput> | FeatureCreateWithoutPlansInput[] | FeatureUncheckedCreateWithoutPlansInput[]
    connectOrCreate?: FeatureCreateOrConnectWithoutPlansInput | FeatureCreateOrConnectWithoutPlansInput[]
    connect?: FeatureWhereUniqueInput | FeatureWhereUniqueInput[]
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type SubscriptionUpdateManyWithoutPlanNestedInput = {
    create?: XOR<SubscriptionCreateWithoutPlanInput, SubscriptionUncheckedCreateWithoutPlanInput> | SubscriptionCreateWithoutPlanInput[] | SubscriptionUncheckedCreateWithoutPlanInput[]
    connectOrCreate?: SubscriptionCreateOrConnectWithoutPlanInput | SubscriptionCreateOrConnectWithoutPlanInput[]
    upsert?: SubscriptionUpsertWithWhereUniqueWithoutPlanInput | SubscriptionUpsertWithWhereUniqueWithoutPlanInput[]
    createMany?: SubscriptionCreateManyPlanInputEnvelope
    set?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    disconnect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    delete?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    connect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    update?: SubscriptionUpdateWithWhereUniqueWithoutPlanInput | SubscriptionUpdateWithWhereUniqueWithoutPlanInput[]
    updateMany?: SubscriptionUpdateManyWithWhereWithoutPlanInput | SubscriptionUpdateManyWithWhereWithoutPlanInput[]
    deleteMany?: SubscriptionScalarWhereInput | SubscriptionScalarWhereInput[]
  }

  export type FeatureUpdateManyWithoutPlansNestedInput = {
    create?: XOR<FeatureCreateWithoutPlansInput, FeatureUncheckedCreateWithoutPlansInput> | FeatureCreateWithoutPlansInput[] | FeatureUncheckedCreateWithoutPlansInput[]
    connectOrCreate?: FeatureCreateOrConnectWithoutPlansInput | FeatureCreateOrConnectWithoutPlansInput[]
    upsert?: FeatureUpsertWithWhereUniqueWithoutPlansInput | FeatureUpsertWithWhereUniqueWithoutPlansInput[]
    set?: FeatureWhereUniqueInput | FeatureWhereUniqueInput[]
    disconnect?: FeatureWhereUniqueInput | FeatureWhereUniqueInput[]
    delete?: FeatureWhereUniqueInput | FeatureWhereUniqueInput[]
    connect?: FeatureWhereUniqueInput | FeatureWhereUniqueInput[]
    update?: FeatureUpdateWithWhereUniqueWithoutPlansInput | FeatureUpdateWithWhereUniqueWithoutPlansInput[]
    updateMany?: FeatureUpdateManyWithWhereWithoutPlansInput | FeatureUpdateManyWithWhereWithoutPlansInput[]
    deleteMany?: FeatureScalarWhereInput | FeatureScalarWhereInput[]
  }

  export type SubscriptionUncheckedUpdateManyWithoutPlanNestedInput = {
    create?: XOR<SubscriptionCreateWithoutPlanInput, SubscriptionUncheckedCreateWithoutPlanInput> | SubscriptionCreateWithoutPlanInput[] | SubscriptionUncheckedCreateWithoutPlanInput[]
    connectOrCreate?: SubscriptionCreateOrConnectWithoutPlanInput | SubscriptionCreateOrConnectWithoutPlanInput[]
    upsert?: SubscriptionUpsertWithWhereUniqueWithoutPlanInput | SubscriptionUpsertWithWhereUniqueWithoutPlanInput[]
    createMany?: SubscriptionCreateManyPlanInputEnvelope
    set?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    disconnect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    delete?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    connect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    update?: SubscriptionUpdateWithWhereUniqueWithoutPlanInput | SubscriptionUpdateWithWhereUniqueWithoutPlanInput[]
    updateMany?: SubscriptionUpdateManyWithWhereWithoutPlanInput | SubscriptionUpdateManyWithWhereWithoutPlanInput[]
    deleteMany?: SubscriptionScalarWhereInput | SubscriptionScalarWhereInput[]
  }

  export type FeatureUncheckedUpdateManyWithoutPlansNestedInput = {
    create?: XOR<FeatureCreateWithoutPlansInput, FeatureUncheckedCreateWithoutPlansInput> | FeatureCreateWithoutPlansInput[] | FeatureUncheckedCreateWithoutPlansInput[]
    connectOrCreate?: FeatureCreateOrConnectWithoutPlansInput | FeatureCreateOrConnectWithoutPlansInput[]
    upsert?: FeatureUpsertWithWhereUniqueWithoutPlansInput | FeatureUpsertWithWhereUniqueWithoutPlansInput[]
    set?: FeatureWhereUniqueInput | FeatureWhereUniqueInput[]
    disconnect?: FeatureWhereUniqueInput | FeatureWhereUniqueInput[]
    delete?: FeatureWhereUniqueInput | FeatureWhereUniqueInput[]
    connect?: FeatureWhereUniqueInput | FeatureWhereUniqueInput[]
    update?: FeatureUpdateWithWhereUniqueWithoutPlansInput | FeatureUpdateWithWhereUniqueWithoutPlansInput[]
    updateMany?: FeatureUpdateManyWithWhereWithoutPlansInput | FeatureUpdateManyWithWhereWithoutPlansInput[]
    deleteMany?: FeatureScalarWhereInput | FeatureScalarWhereInput[]
  }

  export type PlanCreateNestedManyWithoutFeaturesInput = {
    create?: XOR<PlanCreateWithoutFeaturesInput, PlanUncheckedCreateWithoutFeaturesInput> | PlanCreateWithoutFeaturesInput[] | PlanUncheckedCreateWithoutFeaturesInput[]
    connectOrCreate?: PlanCreateOrConnectWithoutFeaturesInput | PlanCreateOrConnectWithoutFeaturesInput[]
    connect?: PlanWhereUniqueInput | PlanWhereUniqueInput[]
  }

  export type PlanUncheckedCreateNestedManyWithoutFeaturesInput = {
    create?: XOR<PlanCreateWithoutFeaturesInput, PlanUncheckedCreateWithoutFeaturesInput> | PlanCreateWithoutFeaturesInput[] | PlanUncheckedCreateWithoutFeaturesInput[]
    connectOrCreate?: PlanCreateOrConnectWithoutFeaturesInput | PlanCreateOrConnectWithoutFeaturesInput[]
    connect?: PlanWhereUniqueInput | PlanWhereUniqueInput[]
  }

  export type PlanUpdateManyWithoutFeaturesNestedInput = {
    create?: XOR<PlanCreateWithoutFeaturesInput, PlanUncheckedCreateWithoutFeaturesInput> | PlanCreateWithoutFeaturesInput[] | PlanUncheckedCreateWithoutFeaturesInput[]
    connectOrCreate?: PlanCreateOrConnectWithoutFeaturesInput | PlanCreateOrConnectWithoutFeaturesInput[]
    upsert?: PlanUpsertWithWhereUniqueWithoutFeaturesInput | PlanUpsertWithWhereUniqueWithoutFeaturesInput[]
    set?: PlanWhereUniqueInput | PlanWhereUniqueInput[]
    disconnect?: PlanWhereUniqueInput | PlanWhereUniqueInput[]
    delete?: PlanWhereUniqueInput | PlanWhereUniqueInput[]
    connect?: PlanWhereUniqueInput | PlanWhereUniqueInput[]
    update?: PlanUpdateWithWhereUniqueWithoutFeaturesInput | PlanUpdateWithWhereUniqueWithoutFeaturesInput[]
    updateMany?: PlanUpdateManyWithWhereWithoutFeaturesInput | PlanUpdateManyWithWhereWithoutFeaturesInput[]
    deleteMany?: PlanScalarWhereInput | PlanScalarWhereInput[]
  }

  export type PlanUncheckedUpdateManyWithoutFeaturesNestedInput = {
    create?: XOR<PlanCreateWithoutFeaturesInput, PlanUncheckedCreateWithoutFeaturesInput> | PlanCreateWithoutFeaturesInput[] | PlanUncheckedCreateWithoutFeaturesInput[]
    connectOrCreate?: PlanCreateOrConnectWithoutFeaturesInput | PlanCreateOrConnectWithoutFeaturesInput[]
    upsert?: PlanUpsertWithWhereUniqueWithoutFeaturesInput | PlanUpsertWithWhereUniqueWithoutFeaturesInput[]
    set?: PlanWhereUniqueInput | PlanWhereUniqueInput[]
    disconnect?: PlanWhereUniqueInput | PlanWhereUniqueInput[]
    delete?: PlanWhereUniqueInput | PlanWhereUniqueInput[]
    connect?: PlanWhereUniqueInput | PlanWhereUniqueInput[]
    update?: PlanUpdateWithWhereUniqueWithoutFeaturesInput | PlanUpdateWithWhereUniqueWithoutFeaturesInput[]
    updateMany?: PlanUpdateManyWithWhereWithoutFeaturesInput | PlanUpdateManyWithWhereWithoutFeaturesInput[]
    deleteMany?: PlanScalarWhereInput | PlanScalarWhereInput[]
  }

  export type OrganizationCreateNestedOneWithoutInvoicesInput = {
    create?: XOR<OrganizationCreateWithoutInvoicesInput, OrganizationUncheckedCreateWithoutInvoicesInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutInvoicesInput
    connect?: OrganizationWhereUniqueInput
  }

  export type SubscriptionCreateNestedOneWithoutInvoicesInput = {
    create?: XOR<SubscriptionCreateWithoutInvoicesInput, SubscriptionUncheckedCreateWithoutInvoicesInput>
    connectOrCreate?: SubscriptionCreateOrConnectWithoutInvoicesInput
    connect?: SubscriptionWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type OrganizationUpdateOneRequiredWithoutInvoicesNestedInput = {
    create?: XOR<OrganizationCreateWithoutInvoicesInput, OrganizationUncheckedCreateWithoutInvoicesInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutInvoicesInput
    upsert?: OrganizationUpsertWithoutInvoicesInput
    connect?: OrganizationWhereUniqueInput
    update?: XOR<XOR<OrganizationUpdateToOneWithWhereWithoutInvoicesInput, OrganizationUpdateWithoutInvoicesInput>, OrganizationUncheckedUpdateWithoutInvoicesInput>
  }

  export type SubscriptionUpdateOneRequiredWithoutInvoicesNestedInput = {
    create?: XOR<SubscriptionCreateWithoutInvoicesInput, SubscriptionUncheckedCreateWithoutInvoicesInput>
    connectOrCreate?: SubscriptionCreateOrConnectWithoutInvoicesInput
    upsert?: SubscriptionUpsertWithoutInvoicesInput
    connect?: SubscriptionWhereUniqueInput
    update?: XOR<XOR<SubscriptionUpdateToOneWithWhereWithoutInvoicesInput, SubscriptionUpdateWithoutInvoicesInput>, SubscriptionUncheckedUpdateWithoutInvoicesInput>
  }

  export type OrganizationCreateNestedOneWithoutAttendancesInput = {
    create?: XOR<OrganizationCreateWithoutAttendancesInput, OrganizationUncheckedCreateWithoutAttendancesInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutAttendancesInput
    connect?: OrganizationWhereUniqueInput
  }

  export type EmployeeCreateNestedOneWithoutAttendancesInput = {
    create?: XOR<EmployeeCreateWithoutAttendancesInput, EmployeeUncheckedCreateWithoutAttendancesInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutAttendancesInput
    connect?: EmployeeWhereUniqueInput
  }

  export type OrganizationUpdateOneRequiredWithoutAttendancesNestedInput = {
    create?: XOR<OrganizationCreateWithoutAttendancesInput, OrganizationUncheckedCreateWithoutAttendancesInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutAttendancesInput
    upsert?: OrganizationUpsertWithoutAttendancesInput
    connect?: OrganizationWhereUniqueInput
    update?: XOR<XOR<OrganizationUpdateToOneWithWhereWithoutAttendancesInput, OrganizationUpdateWithoutAttendancesInput>, OrganizationUncheckedUpdateWithoutAttendancesInput>
  }

  export type EmployeeUpdateOneRequiredWithoutAttendancesNestedInput = {
    create?: XOR<EmployeeCreateWithoutAttendancesInput, EmployeeUncheckedCreateWithoutAttendancesInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutAttendancesInput
    upsert?: EmployeeUpsertWithoutAttendancesInput
    connect?: EmployeeWhereUniqueInput
    update?: XOR<XOR<EmployeeUpdateToOneWithWhereWithoutAttendancesInput, EmployeeUpdateWithoutAttendancesInput>, EmployeeUncheckedUpdateWithoutAttendancesInput>
  }

  export type OrganizationCreateNestedOneWithoutLeave_requestsInput = {
    create?: XOR<OrganizationCreateWithoutLeave_requestsInput, OrganizationUncheckedCreateWithoutLeave_requestsInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutLeave_requestsInput
    connect?: OrganizationWhereUniqueInput
  }

  export type EmployeeCreateNestedOneWithoutLeave_requestsInput = {
    create?: XOR<EmployeeCreateWithoutLeave_requestsInput, EmployeeUncheckedCreateWithoutLeave_requestsInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutLeave_requestsInput
    connect?: EmployeeWhereUniqueInput
  }

  export type EmployeeCreateNestedOneWithoutApproved_leavesInput = {
    create?: XOR<EmployeeCreateWithoutApproved_leavesInput, EmployeeUncheckedCreateWithoutApproved_leavesInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutApproved_leavesInput
    connect?: EmployeeWhereUniqueInput
  }

  export type OrganizationUpdateOneRequiredWithoutLeave_requestsNestedInput = {
    create?: XOR<OrganizationCreateWithoutLeave_requestsInput, OrganizationUncheckedCreateWithoutLeave_requestsInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutLeave_requestsInput
    upsert?: OrganizationUpsertWithoutLeave_requestsInput
    connect?: OrganizationWhereUniqueInput
    update?: XOR<XOR<OrganizationUpdateToOneWithWhereWithoutLeave_requestsInput, OrganizationUpdateWithoutLeave_requestsInput>, OrganizationUncheckedUpdateWithoutLeave_requestsInput>
  }

  export type EmployeeUpdateOneRequiredWithoutLeave_requestsNestedInput = {
    create?: XOR<EmployeeCreateWithoutLeave_requestsInput, EmployeeUncheckedCreateWithoutLeave_requestsInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutLeave_requestsInput
    upsert?: EmployeeUpsertWithoutLeave_requestsInput
    connect?: EmployeeWhereUniqueInput
    update?: XOR<XOR<EmployeeUpdateToOneWithWhereWithoutLeave_requestsInput, EmployeeUpdateWithoutLeave_requestsInput>, EmployeeUncheckedUpdateWithoutLeave_requestsInput>
  }

  export type EmployeeUpdateOneWithoutApproved_leavesNestedInput = {
    create?: XOR<EmployeeCreateWithoutApproved_leavesInput, EmployeeUncheckedCreateWithoutApproved_leavesInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutApproved_leavesInput
    upsert?: EmployeeUpsertWithoutApproved_leavesInput
    disconnect?: EmployeeWhereInput | boolean
    delete?: EmployeeWhereInput | boolean
    connect?: EmployeeWhereUniqueInput
    update?: XOR<XOR<EmployeeUpdateToOneWithWhereWithoutApproved_leavesInput, EmployeeUpdateWithoutApproved_leavesInput>, EmployeeUncheckedUpdateWithoutApproved_leavesInput>
  }

  export type OrganizationCreateNestedOneWithoutPetty_cash_requestsInput = {
    create?: XOR<OrganizationCreateWithoutPetty_cash_requestsInput, OrganizationUncheckedCreateWithoutPetty_cash_requestsInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutPetty_cash_requestsInput
    connect?: OrganizationWhereUniqueInput
  }

  export type EmployeeCreateNestedOneWithoutPetty_cash_requestsInput = {
    create?: XOR<EmployeeCreateWithoutPetty_cash_requestsInput, EmployeeUncheckedCreateWithoutPetty_cash_requestsInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutPetty_cash_requestsInput
    connect?: EmployeeWhereUniqueInput
  }

  export type EmployeeCreateNestedOneWithoutApproved_petty_cashInput = {
    create?: XOR<EmployeeCreateWithoutApproved_petty_cashInput, EmployeeUncheckedCreateWithoutApproved_petty_cashInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutApproved_petty_cashInput
    connect?: EmployeeWhereUniqueInput
  }

  export type OrganizationUpdateOneRequiredWithoutPetty_cash_requestsNestedInput = {
    create?: XOR<OrganizationCreateWithoutPetty_cash_requestsInput, OrganizationUncheckedCreateWithoutPetty_cash_requestsInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutPetty_cash_requestsInput
    upsert?: OrganizationUpsertWithoutPetty_cash_requestsInput
    connect?: OrganizationWhereUniqueInput
    update?: XOR<XOR<OrganizationUpdateToOneWithWhereWithoutPetty_cash_requestsInput, OrganizationUpdateWithoutPetty_cash_requestsInput>, OrganizationUncheckedUpdateWithoutPetty_cash_requestsInput>
  }

  export type EmployeeUpdateOneRequiredWithoutPetty_cash_requestsNestedInput = {
    create?: XOR<EmployeeCreateWithoutPetty_cash_requestsInput, EmployeeUncheckedCreateWithoutPetty_cash_requestsInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutPetty_cash_requestsInput
    upsert?: EmployeeUpsertWithoutPetty_cash_requestsInput
    connect?: EmployeeWhereUniqueInput
    update?: XOR<XOR<EmployeeUpdateToOneWithWhereWithoutPetty_cash_requestsInput, EmployeeUpdateWithoutPetty_cash_requestsInput>, EmployeeUncheckedUpdateWithoutPetty_cash_requestsInput>
  }

  export type EmployeeUpdateOneWithoutApproved_petty_cashNestedInput = {
    create?: XOR<EmployeeCreateWithoutApproved_petty_cashInput, EmployeeUncheckedCreateWithoutApproved_petty_cashInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutApproved_petty_cashInput
    upsert?: EmployeeUpsertWithoutApproved_petty_cashInput
    disconnect?: EmployeeWhereInput | boolean
    delete?: EmployeeWhereInput | boolean
    connect?: EmployeeWhereUniqueInput
    update?: XOR<XOR<EmployeeUpdateToOneWithWhereWithoutApproved_petty_cashInput, EmployeeUpdateWithoutApproved_petty_cashInput>, EmployeeUncheckedUpdateWithoutApproved_petty_cashInput>
  }

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type NestedUuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedUuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type OrganizationCreateWithoutSubscriptionInput = {
    org_id?: string
    sub_id?: string | null
    name: string
    industry?: string | null
    registration_no?: string | null
    address?: string | null
    email: string
    password: string
    phone?: string | null
    logo_url?: string | null
    created_at?: Date | string
    update_at?: Date | string
    invoices?: InvoiceCreateNestedManyWithoutOrganizationInput
    departments?: DepartmentCreateNestedManyWithoutOrganizationInput
    employees?: EmployeeCreateNestedManyWithoutOrganizationInput
    attendances?: AttendanceCreateNestedManyWithoutOrganizationInput
    leave_requests?: LeaveRequestCreateNestedManyWithoutOrganizationInput
    petty_cash_requests?: PettyCashRequestCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationUncheckedCreateWithoutSubscriptionInput = {
    org_id?: string
    sub_id?: string | null
    name: string
    industry?: string | null
    registration_no?: string | null
    address?: string | null
    email: string
    password: string
    phone?: string | null
    logo_url?: string | null
    created_at?: Date | string
    update_at?: Date | string
    invoices?: InvoiceUncheckedCreateNestedManyWithoutOrganizationInput
    departments?: DepartmentUncheckedCreateNestedManyWithoutOrganizationInput
    employees?: EmployeeUncheckedCreateNestedManyWithoutOrganizationInput
    attendances?: AttendanceUncheckedCreateNestedManyWithoutOrganizationInput
    leave_requests?: LeaveRequestUncheckedCreateNestedManyWithoutOrganizationInput
    petty_cash_requests?: PettyCashRequestUncheckedCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationCreateOrConnectWithoutSubscriptionInput = {
    where: OrganizationWhereUniqueInput
    create: XOR<OrganizationCreateWithoutSubscriptionInput, OrganizationUncheckedCreateWithoutSubscriptionInput>
  }

  export type PlanCreateWithoutSubscriptionsInput = {
    plan_id?: string
    name: string
    description?: string | null
    price_monthly?: number | null
    price_annual?: number | null
    currency: string
    max_employees?: number | null
    is_active?: boolean
    created_at?: Date | string
    update_at?: Date | string
    features?: FeatureCreateNestedManyWithoutPlansInput
  }

  export type PlanUncheckedCreateWithoutSubscriptionsInput = {
    plan_id?: string
    name: string
    description?: string | null
    price_monthly?: number | null
    price_annual?: number | null
    currency: string
    max_employees?: number | null
    is_active?: boolean
    created_at?: Date | string
    update_at?: Date | string
    features?: FeatureUncheckedCreateNestedManyWithoutPlansInput
  }

  export type PlanCreateOrConnectWithoutSubscriptionsInput = {
    where: PlanWhereUniqueInput
    create: XOR<PlanCreateWithoutSubscriptionsInput, PlanUncheckedCreateWithoutSubscriptionsInput>
  }

  export type InvoiceCreateWithoutSubscriptionInput = {
    invoice_id?: string
    amount: number
    currency: string
    renewal_date?: Date | string | null
    issue_date: Date | string
    due_date: Date | string
    paid_date?: Date | string | null
    receipt?: string | null
    status: string
    cancelled_at?: Date | string | null
    payment_method?: string | null
    created_at?: Date | string
    update_at?: Date | string
    organization: OrganizationCreateNestedOneWithoutInvoicesInput
  }

  export type InvoiceUncheckedCreateWithoutSubscriptionInput = {
    invoice_id?: string
    org_id: string
    amount: number
    currency: string
    renewal_date?: Date | string | null
    issue_date: Date | string
    due_date: Date | string
    paid_date?: Date | string | null
    receipt?: string | null
    status: string
    cancelled_at?: Date | string | null
    payment_method?: string | null
    created_at?: Date | string
    update_at?: Date | string
  }

  export type InvoiceCreateOrConnectWithoutSubscriptionInput = {
    where: InvoiceWhereUniqueInput
    create: XOR<InvoiceCreateWithoutSubscriptionInput, InvoiceUncheckedCreateWithoutSubscriptionInput>
  }

  export type InvoiceCreateManySubscriptionInputEnvelope = {
    data: InvoiceCreateManySubscriptionInput | InvoiceCreateManySubscriptionInput[]
    skipDuplicates?: boolean
  }

  export type OrganizationUpsertWithoutSubscriptionInput = {
    update: XOR<OrganizationUpdateWithoutSubscriptionInput, OrganizationUncheckedUpdateWithoutSubscriptionInput>
    create: XOR<OrganizationCreateWithoutSubscriptionInput, OrganizationUncheckedCreateWithoutSubscriptionInput>
    where?: OrganizationWhereInput
  }

  export type OrganizationUpdateToOneWithWhereWithoutSubscriptionInput = {
    where?: OrganizationWhereInput
    data: XOR<OrganizationUpdateWithoutSubscriptionInput, OrganizationUncheckedUpdateWithoutSubscriptionInput>
  }

  export type OrganizationUpdateWithoutSubscriptionInput = {
    org_id?: StringFieldUpdateOperationsInput | string
    sub_id?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    registration_no?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    logo_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
    invoices?: InvoiceUpdateManyWithoutOrganizationNestedInput
    departments?: DepartmentUpdateManyWithoutOrganizationNestedInput
    employees?: EmployeeUpdateManyWithoutOrganizationNestedInput
    attendances?: AttendanceUpdateManyWithoutOrganizationNestedInput
    leave_requests?: LeaveRequestUpdateManyWithoutOrganizationNestedInput
    petty_cash_requests?: PettyCashRequestUpdateManyWithoutOrganizationNestedInput
  }

  export type OrganizationUncheckedUpdateWithoutSubscriptionInput = {
    org_id?: StringFieldUpdateOperationsInput | string
    sub_id?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    registration_no?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    logo_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
    invoices?: InvoiceUncheckedUpdateManyWithoutOrganizationNestedInput
    departments?: DepartmentUncheckedUpdateManyWithoutOrganizationNestedInput
    employees?: EmployeeUncheckedUpdateManyWithoutOrganizationNestedInput
    attendances?: AttendanceUncheckedUpdateManyWithoutOrganizationNestedInput
    leave_requests?: LeaveRequestUncheckedUpdateManyWithoutOrganizationNestedInput
    petty_cash_requests?: PettyCashRequestUncheckedUpdateManyWithoutOrganizationNestedInput
  }

  export type PlanUpsertWithoutSubscriptionsInput = {
    update: XOR<PlanUpdateWithoutSubscriptionsInput, PlanUncheckedUpdateWithoutSubscriptionsInput>
    create: XOR<PlanCreateWithoutSubscriptionsInput, PlanUncheckedCreateWithoutSubscriptionsInput>
    where?: PlanWhereInput
  }

  export type PlanUpdateToOneWithWhereWithoutSubscriptionsInput = {
    where?: PlanWhereInput
    data: XOR<PlanUpdateWithoutSubscriptionsInput, PlanUncheckedUpdateWithoutSubscriptionsInput>
  }

  export type PlanUpdateWithoutSubscriptionsInput = {
    plan_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price_monthly?: NullableFloatFieldUpdateOperationsInput | number | null
    price_annual?: NullableFloatFieldUpdateOperationsInput | number | null
    currency?: StringFieldUpdateOperationsInput | string
    max_employees?: NullableIntFieldUpdateOperationsInput | number | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
    features?: FeatureUpdateManyWithoutPlansNestedInput
  }

  export type PlanUncheckedUpdateWithoutSubscriptionsInput = {
    plan_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price_monthly?: NullableFloatFieldUpdateOperationsInput | number | null
    price_annual?: NullableFloatFieldUpdateOperationsInput | number | null
    currency?: StringFieldUpdateOperationsInput | string
    max_employees?: NullableIntFieldUpdateOperationsInput | number | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
    features?: FeatureUncheckedUpdateManyWithoutPlansNestedInput
  }

  export type InvoiceUpsertWithWhereUniqueWithoutSubscriptionInput = {
    where: InvoiceWhereUniqueInput
    update: XOR<InvoiceUpdateWithoutSubscriptionInput, InvoiceUncheckedUpdateWithoutSubscriptionInput>
    create: XOR<InvoiceCreateWithoutSubscriptionInput, InvoiceUncheckedCreateWithoutSubscriptionInput>
  }

  export type InvoiceUpdateWithWhereUniqueWithoutSubscriptionInput = {
    where: InvoiceWhereUniqueInput
    data: XOR<InvoiceUpdateWithoutSubscriptionInput, InvoiceUncheckedUpdateWithoutSubscriptionInput>
  }

  export type InvoiceUpdateManyWithWhereWithoutSubscriptionInput = {
    where: InvoiceScalarWhereInput
    data: XOR<InvoiceUpdateManyMutationInput, InvoiceUncheckedUpdateManyWithoutSubscriptionInput>
  }

  export type InvoiceScalarWhereInput = {
    AND?: InvoiceScalarWhereInput | InvoiceScalarWhereInput[]
    OR?: InvoiceScalarWhereInput[]
    NOT?: InvoiceScalarWhereInput | InvoiceScalarWhereInput[]
    invoice_id?: UuidFilter<"Invoice"> | string
    org_id?: UuidFilter<"Invoice"> | string
    sub_id?: UuidFilter<"Invoice"> | string
    amount?: FloatFilter<"Invoice"> | number
    currency?: StringFilter<"Invoice"> | string
    renewal_date?: DateTimeNullableFilter<"Invoice"> | Date | string | null
    issue_date?: DateTimeFilter<"Invoice"> | Date | string
    due_date?: DateTimeFilter<"Invoice"> | Date | string
    paid_date?: DateTimeNullableFilter<"Invoice"> | Date | string | null
    receipt?: StringNullableFilter<"Invoice"> | string | null
    status?: StringFilter<"Invoice"> | string
    cancelled_at?: DateTimeNullableFilter<"Invoice"> | Date | string | null
    payment_method?: StringNullableFilter<"Invoice"> | string | null
    created_at?: DateTimeFilter<"Invoice"> | Date | string
    update_at?: DateTimeFilter<"Invoice"> | Date | string
  }

  export type OrganizationCreateWithoutDepartmentsInput = {
    org_id?: string
    sub_id?: string | null
    name: string
    industry?: string | null
    registration_no?: string | null
    address?: string | null
    email: string
    password: string
    phone?: string | null
    logo_url?: string | null
    created_at?: Date | string
    update_at?: Date | string
    subscription?: SubscriptionCreateNestedOneWithoutOrganizationInput
    invoices?: InvoiceCreateNestedManyWithoutOrganizationInput
    employees?: EmployeeCreateNestedManyWithoutOrganizationInput
    attendances?: AttendanceCreateNestedManyWithoutOrganizationInput
    leave_requests?: LeaveRequestCreateNestedManyWithoutOrganizationInput
    petty_cash_requests?: PettyCashRequestCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationUncheckedCreateWithoutDepartmentsInput = {
    org_id?: string
    sub_id?: string | null
    name: string
    industry?: string | null
    registration_no?: string | null
    address?: string | null
    email: string
    password: string
    phone?: string | null
    logo_url?: string | null
    created_at?: Date | string
    update_at?: Date | string
    subscription?: SubscriptionUncheckedCreateNestedOneWithoutOrganizationInput
    invoices?: InvoiceUncheckedCreateNestedManyWithoutOrganizationInput
    employees?: EmployeeUncheckedCreateNestedManyWithoutOrganizationInput
    attendances?: AttendanceUncheckedCreateNestedManyWithoutOrganizationInput
    leave_requests?: LeaveRequestUncheckedCreateNestedManyWithoutOrganizationInput
    petty_cash_requests?: PettyCashRequestUncheckedCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationCreateOrConnectWithoutDepartmentsInput = {
    where: OrganizationWhereUniqueInput
    create: XOR<OrganizationCreateWithoutDepartmentsInput, OrganizationUncheckedCreateWithoutDepartmentsInput>
  }

  export type DepartmentCreateWithoutSub_departmentsInput = {
    dep_id?: string
    name: string
    created_at?: Date | string
    update_at?: Date | string
    organization: OrganizationCreateNestedOneWithoutDepartmentsInput
    parent_department?: DepartmentCreateNestedOneWithoutSub_departmentsInput
    head?: EmployeeCreateNestedOneWithoutHeaded_departmentInput
    employees?: EmployeeCreateNestedManyWithoutDepartmentInput
  }

  export type DepartmentUncheckedCreateWithoutSub_departmentsInput = {
    dep_id?: string
    org_id: string
    name: string
    head_id?: string | null
    parent_department_id?: string | null
    created_at?: Date | string
    update_at?: Date | string
    employees?: EmployeeUncheckedCreateNestedManyWithoutDepartmentInput
  }

  export type DepartmentCreateOrConnectWithoutSub_departmentsInput = {
    where: DepartmentWhereUniqueInput
    create: XOR<DepartmentCreateWithoutSub_departmentsInput, DepartmentUncheckedCreateWithoutSub_departmentsInput>
  }

  export type DepartmentCreateWithoutParent_departmentInput = {
    dep_id?: string
    name: string
    created_at?: Date | string
    update_at?: Date | string
    organization: OrganizationCreateNestedOneWithoutDepartmentsInput
    sub_departments?: DepartmentCreateNestedManyWithoutParent_departmentInput
    head?: EmployeeCreateNestedOneWithoutHeaded_departmentInput
    employees?: EmployeeCreateNestedManyWithoutDepartmentInput
  }

  export type DepartmentUncheckedCreateWithoutParent_departmentInput = {
    dep_id?: string
    org_id: string
    name: string
    head_id?: string | null
    created_at?: Date | string
    update_at?: Date | string
    sub_departments?: DepartmentUncheckedCreateNestedManyWithoutParent_departmentInput
    employees?: EmployeeUncheckedCreateNestedManyWithoutDepartmentInput
  }

  export type DepartmentCreateOrConnectWithoutParent_departmentInput = {
    where: DepartmentWhereUniqueInput
    create: XOR<DepartmentCreateWithoutParent_departmentInput, DepartmentUncheckedCreateWithoutParent_departmentInput>
  }

  export type DepartmentCreateManyParent_departmentInputEnvelope = {
    data: DepartmentCreateManyParent_departmentInput | DepartmentCreateManyParent_departmentInput[]
    skipDuplicates?: boolean
  }

  export type EmployeeCreateWithoutHeaded_departmentInput = {
    emp_id?: string
    employee_number: string
    first_name: string
    last_name: string
    email: string
    password: string
    phone?: string | null
    profile_photo_url?: string | null
    designation?: string | null
    employment_type: string
    join_date?: Date | string | null
    resign_date?: Date | string | null
    status: string
    created_at?: Date | string
    update_at?: Date | string
    organization: OrganizationCreateNestedOneWithoutEmployeesInput
    department?: DepartmentCreateNestedOneWithoutEmployeesInput
    attendances?: AttendanceCreateNestedManyWithoutEmployeeInput
    leave_requests?: LeaveRequestCreateNestedManyWithoutEmployeeInput
    approved_leaves?: LeaveRequestCreateNestedManyWithoutApproverInput
    petty_cash_requests?: PettyCashRequestCreateNestedManyWithoutEmployeeInput
    approved_petty_cash?: PettyCashRequestCreateNestedManyWithoutApproverInput
  }

  export type EmployeeUncheckedCreateWithoutHeaded_departmentInput = {
    emp_id?: string
    org_id: string
    dep_id?: string | null
    employee_number: string
    first_name: string
    last_name: string
    email: string
    password: string
    phone?: string | null
    profile_photo_url?: string | null
    designation?: string | null
    employment_type: string
    join_date?: Date | string | null
    resign_date?: Date | string | null
    status: string
    created_at?: Date | string
    update_at?: Date | string
    attendances?: AttendanceUncheckedCreateNestedManyWithoutEmployeeInput
    leave_requests?: LeaveRequestUncheckedCreateNestedManyWithoutEmployeeInput
    approved_leaves?: LeaveRequestUncheckedCreateNestedManyWithoutApproverInput
    petty_cash_requests?: PettyCashRequestUncheckedCreateNestedManyWithoutEmployeeInput
    approved_petty_cash?: PettyCashRequestUncheckedCreateNestedManyWithoutApproverInput
  }

  export type EmployeeCreateOrConnectWithoutHeaded_departmentInput = {
    where: EmployeeWhereUniqueInput
    create: XOR<EmployeeCreateWithoutHeaded_departmentInput, EmployeeUncheckedCreateWithoutHeaded_departmentInput>
  }

  export type EmployeeCreateWithoutDepartmentInput = {
    emp_id?: string
    employee_number: string
    first_name: string
    last_name: string
    email: string
    password: string
    phone?: string | null
    profile_photo_url?: string | null
    designation?: string | null
    employment_type: string
    join_date?: Date | string | null
    resign_date?: Date | string | null
    status: string
    created_at?: Date | string
    update_at?: Date | string
    organization: OrganizationCreateNestedOneWithoutEmployeesInput
    headed_department?: DepartmentCreateNestedOneWithoutHeadInput
    attendances?: AttendanceCreateNestedManyWithoutEmployeeInput
    leave_requests?: LeaveRequestCreateNestedManyWithoutEmployeeInput
    approved_leaves?: LeaveRequestCreateNestedManyWithoutApproverInput
    petty_cash_requests?: PettyCashRequestCreateNestedManyWithoutEmployeeInput
    approved_petty_cash?: PettyCashRequestCreateNestedManyWithoutApproverInput
  }

  export type EmployeeUncheckedCreateWithoutDepartmentInput = {
    emp_id?: string
    org_id: string
    employee_number: string
    first_name: string
    last_name: string
    email: string
    password: string
    phone?: string | null
    profile_photo_url?: string | null
    designation?: string | null
    employment_type: string
    join_date?: Date | string | null
    resign_date?: Date | string | null
    status: string
    created_at?: Date | string
    update_at?: Date | string
    headed_department?: DepartmentUncheckedCreateNestedOneWithoutHeadInput
    attendances?: AttendanceUncheckedCreateNestedManyWithoutEmployeeInput
    leave_requests?: LeaveRequestUncheckedCreateNestedManyWithoutEmployeeInput
    approved_leaves?: LeaveRequestUncheckedCreateNestedManyWithoutApproverInput
    petty_cash_requests?: PettyCashRequestUncheckedCreateNestedManyWithoutEmployeeInput
    approved_petty_cash?: PettyCashRequestUncheckedCreateNestedManyWithoutApproverInput
  }

  export type EmployeeCreateOrConnectWithoutDepartmentInput = {
    where: EmployeeWhereUniqueInput
    create: XOR<EmployeeCreateWithoutDepartmentInput, EmployeeUncheckedCreateWithoutDepartmentInput>
  }

  export type EmployeeCreateManyDepartmentInputEnvelope = {
    data: EmployeeCreateManyDepartmentInput | EmployeeCreateManyDepartmentInput[]
    skipDuplicates?: boolean
  }

  export type OrganizationUpsertWithoutDepartmentsInput = {
    update: XOR<OrganizationUpdateWithoutDepartmentsInput, OrganizationUncheckedUpdateWithoutDepartmentsInput>
    create: XOR<OrganizationCreateWithoutDepartmentsInput, OrganizationUncheckedCreateWithoutDepartmentsInput>
    where?: OrganizationWhereInput
  }

  export type OrganizationUpdateToOneWithWhereWithoutDepartmentsInput = {
    where?: OrganizationWhereInput
    data: XOR<OrganizationUpdateWithoutDepartmentsInput, OrganizationUncheckedUpdateWithoutDepartmentsInput>
  }

  export type OrganizationUpdateWithoutDepartmentsInput = {
    org_id?: StringFieldUpdateOperationsInput | string
    sub_id?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    registration_no?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    logo_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
    subscription?: SubscriptionUpdateOneWithoutOrganizationNestedInput
    invoices?: InvoiceUpdateManyWithoutOrganizationNestedInput
    employees?: EmployeeUpdateManyWithoutOrganizationNestedInput
    attendances?: AttendanceUpdateManyWithoutOrganizationNestedInput
    leave_requests?: LeaveRequestUpdateManyWithoutOrganizationNestedInput
    petty_cash_requests?: PettyCashRequestUpdateManyWithoutOrganizationNestedInput
  }

  export type OrganizationUncheckedUpdateWithoutDepartmentsInput = {
    org_id?: StringFieldUpdateOperationsInput | string
    sub_id?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    registration_no?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    logo_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
    subscription?: SubscriptionUncheckedUpdateOneWithoutOrganizationNestedInput
    invoices?: InvoiceUncheckedUpdateManyWithoutOrganizationNestedInput
    employees?: EmployeeUncheckedUpdateManyWithoutOrganizationNestedInput
    attendances?: AttendanceUncheckedUpdateManyWithoutOrganizationNestedInput
    leave_requests?: LeaveRequestUncheckedUpdateManyWithoutOrganizationNestedInput
    petty_cash_requests?: PettyCashRequestUncheckedUpdateManyWithoutOrganizationNestedInput
  }

  export type DepartmentUpsertWithoutSub_departmentsInput = {
    update: XOR<DepartmentUpdateWithoutSub_departmentsInput, DepartmentUncheckedUpdateWithoutSub_departmentsInput>
    create: XOR<DepartmentCreateWithoutSub_departmentsInput, DepartmentUncheckedCreateWithoutSub_departmentsInput>
    where?: DepartmentWhereInput
  }

  export type DepartmentUpdateToOneWithWhereWithoutSub_departmentsInput = {
    where?: DepartmentWhereInput
    data: XOR<DepartmentUpdateWithoutSub_departmentsInput, DepartmentUncheckedUpdateWithoutSub_departmentsInput>
  }

  export type DepartmentUpdateWithoutSub_departmentsInput = {
    dep_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
    organization?: OrganizationUpdateOneRequiredWithoutDepartmentsNestedInput
    parent_department?: DepartmentUpdateOneWithoutSub_departmentsNestedInput
    head?: EmployeeUpdateOneWithoutHeaded_departmentNestedInput
    employees?: EmployeeUpdateManyWithoutDepartmentNestedInput
  }

  export type DepartmentUncheckedUpdateWithoutSub_departmentsInput = {
    dep_id?: StringFieldUpdateOperationsInput | string
    org_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    head_id?: NullableStringFieldUpdateOperationsInput | string | null
    parent_department_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
    employees?: EmployeeUncheckedUpdateManyWithoutDepartmentNestedInput
  }

  export type DepartmentUpsertWithWhereUniqueWithoutParent_departmentInput = {
    where: DepartmentWhereUniqueInput
    update: XOR<DepartmentUpdateWithoutParent_departmentInput, DepartmentUncheckedUpdateWithoutParent_departmentInput>
    create: XOR<DepartmentCreateWithoutParent_departmentInput, DepartmentUncheckedCreateWithoutParent_departmentInput>
  }

  export type DepartmentUpdateWithWhereUniqueWithoutParent_departmentInput = {
    where: DepartmentWhereUniqueInput
    data: XOR<DepartmentUpdateWithoutParent_departmentInput, DepartmentUncheckedUpdateWithoutParent_departmentInput>
  }

  export type DepartmentUpdateManyWithWhereWithoutParent_departmentInput = {
    where: DepartmentScalarWhereInput
    data: XOR<DepartmentUpdateManyMutationInput, DepartmentUncheckedUpdateManyWithoutParent_departmentInput>
  }

  export type DepartmentScalarWhereInput = {
    AND?: DepartmentScalarWhereInput | DepartmentScalarWhereInput[]
    OR?: DepartmentScalarWhereInput[]
    NOT?: DepartmentScalarWhereInput | DepartmentScalarWhereInput[]
    dep_id?: UuidFilter<"Department"> | string
    org_id?: UuidFilter<"Department"> | string
    name?: StringFilter<"Department"> | string
    head_id?: UuidNullableFilter<"Department"> | string | null
    parent_department_id?: UuidNullableFilter<"Department"> | string | null
    created_at?: DateTimeFilter<"Department"> | Date | string
    update_at?: DateTimeFilter<"Department"> | Date | string
  }

  export type EmployeeUpsertWithoutHeaded_departmentInput = {
    update: XOR<EmployeeUpdateWithoutHeaded_departmentInput, EmployeeUncheckedUpdateWithoutHeaded_departmentInput>
    create: XOR<EmployeeCreateWithoutHeaded_departmentInput, EmployeeUncheckedCreateWithoutHeaded_departmentInput>
    where?: EmployeeWhereInput
  }

  export type EmployeeUpdateToOneWithWhereWithoutHeaded_departmentInput = {
    where?: EmployeeWhereInput
    data: XOR<EmployeeUpdateWithoutHeaded_departmentInput, EmployeeUncheckedUpdateWithoutHeaded_departmentInput>
  }

  export type EmployeeUpdateWithoutHeaded_departmentInput = {
    emp_id?: StringFieldUpdateOperationsInput | string
    employee_number?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    profile_photo_url?: NullableStringFieldUpdateOperationsInput | string | null
    designation?: NullableStringFieldUpdateOperationsInput | string | null
    employment_type?: StringFieldUpdateOperationsInput | string
    join_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resign_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
    organization?: OrganizationUpdateOneRequiredWithoutEmployeesNestedInput
    department?: DepartmentUpdateOneWithoutEmployeesNestedInput
    attendances?: AttendanceUpdateManyWithoutEmployeeNestedInput
    leave_requests?: LeaveRequestUpdateManyWithoutEmployeeNestedInput
    approved_leaves?: LeaveRequestUpdateManyWithoutApproverNestedInput
    petty_cash_requests?: PettyCashRequestUpdateManyWithoutEmployeeNestedInput
    approved_petty_cash?: PettyCashRequestUpdateManyWithoutApproverNestedInput
  }

  export type EmployeeUncheckedUpdateWithoutHeaded_departmentInput = {
    emp_id?: StringFieldUpdateOperationsInput | string
    org_id?: StringFieldUpdateOperationsInput | string
    dep_id?: NullableStringFieldUpdateOperationsInput | string | null
    employee_number?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    profile_photo_url?: NullableStringFieldUpdateOperationsInput | string | null
    designation?: NullableStringFieldUpdateOperationsInput | string | null
    employment_type?: StringFieldUpdateOperationsInput | string
    join_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resign_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
    attendances?: AttendanceUncheckedUpdateManyWithoutEmployeeNestedInput
    leave_requests?: LeaveRequestUncheckedUpdateManyWithoutEmployeeNestedInput
    approved_leaves?: LeaveRequestUncheckedUpdateManyWithoutApproverNestedInput
    petty_cash_requests?: PettyCashRequestUncheckedUpdateManyWithoutEmployeeNestedInput
    approved_petty_cash?: PettyCashRequestUncheckedUpdateManyWithoutApproverNestedInput
  }

  export type EmployeeUpsertWithWhereUniqueWithoutDepartmentInput = {
    where: EmployeeWhereUniqueInput
    update: XOR<EmployeeUpdateWithoutDepartmentInput, EmployeeUncheckedUpdateWithoutDepartmentInput>
    create: XOR<EmployeeCreateWithoutDepartmentInput, EmployeeUncheckedCreateWithoutDepartmentInput>
  }

  export type EmployeeUpdateWithWhereUniqueWithoutDepartmentInput = {
    where: EmployeeWhereUniqueInput
    data: XOR<EmployeeUpdateWithoutDepartmentInput, EmployeeUncheckedUpdateWithoutDepartmentInput>
  }

  export type EmployeeUpdateManyWithWhereWithoutDepartmentInput = {
    where: EmployeeScalarWhereInput
    data: XOR<EmployeeUpdateManyMutationInput, EmployeeUncheckedUpdateManyWithoutDepartmentInput>
  }

  export type EmployeeScalarWhereInput = {
    AND?: EmployeeScalarWhereInput | EmployeeScalarWhereInput[]
    OR?: EmployeeScalarWhereInput[]
    NOT?: EmployeeScalarWhereInput | EmployeeScalarWhereInput[]
    emp_id?: UuidFilter<"Employee"> | string
    org_id?: UuidFilter<"Employee"> | string
    dep_id?: UuidNullableFilter<"Employee"> | string | null
    employee_number?: StringFilter<"Employee"> | string
    first_name?: StringFilter<"Employee"> | string
    last_name?: StringFilter<"Employee"> | string
    email?: StringFilter<"Employee"> | string
    password?: StringFilter<"Employee"> | string
    phone?: StringNullableFilter<"Employee"> | string | null
    profile_photo_url?: StringNullableFilter<"Employee"> | string | null
    designation?: StringNullableFilter<"Employee"> | string | null
    employment_type?: StringFilter<"Employee"> | string
    join_date?: DateTimeNullableFilter<"Employee"> | Date | string | null
    resign_date?: DateTimeNullableFilter<"Employee"> | Date | string | null
    status?: StringFilter<"Employee"> | string
    created_at?: DateTimeFilter<"Employee"> | Date | string
    update_at?: DateTimeFilter<"Employee"> | Date | string
  }

  export type OrganizationCreateWithoutEmployeesInput = {
    org_id?: string
    sub_id?: string | null
    name: string
    industry?: string | null
    registration_no?: string | null
    address?: string | null
    email: string
    password: string
    phone?: string | null
    logo_url?: string | null
    created_at?: Date | string
    update_at?: Date | string
    subscription?: SubscriptionCreateNestedOneWithoutOrganizationInput
    invoices?: InvoiceCreateNestedManyWithoutOrganizationInput
    departments?: DepartmentCreateNestedManyWithoutOrganizationInput
    attendances?: AttendanceCreateNestedManyWithoutOrganizationInput
    leave_requests?: LeaveRequestCreateNestedManyWithoutOrganizationInput
    petty_cash_requests?: PettyCashRequestCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationUncheckedCreateWithoutEmployeesInput = {
    org_id?: string
    sub_id?: string | null
    name: string
    industry?: string | null
    registration_no?: string | null
    address?: string | null
    email: string
    password: string
    phone?: string | null
    logo_url?: string | null
    created_at?: Date | string
    update_at?: Date | string
    subscription?: SubscriptionUncheckedCreateNestedOneWithoutOrganizationInput
    invoices?: InvoiceUncheckedCreateNestedManyWithoutOrganizationInput
    departments?: DepartmentUncheckedCreateNestedManyWithoutOrganizationInput
    attendances?: AttendanceUncheckedCreateNestedManyWithoutOrganizationInput
    leave_requests?: LeaveRequestUncheckedCreateNestedManyWithoutOrganizationInput
    petty_cash_requests?: PettyCashRequestUncheckedCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationCreateOrConnectWithoutEmployeesInput = {
    where: OrganizationWhereUniqueInput
    create: XOR<OrganizationCreateWithoutEmployeesInput, OrganizationUncheckedCreateWithoutEmployeesInput>
  }

  export type DepartmentCreateWithoutEmployeesInput = {
    dep_id?: string
    name: string
    created_at?: Date | string
    update_at?: Date | string
    organization: OrganizationCreateNestedOneWithoutDepartmentsInput
    parent_department?: DepartmentCreateNestedOneWithoutSub_departmentsInput
    sub_departments?: DepartmentCreateNestedManyWithoutParent_departmentInput
    head?: EmployeeCreateNestedOneWithoutHeaded_departmentInput
  }

  export type DepartmentUncheckedCreateWithoutEmployeesInput = {
    dep_id?: string
    org_id: string
    name: string
    head_id?: string | null
    parent_department_id?: string | null
    created_at?: Date | string
    update_at?: Date | string
    sub_departments?: DepartmentUncheckedCreateNestedManyWithoutParent_departmentInput
  }

  export type DepartmentCreateOrConnectWithoutEmployeesInput = {
    where: DepartmentWhereUniqueInput
    create: XOR<DepartmentCreateWithoutEmployeesInput, DepartmentUncheckedCreateWithoutEmployeesInput>
  }

  export type DepartmentCreateWithoutHeadInput = {
    dep_id?: string
    name: string
    created_at?: Date | string
    update_at?: Date | string
    organization: OrganizationCreateNestedOneWithoutDepartmentsInput
    parent_department?: DepartmentCreateNestedOneWithoutSub_departmentsInput
    sub_departments?: DepartmentCreateNestedManyWithoutParent_departmentInput
    employees?: EmployeeCreateNestedManyWithoutDepartmentInput
  }

  export type DepartmentUncheckedCreateWithoutHeadInput = {
    dep_id?: string
    org_id: string
    name: string
    parent_department_id?: string | null
    created_at?: Date | string
    update_at?: Date | string
    sub_departments?: DepartmentUncheckedCreateNestedManyWithoutParent_departmentInput
    employees?: EmployeeUncheckedCreateNestedManyWithoutDepartmentInput
  }

  export type DepartmentCreateOrConnectWithoutHeadInput = {
    where: DepartmentWhereUniqueInput
    create: XOR<DepartmentCreateWithoutHeadInput, DepartmentUncheckedCreateWithoutHeadInput>
  }

  export type AttendanceCreateWithoutEmployeeInput = {
    att_id?: string
    date: Date | string
    check_in_time?: Date | string | null
    check_in_location?: string | null
    check_out_time?: Date | string | null
    check_out_location?: string | null
    work_hours?: number | null
    status: string
    created_at?: Date | string
    update_at?: Date | string
    organization: OrganizationCreateNestedOneWithoutAttendancesInput
  }

  export type AttendanceUncheckedCreateWithoutEmployeeInput = {
    att_id?: string
    org_id: string
    date: Date | string
    check_in_time?: Date | string | null
    check_in_location?: string | null
    check_out_time?: Date | string | null
    check_out_location?: string | null
    work_hours?: number | null
    status: string
    created_at?: Date | string
    update_at?: Date | string
  }

  export type AttendanceCreateOrConnectWithoutEmployeeInput = {
    where: AttendanceWhereUniqueInput
    create: XOR<AttendanceCreateWithoutEmployeeInput, AttendanceUncheckedCreateWithoutEmployeeInput>
  }

  export type AttendanceCreateManyEmployeeInputEnvelope = {
    data: AttendanceCreateManyEmployeeInput | AttendanceCreateManyEmployeeInput[]
    skipDuplicates?: boolean
  }

  export type LeaveRequestCreateWithoutEmployeeInput = {
    leave_id?: string
    leave_type: string
    start_date: Date | string
    end_date: Date | string
    reason?: string | null
    attachments?: string | null
    approved_date?: Date | string | null
    status: string
    created_at?: Date | string
    update_at?: Date | string
    organization: OrganizationCreateNestedOneWithoutLeave_requestsInput
    approver?: EmployeeCreateNestedOneWithoutApproved_leavesInput
  }

  export type LeaveRequestUncheckedCreateWithoutEmployeeInput = {
    leave_id?: string
    org_id: string
    leave_type: string
    start_date: Date | string
    end_date: Date | string
    reason?: string | null
    attachments?: string | null
    approved_by?: string | null
    approved_date?: Date | string | null
    status: string
    created_at?: Date | string
    update_at?: Date | string
  }

  export type LeaveRequestCreateOrConnectWithoutEmployeeInput = {
    where: LeaveRequestWhereUniqueInput
    create: XOR<LeaveRequestCreateWithoutEmployeeInput, LeaveRequestUncheckedCreateWithoutEmployeeInput>
  }

  export type LeaveRequestCreateManyEmployeeInputEnvelope = {
    data: LeaveRequestCreateManyEmployeeInput | LeaveRequestCreateManyEmployeeInput[]
    skipDuplicates?: boolean
  }

  export type LeaveRequestCreateWithoutApproverInput = {
    leave_id?: string
    leave_type: string
    start_date: Date | string
    end_date: Date | string
    reason?: string | null
    attachments?: string | null
    approved_date?: Date | string | null
    status: string
    created_at?: Date | string
    update_at?: Date | string
    organization: OrganizationCreateNestedOneWithoutLeave_requestsInput
    employee: EmployeeCreateNestedOneWithoutLeave_requestsInput
  }

  export type LeaveRequestUncheckedCreateWithoutApproverInput = {
    leave_id?: string
    org_id: string
    emp_id: string
    leave_type: string
    start_date: Date | string
    end_date: Date | string
    reason?: string | null
    attachments?: string | null
    approved_date?: Date | string | null
    status: string
    created_at?: Date | string
    update_at?: Date | string
  }

  export type LeaveRequestCreateOrConnectWithoutApproverInput = {
    where: LeaveRequestWhereUniqueInput
    create: XOR<LeaveRequestCreateWithoutApproverInput, LeaveRequestUncheckedCreateWithoutApproverInput>
  }

  export type LeaveRequestCreateManyApproverInputEnvelope = {
    data: LeaveRequestCreateManyApproverInput | LeaveRequestCreateManyApproverInput[]
    skipDuplicates?: boolean
  }

  export type PettyCashRequestCreateWithoutEmployeeInput = {
    pet_id?: string
    amount: number
    currency: string
    reason?: string | null
    request_date: Date | string
    request_type: string
    attachments?: string | null
    approved_date?: Date | string | null
    status: string
    created_at?: Date | string
    update_at?: Date | string
    organization: OrganizationCreateNestedOneWithoutPetty_cash_requestsInput
    approver?: EmployeeCreateNestedOneWithoutApproved_petty_cashInput
  }

  export type PettyCashRequestUncheckedCreateWithoutEmployeeInput = {
    pet_id?: string
    org_id: string
    amount: number
    currency: string
    reason?: string | null
    request_date: Date | string
    request_type: string
    attachments?: string | null
    approved_date?: Date | string | null
    approved_by?: string | null
    status: string
    created_at?: Date | string
    update_at?: Date | string
  }

  export type PettyCashRequestCreateOrConnectWithoutEmployeeInput = {
    where: PettyCashRequestWhereUniqueInput
    create: XOR<PettyCashRequestCreateWithoutEmployeeInput, PettyCashRequestUncheckedCreateWithoutEmployeeInput>
  }

  export type PettyCashRequestCreateManyEmployeeInputEnvelope = {
    data: PettyCashRequestCreateManyEmployeeInput | PettyCashRequestCreateManyEmployeeInput[]
    skipDuplicates?: boolean
  }

  export type PettyCashRequestCreateWithoutApproverInput = {
    pet_id?: string
    amount: number
    currency: string
    reason?: string | null
    request_date: Date | string
    request_type: string
    attachments?: string | null
    approved_date?: Date | string | null
    status: string
    created_at?: Date | string
    update_at?: Date | string
    organization: OrganizationCreateNestedOneWithoutPetty_cash_requestsInput
    employee: EmployeeCreateNestedOneWithoutPetty_cash_requestsInput
  }

  export type PettyCashRequestUncheckedCreateWithoutApproverInput = {
    pet_id?: string
    org_id: string
    emp_id: string
    amount: number
    currency: string
    reason?: string | null
    request_date: Date | string
    request_type: string
    attachments?: string | null
    approved_date?: Date | string | null
    status: string
    created_at?: Date | string
    update_at?: Date | string
  }

  export type PettyCashRequestCreateOrConnectWithoutApproverInput = {
    where: PettyCashRequestWhereUniqueInput
    create: XOR<PettyCashRequestCreateWithoutApproverInput, PettyCashRequestUncheckedCreateWithoutApproverInput>
  }

  export type PettyCashRequestCreateManyApproverInputEnvelope = {
    data: PettyCashRequestCreateManyApproverInput | PettyCashRequestCreateManyApproverInput[]
    skipDuplicates?: boolean
  }

  export type OrganizationUpsertWithoutEmployeesInput = {
    update: XOR<OrganizationUpdateWithoutEmployeesInput, OrganizationUncheckedUpdateWithoutEmployeesInput>
    create: XOR<OrganizationCreateWithoutEmployeesInput, OrganizationUncheckedCreateWithoutEmployeesInput>
    where?: OrganizationWhereInput
  }

  export type OrganizationUpdateToOneWithWhereWithoutEmployeesInput = {
    where?: OrganizationWhereInput
    data: XOR<OrganizationUpdateWithoutEmployeesInput, OrganizationUncheckedUpdateWithoutEmployeesInput>
  }

  export type OrganizationUpdateWithoutEmployeesInput = {
    org_id?: StringFieldUpdateOperationsInput | string
    sub_id?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    registration_no?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    logo_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
    subscription?: SubscriptionUpdateOneWithoutOrganizationNestedInput
    invoices?: InvoiceUpdateManyWithoutOrganizationNestedInput
    departments?: DepartmentUpdateManyWithoutOrganizationNestedInput
    attendances?: AttendanceUpdateManyWithoutOrganizationNestedInput
    leave_requests?: LeaveRequestUpdateManyWithoutOrganizationNestedInput
    petty_cash_requests?: PettyCashRequestUpdateManyWithoutOrganizationNestedInput
  }

  export type OrganizationUncheckedUpdateWithoutEmployeesInput = {
    org_id?: StringFieldUpdateOperationsInput | string
    sub_id?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    registration_no?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    logo_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
    subscription?: SubscriptionUncheckedUpdateOneWithoutOrganizationNestedInput
    invoices?: InvoiceUncheckedUpdateManyWithoutOrganizationNestedInput
    departments?: DepartmentUncheckedUpdateManyWithoutOrganizationNestedInput
    attendances?: AttendanceUncheckedUpdateManyWithoutOrganizationNestedInput
    leave_requests?: LeaveRequestUncheckedUpdateManyWithoutOrganizationNestedInput
    petty_cash_requests?: PettyCashRequestUncheckedUpdateManyWithoutOrganizationNestedInput
  }

  export type DepartmentUpsertWithoutEmployeesInput = {
    update: XOR<DepartmentUpdateWithoutEmployeesInput, DepartmentUncheckedUpdateWithoutEmployeesInput>
    create: XOR<DepartmentCreateWithoutEmployeesInput, DepartmentUncheckedCreateWithoutEmployeesInput>
    where?: DepartmentWhereInput
  }

  export type DepartmentUpdateToOneWithWhereWithoutEmployeesInput = {
    where?: DepartmentWhereInput
    data: XOR<DepartmentUpdateWithoutEmployeesInput, DepartmentUncheckedUpdateWithoutEmployeesInput>
  }

  export type DepartmentUpdateWithoutEmployeesInput = {
    dep_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
    organization?: OrganizationUpdateOneRequiredWithoutDepartmentsNestedInput
    parent_department?: DepartmentUpdateOneWithoutSub_departmentsNestedInput
    sub_departments?: DepartmentUpdateManyWithoutParent_departmentNestedInput
    head?: EmployeeUpdateOneWithoutHeaded_departmentNestedInput
  }

  export type DepartmentUncheckedUpdateWithoutEmployeesInput = {
    dep_id?: StringFieldUpdateOperationsInput | string
    org_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    head_id?: NullableStringFieldUpdateOperationsInput | string | null
    parent_department_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
    sub_departments?: DepartmentUncheckedUpdateManyWithoutParent_departmentNestedInput
  }

  export type DepartmentUpsertWithoutHeadInput = {
    update: XOR<DepartmentUpdateWithoutHeadInput, DepartmentUncheckedUpdateWithoutHeadInput>
    create: XOR<DepartmentCreateWithoutHeadInput, DepartmentUncheckedCreateWithoutHeadInput>
    where?: DepartmentWhereInput
  }

  export type DepartmentUpdateToOneWithWhereWithoutHeadInput = {
    where?: DepartmentWhereInput
    data: XOR<DepartmentUpdateWithoutHeadInput, DepartmentUncheckedUpdateWithoutHeadInput>
  }

  export type DepartmentUpdateWithoutHeadInput = {
    dep_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
    organization?: OrganizationUpdateOneRequiredWithoutDepartmentsNestedInput
    parent_department?: DepartmentUpdateOneWithoutSub_departmentsNestedInput
    sub_departments?: DepartmentUpdateManyWithoutParent_departmentNestedInput
    employees?: EmployeeUpdateManyWithoutDepartmentNestedInput
  }

  export type DepartmentUncheckedUpdateWithoutHeadInput = {
    dep_id?: StringFieldUpdateOperationsInput | string
    org_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    parent_department_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
    sub_departments?: DepartmentUncheckedUpdateManyWithoutParent_departmentNestedInput
    employees?: EmployeeUncheckedUpdateManyWithoutDepartmentNestedInput
  }

  export type AttendanceUpsertWithWhereUniqueWithoutEmployeeInput = {
    where: AttendanceWhereUniqueInput
    update: XOR<AttendanceUpdateWithoutEmployeeInput, AttendanceUncheckedUpdateWithoutEmployeeInput>
    create: XOR<AttendanceCreateWithoutEmployeeInput, AttendanceUncheckedCreateWithoutEmployeeInput>
  }

  export type AttendanceUpdateWithWhereUniqueWithoutEmployeeInput = {
    where: AttendanceWhereUniqueInput
    data: XOR<AttendanceUpdateWithoutEmployeeInput, AttendanceUncheckedUpdateWithoutEmployeeInput>
  }

  export type AttendanceUpdateManyWithWhereWithoutEmployeeInput = {
    where: AttendanceScalarWhereInput
    data: XOR<AttendanceUpdateManyMutationInput, AttendanceUncheckedUpdateManyWithoutEmployeeInput>
  }

  export type AttendanceScalarWhereInput = {
    AND?: AttendanceScalarWhereInput | AttendanceScalarWhereInput[]
    OR?: AttendanceScalarWhereInput[]
    NOT?: AttendanceScalarWhereInput | AttendanceScalarWhereInput[]
    att_id?: UuidFilter<"Attendance"> | string
    org_id?: UuidFilter<"Attendance"> | string
    emp_id?: UuidFilter<"Attendance"> | string
    date?: DateTimeFilter<"Attendance"> | Date | string
    check_in_time?: DateTimeNullableFilter<"Attendance"> | Date | string | null
    check_in_location?: StringNullableFilter<"Attendance"> | string | null
    check_out_time?: DateTimeNullableFilter<"Attendance"> | Date | string | null
    check_out_location?: StringNullableFilter<"Attendance"> | string | null
    work_hours?: FloatNullableFilter<"Attendance"> | number | null
    status?: StringFilter<"Attendance"> | string
    created_at?: DateTimeFilter<"Attendance"> | Date | string
    update_at?: DateTimeFilter<"Attendance"> | Date | string
  }

  export type LeaveRequestUpsertWithWhereUniqueWithoutEmployeeInput = {
    where: LeaveRequestWhereUniqueInput
    update: XOR<LeaveRequestUpdateWithoutEmployeeInput, LeaveRequestUncheckedUpdateWithoutEmployeeInput>
    create: XOR<LeaveRequestCreateWithoutEmployeeInput, LeaveRequestUncheckedCreateWithoutEmployeeInput>
  }

  export type LeaveRequestUpdateWithWhereUniqueWithoutEmployeeInput = {
    where: LeaveRequestWhereUniqueInput
    data: XOR<LeaveRequestUpdateWithoutEmployeeInput, LeaveRequestUncheckedUpdateWithoutEmployeeInput>
  }

  export type LeaveRequestUpdateManyWithWhereWithoutEmployeeInput = {
    where: LeaveRequestScalarWhereInput
    data: XOR<LeaveRequestUpdateManyMutationInput, LeaveRequestUncheckedUpdateManyWithoutEmployeeInput>
  }

  export type LeaveRequestScalarWhereInput = {
    AND?: LeaveRequestScalarWhereInput | LeaveRequestScalarWhereInput[]
    OR?: LeaveRequestScalarWhereInput[]
    NOT?: LeaveRequestScalarWhereInput | LeaveRequestScalarWhereInput[]
    leave_id?: UuidFilter<"LeaveRequest"> | string
    org_id?: UuidFilter<"LeaveRequest"> | string
    emp_id?: UuidFilter<"LeaveRequest"> | string
    leave_type?: StringFilter<"LeaveRequest"> | string
    start_date?: DateTimeFilter<"LeaveRequest"> | Date | string
    end_date?: DateTimeFilter<"LeaveRequest"> | Date | string
    reason?: StringNullableFilter<"LeaveRequest"> | string | null
    attachments?: StringNullableFilter<"LeaveRequest"> | string | null
    approved_by?: UuidNullableFilter<"LeaveRequest"> | string | null
    approved_date?: DateTimeNullableFilter<"LeaveRequest"> | Date | string | null
    status?: StringFilter<"LeaveRequest"> | string
    created_at?: DateTimeFilter<"LeaveRequest"> | Date | string
    update_at?: DateTimeFilter<"LeaveRequest"> | Date | string
  }

  export type LeaveRequestUpsertWithWhereUniqueWithoutApproverInput = {
    where: LeaveRequestWhereUniqueInput
    update: XOR<LeaveRequestUpdateWithoutApproverInput, LeaveRequestUncheckedUpdateWithoutApproverInput>
    create: XOR<LeaveRequestCreateWithoutApproverInput, LeaveRequestUncheckedCreateWithoutApproverInput>
  }

  export type LeaveRequestUpdateWithWhereUniqueWithoutApproverInput = {
    where: LeaveRequestWhereUniqueInput
    data: XOR<LeaveRequestUpdateWithoutApproverInput, LeaveRequestUncheckedUpdateWithoutApproverInput>
  }

  export type LeaveRequestUpdateManyWithWhereWithoutApproverInput = {
    where: LeaveRequestScalarWhereInput
    data: XOR<LeaveRequestUpdateManyMutationInput, LeaveRequestUncheckedUpdateManyWithoutApproverInput>
  }

  export type PettyCashRequestUpsertWithWhereUniqueWithoutEmployeeInput = {
    where: PettyCashRequestWhereUniqueInput
    update: XOR<PettyCashRequestUpdateWithoutEmployeeInput, PettyCashRequestUncheckedUpdateWithoutEmployeeInput>
    create: XOR<PettyCashRequestCreateWithoutEmployeeInput, PettyCashRequestUncheckedCreateWithoutEmployeeInput>
  }

  export type PettyCashRequestUpdateWithWhereUniqueWithoutEmployeeInput = {
    where: PettyCashRequestWhereUniqueInput
    data: XOR<PettyCashRequestUpdateWithoutEmployeeInput, PettyCashRequestUncheckedUpdateWithoutEmployeeInput>
  }

  export type PettyCashRequestUpdateManyWithWhereWithoutEmployeeInput = {
    where: PettyCashRequestScalarWhereInput
    data: XOR<PettyCashRequestUpdateManyMutationInput, PettyCashRequestUncheckedUpdateManyWithoutEmployeeInput>
  }

  export type PettyCashRequestScalarWhereInput = {
    AND?: PettyCashRequestScalarWhereInput | PettyCashRequestScalarWhereInput[]
    OR?: PettyCashRequestScalarWhereInput[]
    NOT?: PettyCashRequestScalarWhereInput | PettyCashRequestScalarWhereInput[]
    pet_id?: UuidFilter<"PettyCashRequest"> | string
    org_id?: UuidFilter<"PettyCashRequest"> | string
    emp_id?: UuidFilter<"PettyCashRequest"> | string
    amount?: FloatFilter<"PettyCashRequest"> | number
    currency?: StringFilter<"PettyCashRequest"> | string
    reason?: StringNullableFilter<"PettyCashRequest"> | string | null
    request_date?: DateTimeFilter<"PettyCashRequest"> | Date | string
    request_type?: StringFilter<"PettyCashRequest"> | string
    attachments?: StringNullableFilter<"PettyCashRequest"> | string | null
    approved_date?: DateTimeNullableFilter<"PettyCashRequest"> | Date | string | null
    approved_by?: UuidNullableFilter<"PettyCashRequest"> | string | null
    status?: StringFilter<"PettyCashRequest"> | string
    created_at?: DateTimeFilter<"PettyCashRequest"> | Date | string
    update_at?: DateTimeFilter<"PettyCashRequest"> | Date | string
  }

  export type PettyCashRequestUpsertWithWhereUniqueWithoutApproverInput = {
    where: PettyCashRequestWhereUniqueInput
    update: XOR<PettyCashRequestUpdateWithoutApproverInput, PettyCashRequestUncheckedUpdateWithoutApproverInput>
    create: XOR<PettyCashRequestCreateWithoutApproverInput, PettyCashRequestUncheckedCreateWithoutApproverInput>
  }

  export type PettyCashRequestUpdateWithWhereUniqueWithoutApproverInput = {
    where: PettyCashRequestWhereUniqueInput
    data: XOR<PettyCashRequestUpdateWithoutApproverInput, PettyCashRequestUncheckedUpdateWithoutApproverInput>
  }

  export type PettyCashRequestUpdateManyWithWhereWithoutApproverInput = {
    where: PettyCashRequestScalarWhereInput
    data: XOR<PettyCashRequestUpdateManyMutationInput, PettyCashRequestUncheckedUpdateManyWithoutApproverInput>
  }

  export type SubscriptionCreateWithoutOrganizationInput = {
    sub_id?: string
    start_date: Date | string
    end_date: Date | string
    renewal_date?: Date | string | null
    billing_cycle: string
    status: string
    auto_renew?: boolean
    trial_end_date?: Date | string | null
    cancelled_at?: Date | string | null
    payment_method?: string | null
    created_at?: Date | string
    update_at?: Date | string
    plan?: PlanCreateNestedOneWithoutSubscriptionsInput
    invoices?: InvoiceCreateNestedManyWithoutSubscriptionInput
  }

  export type SubscriptionUncheckedCreateWithoutOrganizationInput = {
    sub_id?: string
    plan_id?: string | null
    start_date: Date | string
    end_date: Date | string
    renewal_date?: Date | string | null
    billing_cycle: string
    status: string
    auto_renew?: boolean
    trial_end_date?: Date | string | null
    cancelled_at?: Date | string | null
    payment_method?: string | null
    created_at?: Date | string
    update_at?: Date | string
    invoices?: InvoiceUncheckedCreateNestedManyWithoutSubscriptionInput
  }

  export type SubscriptionCreateOrConnectWithoutOrganizationInput = {
    where: SubscriptionWhereUniqueInput
    create: XOR<SubscriptionCreateWithoutOrganizationInput, SubscriptionUncheckedCreateWithoutOrganizationInput>
  }

  export type InvoiceCreateWithoutOrganizationInput = {
    invoice_id?: string
    amount: number
    currency: string
    renewal_date?: Date | string | null
    issue_date: Date | string
    due_date: Date | string
    paid_date?: Date | string | null
    receipt?: string | null
    status: string
    cancelled_at?: Date | string | null
    payment_method?: string | null
    created_at?: Date | string
    update_at?: Date | string
    subscription: SubscriptionCreateNestedOneWithoutInvoicesInput
  }

  export type InvoiceUncheckedCreateWithoutOrganizationInput = {
    invoice_id?: string
    sub_id: string
    amount: number
    currency: string
    renewal_date?: Date | string | null
    issue_date: Date | string
    due_date: Date | string
    paid_date?: Date | string | null
    receipt?: string | null
    status: string
    cancelled_at?: Date | string | null
    payment_method?: string | null
    created_at?: Date | string
    update_at?: Date | string
  }

  export type InvoiceCreateOrConnectWithoutOrganizationInput = {
    where: InvoiceWhereUniqueInput
    create: XOR<InvoiceCreateWithoutOrganizationInput, InvoiceUncheckedCreateWithoutOrganizationInput>
  }

  export type InvoiceCreateManyOrganizationInputEnvelope = {
    data: InvoiceCreateManyOrganizationInput | InvoiceCreateManyOrganizationInput[]
    skipDuplicates?: boolean
  }

  export type DepartmentCreateWithoutOrganizationInput = {
    dep_id?: string
    name: string
    created_at?: Date | string
    update_at?: Date | string
    parent_department?: DepartmentCreateNestedOneWithoutSub_departmentsInput
    sub_departments?: DepartmentCreateNestedManyWithoutParent_departmentInput
    head?: EmployeeCreateNestedOneWithoutHeaded_departmentInput
    employees?: EmployeeCreateNestedManyWithoutDepartmentInput
  }

  export type DepartmentUncheckedCreateWithoutOrganizationInput = {
    dep_id?: string
    name: string
    head_id?: string | null
    parent_department_id?: string | null
    created_at?: Date | string
    update_at?: Date | string
    sub_departments?: DepartmentUncheckedCreateNestedManyWithoutParent_departmentInput
    employees?: EmployeeUncheckedCreateNestedManyWithoutDepartmentInput
  }

  export type DepartmentCreateOrConnectWithoutOrganizationInput = {
    where: DepartmentWhereUniqueInput
    create: XOR<DepartmentCreateWithoutOrganizationInput, DepartmentUncheckedCreateWithoutOrganizationInput>
  }

  export type DepartmentCreateManyOrganizationInputEnvelope = {
    data: DepartmentCreateManyOrganizationInput | DepartmentCreateManyOrganizationInput[]
    skipDuplicates?: boolean
  }

  export type EmployeeCreateWithoutOrganizationInput = {
    emp_id?: string
    employee_number: string
    first_name: string
    last_name: string
    email: string
    password: string
    phone?: string | null
    profile_photo_url?: string | null
    designation?: string | null
    employment_type: string
    join_date?: Date | string | null
    resign_date?: Date | string | null
    status: string
    created_at?: Date | string
    update_at?: Date | string
    department?: DepartmentCreateNestedOneWithoutEmployeesInput
    headed_department?: DepartmentCreateNestedOneWithoutHeadInput
    attendances?: AttendanceCreateNestedManyWithoutEmployeeInput
    leave_requests?: LeaveRequestCreateNestedManyWithoutEmployeeInput
    approved_leaves?: LeaveRequestCreateNestedManyWithoutApproverInput
    petty_cash_requests?: PettyCashRequestCreateNestedManyWithoutEmployeeInput
    approved_petty_cash?: PettyCashRequestCreateNestedManyWithoutApproverInput
  }

  export type EmployeeUncheckedCreateWithoutOrganizationInput = {
    emp_id?: string
    dep_id?: string | null
    employee_number: string
    first_name: string
    last_name: string
    email: string
    password: string
    phone?: string | null
    profile_photo_url?: string | null
    designation?: string | null
    employment_type: string
    join_date?: Date | string | null
    resign_date?: Date | string | null
    status: string
    created_at?: Date | string
    update_at?: Date | string
    headed_department?: DepartmentUncheckedCreateNestedOneWithoutHeadInput
    attendances?: AttendanceUncheckedCreateNestedManyWithoutEmployeeInput
    leave_requests?: LeaveRequestUncheckedCreateNestedManyWithoutEmployeeInput
    approved_leaves?: LeaveRequestUncheckedCreateNestedManyWithoutApproverInput
    petty_cash_requests?: PettyCashRequestUncheckedCreateNestedManyWithoutEmployeeInput
    approved_petty_cash?: PettyCashRequestUncheckedCreateNestedManyWithoutApproverInput
  }

  export type EmployeeCreateOrConnectWithoutOrganizationInput = {
    where: EmployeeWhereUniqueInput
    create: XOR<EmployeeCreateWithoutOrganizationInput, EmployeeUncheckedCreateWithoutOrganizationInput>
  }

  export type EmployeeCreateManyOrganizationInputEnvelope = {
    data: EmployeeCreateManyOrganizationInput | EmployeeCreateManyOrganizationInput[]
    skipDuplicates?: boolean
  }

  export type AttendanceCreateWithoutOrganizationInput = {
    att_id?: string
    date: Date | string
    check_in_time?: Date | string | null
    check_in_location?: string | null
    check_out_time?: Date | string | null
    check_out_location?: string | null
    work_hours?: number | null
    status: string
    created_at?: Date | string
    update_at?: Date | string
    employee: EmployeeCreateNestedOneWithoutAttendancesInput
  }

  export type AttendanceUncheckedCreateWithoutOrganizationInput = {
    att_id?: string
    emp_id: string
    date: Date | string
    check_in_time?: Date | string | null
    check_in_location?: string | null
    check_out_time?: Date | string | null
    check_out_location?: string | null
    work_hours?: number | null
    status: string
    created_at?: Date | string
    update_at?: Date | string
  }

  export type AttendanceCreateOrConnectWithoutOrganizationInput = {
    where: AttendanceWhereUniqueInput
    create: XOR<AttendanceCreateWithoutOrganizationInput, AttendanceUncheckedCreateWithoutOrganizationInput>
  }

  export type AttendanceCreateManyOrganizationInputEnvelope = {
    data: AttendanceCreateManyOrganizationInput | AttendanceCreateManyOrganizationInput[]
    skipDuplicates?: boolean
  }

  export type LeaveRequestCreateWithoutOrganizationInput = {
    leave_id?: string
    leave_type: string
    start_date: Date | string
    end_date: Date | string
    reason?: string | null
    attachments?: string | null
    approved_date?: Date | string | null
    status: string
    created_at?: Date | string
    update_at?: Date | string
    employee: EmployeeCreateNestedOneWithoutLeave_requestsInput
    approver?: EmployeeCreateNestedOneWithoutApproved_leavesInput
  }

  export type LeaveRequestUncheckedCreateWithoutOrganizationInput = {
    leave_id?: string
    emp_id: string
    leave_type: string
    start_date: Date | string
    end_date: Date | string
    reason?: string | null
    attachments?: string | null
    approved_by?: string | null
    approved_date?: Date | string | null
    status: string
    created_at?: Date | string
    update_at?: Date | string
  }

  export type LeaveRequestCreateOrConnectWithoutOrganizationInput = {
    where: LeaveRequestWhereUniqueInput
    create: XOR<LeaveRequestCreateWithoutOrganizationInput, LeaveRequestUncheckedCreateWithoutOrganizationInput>
  }

  export type LeaveRequestCreateManyOrganizationInputEnvelope = {
    data: LeaveRequestCreateManyOrganizationInput | LeaveRequestCreateManyOrganizationInput[]
    skipDuplicates?: boolean
  }

  export type PettyCashRequestCreateWithoutOrganizationInput = {
    pet_id?: string
    amount: number
    currency: string
    reason?: string | null
    request_date: Date | string
    request_type: string
    attachments?: string | null
    approved_date?: Date | string | null
    status: string
    created_at?: Date | string
    update_at?: Date | string
    employee: EmployeeCreateNestedOneWithoutPetty_cash_requestsInput
    approver?: EmployeeCreateNestedOneWithoutApproved_petty_cashInput
  }

  export type PettyCashRequestUncheckedCreateWithoutOrganizationInput = {
    pet_id?: string
    emp_id: string
    amount: number
    currency: string
    reason?: string | null
    request_date: Date | string
    request_type: string
    attachments?: string | null
    approved_date?: Date | string | null
    approved_by?: string | null
    status: string
    created_at?: Date | string
    update_at?: Date | string
  }

  export type PettyCashRequestCreateOrConnectWithoutOrganizationInput = {
    where: PettyCashRequestWhereUniqueInput
    create: XOR<PettyCashRequestCreateWithoutOrganizationInput, PettyCashRequestUncheckedCreateWithoutOrganizationInput>
  }

  export type PettyCashRequestCreateManyOrganizationInputEnvelope = {
    data: PettyCashRequestCreateManyOrganizationInput | PettyCashRequestCreateManyOrganizationInput[]
    skipDuplicates?: boolean
  }

  export type SubscriptionUpsertWithoutOrganizationInput = {
    update: XOR<SubscriptionUpdateWithoutOrganizationInput, SubscriptionUncheckedUpdateWithoutOrganizationInput>
    create: XOR<SubscriptionCreateWithoutOrganizationInput, SubscriptionUncheckedCreateWithoutOrganizationInput>
    where?: SubscriptionWhereInput
  }

  export type SubscriptionUpdateToOneWithWhereWithoutOrganizationInput = {
    where?: SubscriptionWhereInput
    data: XOR<SubscriptionUpdateWithoutOrganizationInput, SubscriptionUncheckedUpdateWithoutOrganizationInput>
  }

  export type SubscriptionUpdateWithoutOrganizationInput = {
    sub_id?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    renewal_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    billing_cycle?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    auto_renew?: BoolFieldUpdateOperationsInput | boolean
    trial_end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelled_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    payment_method?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
    plan?: PlanUpdateOneWithoutSubscriptionsNestedInput
    invoices?: InvoiceUpdateManyWithoutSubscriptionNestedInput
  }

  export type SubscriptionUncheckedUpdateWithoutOrganizationInput = {
    sub_id?: StringFieldUpdateOperationsInput | string
    plan_id?: NullableStringFieldUpdateOperationsInput | string | null
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    renewal_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    billing_cycle?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    auto_renew?: BoolFieldUpdateOperationsInput | boolean
    trial_end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelled_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    payment_method?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
    invoices?: InvoiceUncheckedUpdateManyWithoutSubscriptionNestedInput
  }

  export type InvoiceUpsertWithWhereUniqueWithoutOrganizationInput = {
    where: InvoiceWhereUniqueInput
    update: XOR<InvoiceUpdateWithoutOrganizationInput, InvoiceUncheckedUpdateWithoutOrganizationInput>
    create: XOR<InvoiceCreateWithoutOrganizationInput, InvoiceUncheckedCreateWithoutOrganizationInput>
  }

  export type InvoiceUpdateWithWhereUniqueWithoutOrganizationInput = {
    where: InvoiceWhereUniqueInput
    data: XOR<InvoiceUpdateWithoutOrganizationInput, InvoiceUncheckedUpdateWithoutOrganizationInput>
  }

  export type InvoiceUpdateManyWithWhereWithoutOrganizationInput = {
    where: InvoiceScalarWhereInput
    data: XOR<InvoiceUpdateManyMutationInput, InvoiceUncheckedUpdateManyWithoutOrganizationInput>
  }

  export type DepartmentUpsertWithWhereUniqueWithoutOrganizationInput = {
    where: DepartmentWhereUniqueInput
    update: XOR<DepartmentUpdateWithoutOrganizationInput, DepartmentUncheckedUpdateWithoutOrganizationInput>
    create: XOR<DepartmentCreateWithoutOrganizationInput, DepartmentUncheckedCreateWithoutOrganizationInput>
  }

  export type DepartmentUpdateWithWhereUniqueWithoutOrganizationInput = {
    where: DepartmentWhereUniqueInput
    data: XOR<DepartmentUpdateWithoutOrganizationInput, DepartmentUncheckedUpdateWithoutOrganizationInput>
  }

  export type DepartmentUpdateManyWithWhereWithoutOrganizationInput = {
    where: DepartmentScalarWhereInput
    data: XOR<DepartmentUpdateManyMutationInput, DepartmentUncheckedUpdateManyWithoutOrganizationInput>
  }

  export type EmployeeUpsertWithWhereUniqueWithoutOrganizationInput = {
    where: EmployeeWhereUniqueInput
    update: XOR<EmployeeUpdateWithoutOrganizationInput, EmployeeUncheckedUpdateWithoutOrganizationInput>
    create: XOR<EmployeeCreateWithoutOrganizationInput, EmployeeUncheckedCreateWithoutOrganizationInput>
  }

  export type EmployeeUpdateWithWhereUniqueWithoutOrganizationInput = {
    where: EmployeeWhereUniqueInput
    data: XOR<EmployeeUpdateWithoutOrganizationInput, EmployeeUncheckedUpdateWithoutOrganizationInput>
  }

  export type EmployeeUpdateManyWithWhereWithoutOrganizationInput = {
    where: EmployeeScalarWhereInput
    data: XOR<EmployeeUpdateManyMutationInput, EmployeeUncheckedUpdateManyWithoutOrganizationInput>
  }

  export type AttendanceUpsertWithWhereUniqueWithoutOrganizationInput = {
    where: AttendanceWhereUniqueInput
    update: XOR<AttendanceUpdateWithoutOrganizationInput, AttendanceUncheckedUpdateWithoutOrganizationInput>
    create: XOR<AttendanceCreateWithoutOrganizationInput, AttendanceUncheckedCreateWithoutOrganizationInput>
  }

  export type AttendanceUpdateWithWhereUniqueWithoutOrganizationInput = {
    where: AttendanceWhereUniqueInput
    data: XOR<AttendanceUpdateWithoutOrganizationInput, AttendanceUncheckedUpdateWithoutOrganizationInput>
  }

  export type AttendanceUpdateManyWithWhereWithoutOrganizationInput = {
    where: AttendanceScalarWhereInput
    data: XOR<AttendanceUpdateManyMutationInput, AttendanceUncheckedUpdateManyWithoutOrganizationInput>
  }

  export type LeaveRequestUpsertWithWhereUniqueWithoutOrganizationInput = {
    where: LeaveRequestWhereUniqueInput
    update: XOR<LeaveRequestUpdateWithoutOrganizationInput, LeaveRequestUncheckedUpdateWithoutOrganizationInput>
    create: XOR<LeaveRequestCreateWithoutOrganizationInput, LeaveRequestUncheckedCreateWithoutOrganizationInput>
  }

  export type LeaveRequestUpdateWithWhereUniqueWithoutOrganizationInput = {
    where: LeaveRequestWhereUniqueInput
    data: XOR<LeaveRequestUpdateWithoutOrganizationInput, LeaveRequestUncheckedUpdateWithoutOrganizationInput>
  }

  export type LeaveRequestUpdateManyWithWhereWithoutOrganizationInput = {
    where: LeaveRequestScalarWhereInput
    data: XOR<LeaveRequestUpdateManyMutationInput, LeaveRequestUncheckedUpdateManyWithoutOrganizationInput>
  }

  export type PettyCashRequestUpsertWithWhereUniqueWithoutOrganizationInput = {
    where: PettyCashRequestWhereUniqueInput
    update: XOR<PettyCashRequestUpdateWithoutOrganizationInput, PettyCashRequestUncheckedUpdateWithoutOrganizationInput>
    create: XOR<PettyCashRequestCreateWithoutOrganizationInput, PettyCashRequestUncheckedCreateWithoutOrganizationInput>
  }

  export type PettyCashRequestUpdateWithWhereUniqueWithoutOrganizationInput = {
    where: PettyCashRequestWhereUniqueInput
    data: XOR<PettyCashRequestUpdateWithoutOrganizationInput, PettyCashRequestUncheckedUpdateWithoutOrganizationInput>
  }

  export type PettyCashRequestUpdateManyWithWhereWithoutOrganizationInput = {
    where: PettyCashRequestScalarWhereInput
    data: XOR<PettyCashRequestUpdateManyMutationInput, PettyCashRequestUncheckedUpdateManyWithoutOrganizationInput>
  }

  export type SubscriptionCreateWithoutPlanInput = {
    sub_id?: string
    start_date: Date | string
    end_date: Date | string
    renewal_date?: Date | string | null
    billing_cycle: string
    status: string
    auto_renew?: boolean
    trial_end_date?: Date | string | null
    cancelled_at?: Date | string | null
    payment_method?: string | null
    created_at?: Date | string
    update_at?: Date | string
    organization?: OrganizationCreateNestedOneWithoutSubscriptionInput
    invoices?: InvoiceCreateNestedManyWithoutSubscriptionInput
  }

  export type SubscriptionUncheckedCreateWithoutPlanInput = {
    sub_id?: string
    org_id?: string | null
    start_date: Date | string
    end_date: Date | string
    renewal_date?: Date | string | null
    billing_cycle: string
    status: string
    auto_renew?: boolean
    trial_end_date?: Date | string | null
    cancelled_at?: Date | string | null
    payment_method?: string | null
    created_at?: Date | string
    update_at?: Date | string
    invoices?: InvoiceUncheckedCreateNestedManyWithoutSubscriptionInput
  }

  export type SubscriptionCreateOrConnectWithoutPlanInput = {
    where: SubscriptionWhereUniqueInput
    create: XOR<SubscriptionCreateWithoutPlanInput, SubscriptionUncheckedCreateWithoutPlanInput>
  }

  export type SubscriptionCreateManyPlanInputEnvelope = {
    data: SubscriptionCreateManyPlanInput | SubscriptionCreateManyPlanInput[]
    skipDuplicates?: boolean
  }

  export type FeatureCreateWithoutPlansInput = {
    fet_id?: string
    name: string
    created_at?: Date | string
    update_at?: Date | string
  }

  export type FeatureUncheckedCreateWithoutPlansInput = {
    fet_id?: string
    name: string
    created_at?: Date | string
    update_at?: Date | string
  }

  export type FeatureCreateOrConnectWithoutPlansInput = {
    where: FeatureWhereUniqueInput
    create: XOR<FeatureCreateWithoutPlansInput, FeatureUncheckedCreateWithoutPlansInput>
  }

  export type SubscriptionUpsertWithWhereUniqueWithoutPlanInput = {
    where: SubscriptionWhereUniqueInput
    update: XOR<SubscriptionUpdateWithoutPlanInput, SubscriptionUncheckedUpdateWithoutPlanInput>
    create: XOR<SubscriptionCreateWithoutPlanInput, SubscriptionUncheckedCreateWithoutPlanInput>
  }

  export type SubscriptionUpdateWithWhereUniqueWithoutPlanInput = {
    where: SubscriptionWhereUniqueInput
    data: XOR<SubscriptionUpdateWithoutPlanInput, SubscriptionUncheckedUpdateWithoutPlanInput>
  }

  export type SubscriptionUpdateManyWithWhereWithoutPlanInput = {
    where: SubscriptionScalarWhereInput
    data: XOR<SubscriptionUpdateManyMutationInput, SubscriptionUncheckedUpdateManyWithoutPlanInput>
  }

  export type SubscriptionScalarWhereInput = {
    AND?: SubscriptionScalarWhereInput | SubscriptionScalarWhereInput[]
    OR?: SubscriptionScalarWhereInput[]
    NOT?: SubscriptionScalarWhereInput | SubscriptionScalarWhereInput[]
    sub_id?: UuidFilter<"Subscription"> | string
    org_id?: UuidNullableFilter<"Subscription"> | string | null
    plan_id?: UuidNullableFilter<"Subscription"> | string | null
    start_date?: DateTimeFilter<"Subscription"> | Date | string
    end_date?: DateTimeFilter<"Subscription"> | Date | string
    renewal_date?: DateTimeNullableFilter<"Subscription"> | Date | string | null
    billing_cycle?: StringFilter<"Subscription"> | string
    status?: StringFilter<"Subscription"> | string
    auto_renew?: BoolFilter<"Subscription"> | boolean
    trial_end_date?: DateTimeNullableFilter<"Subscription"> | Date | string | null
    cancelled_at?: DateTimeNullableFilter<"Subscription"> | Date | string | null
    payment_method?: StringNullableFilter<"Subscription"> | string | null
    created_at?: DateTimeFilter<"Subscription"> | Date | string
    update_at?: DateTimeFilter<"Subscription"> | Date | string
  }

  export type FeatureUpsertWithWhereUniqueWithoutPlansInput = {
    where: FeatureWhereUniqueInput
    update: XOR<FeatureUpdateWithoutPlansInput, FeatureUncheckedUpdateWithoutPlansInput>
    create: XOR<FeatureCreateWithoutPlansInput, FeatureUncheckedCreateWithoutPlansInput>
  }

  export type FeatureUpdateWithWhereUniqueWithoutPlansInput = {
    where: FeatureWhereUniqueInput
    data: XOR<FeatureUpdateWithoutPlansInput, FeatureUncheckedUpdateWithoutPlansInput>
  }

  export type FeatureUpdateManyWithWhereWithoutPlansInput = {
    where: FeatureScalarWhereInput
    data: XOR<FeatureUpdateManyMutationInput, FeatureUncheckedUpdateManyWithoutPlansInput>
  }

  export type FeatureScalarWhereInput = {
    AND?: FeatureScalarWhereInput | FeatureScalarWhereInput[]
    OR?: FeatureScalarWhereInput[]
    NOT?: FeatureScalarWhereInput | FeatureScalarWhereInput[]
    fet_id?: UuidFilter<"Feature"> | string
    name?: StringFilter<"Feature"> | string
    created_at?: DateTimeFilter<"Feature"> | Date | string
    update_at?: DateTimeFilter<"Feature"> | Date | string
  }

  export type PlanCreateWithoutFeaturesInput = {
    plan_id?: string
    name: string
    description?: string | null
    price_monthly?: number | null
    price_annual?: number | null
    currency: string
    max_employees?: number | null
    is_active?: boolean
    created_at?: Date | string
    update_at?: Date | string
    subscriptions?: SubscriptionCreateNestedManyWithoutPlanInput
  }

  export type PlanUncheckedCreateWithoutFeaturesInput = {
    plan_id?: string
    name: string
    description?: string | null
    price_monthly?: number | null
    price_annual?: number | null
    currency: string
    max_employees?: number | null
    is_active?: boolean
    created_at?: Date | string
    update_at?: Date | string
    subscriptions?: SubscriptionUncheckedCreateNestedManyWithoutPlanInput
  }

  export type PlanCreateOrConnectWithoutFeaturesInput = {
    where: PlanWhereUniqueInput
    create: XOR<PlanCreateWithoutFeaturesInput, PlanUncheckedCreateWithoutFeaturesInput>
  }

  export type PlanUpsertWithWhereUniqueWithoutFeaturesInput = {
    where: PlanWhereUniqueInput
    update: XOR<PlanUpdateWithoutFeaturesInput, PlanUncheckedUpdateWithoutFeaturesInput>
    create: XOR<PlanCreateWithoutFeaturesInput, PlanUncheckedCreateWithoutFeaturesInput>
  }

  export type PlanUpdateWithWhereUniqueWithoutFeaturesInput = {
    where: PlanWhereUniqueInput
    data: XOR<PlanUpdateWithoutFeaturesInput, PlanUncheckedUpdateWithoutFeaturesInput>
  }

  export type PlanUpdateManyWithWhereWithoutFeaturesInput = {
    where: PlanScalarWhereInput
    data: XOR<PlanUpdateManyMutationInput, PlanUncheckedUpdateManyWithoutFeaturesInput>
  }

  export type PlanScalarWhereInput = {
    AND?: PlanScalarWhereInput | PlanScalarWhereInput[]
    OR?: PlanScalarWhereInput[]
    NOT?: PlanScalarWhereInput | PlanScalarWhereInput[]
    plan_id?: UuidFilter<"Plan"> | string
    name?: StringFilter<"Plan"> | string
    description?: StringNullableFilter<"Plan"> | string | null
    price_monthly?: FloatNullableFilter<"Plan"> | number | null
    price_annual?: FloatNullableFilter<"Plan"> | number | null
    currency?: StringFilter<"Plan"> | string
    max_employees?: IntNullableFilter<"Plan"> | number | null
    is_active?: BoolFilter<"Plan"> | boolean
    created_at?: DateTimeFilter<"Plan"> | Date | string
    update_at?: DateTimeFilter<"Plan"> | Date | string
  }

  export type OrganizationCreateWithoutInvoicesInput = {
    org_id?: string
    sub_id?: string | null
    name: string
    industry?: string | null
    registration_no?: string | null
    address?: string | null
    email: string
    password: string
    phone?: string | null
    logo_url?: string | null
    created_at?: Date | string
    update_at?: Date | string
    subscription?: SubscriptionCreateNestedOneWithoutOrganizationInput
    departments?: DepartmentCreateNestedManyWithoutOrganizationInput
    employees?: EmployeeCreateNestedManyWithoutOrganizationInput
    attendances?: AttendanceCreateNestedManyWithoutOrganizationInput
    leave_requests?: LeaveRequestCreateNestedManyWithoutOrganizationInput
    petty_cash_requests?: PettyCashRequestCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationUncheckedCreateWithoutInvoicesInput = {
    org_id?: string
    sub_id?: string | null
    name: string
    industry?: string | null
    registration_no?: string | null
    address?: string | null
    email: string
    password: string
    phone?: string | null
    logo_url?: string | null
    created_at?: Date | string
    update_at?: Date | string
    subscription?: SubscriptionUncheckedCreateNestedOneWithoutOrganizationInput
    departments?: DepartmentUncheckedCreateNestedManyWithoutOrganizationInput
    employees?: EmployeeUncheckedCreateNestedManyWithoutOrganizationInput
    attendances?: AttendanceUncheckedCreateNestedManyWithoutOrganizationInput
    leave_requests?: LeaveRequestUncheckedCreateNestedManyWithoutOrganizationInput
    petty_cash_requests?: PettyCashRequestUncheckedCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationCreateOrConnectWithoutInvoicesInput = {
    where: OrganizationWhereUniqueInput
    create: XOR<OrganizationCreateWithoutInvoicesInput, OrganizationUncheckedCreateWithoutInvoicesInput>
  }

  export type SubscriptionCreateWithoutInvoicesInput = {
    sub_id?: string
    start_date: Date | string
    end_date: Date | string
    renewal_date?: Date | string | null
    billing_cycle: string
    status: string
    auto_renew?: boolean
    trial_end_date?: Date | string | null
    cancelled_at?: Date | string | null
    payment_method?: string | null
    created_at?: Date | string
    update_at?: Date | string
    organization?: OrganizationCreateNestedOneWithoutSubscriptionInput
    plan?: PlanCreateNestedOneWithoutSubscriptionsInput
  }

  export type SubscriptionUncheckedCreateWithoutInvoicesInput = {
    sub_id?: string
    org_id?: string | null
    plan_id?: string | null
    start_date: Date | string
    end_date: Date | string
    renewal_date?: Date | string | null
    billing_cycle: string
    status: string
    auto_renew?: boolean
    trial_end_date?: Date | string | null
    cancelled_at?: Date | string | null
    payment_method?: string | null
    created_at?: Date | string
    update_at?: Date | string
  }

  export type SubscriptionCreateOrConnectWithoutInvoicesInput = {
    where: SubscriptionWhereUniqueInput
    create: XOR<SubscriptionCreateWithoutInvoicesInput, SubscriptionUncheckedCreateWithoutInvoicesInput>
  }

  export type OrganizationUpsertWithoutInvoicesInput = {
    update: XOR<OrganizationUpdateWithoutInvoicesInput, OrganizationUncheckedUpdateWithoutInvoicesInput>
    create: XOR<OrganizationCreateWithoutInvoicesInput, OrganizationUncheckedCreateWithoutInvoicesInput>
    where?: OrganizationWhereInput
  }

  export type OrganizationUpdateToOneWithWhereWithoutInvoicesInput = {
    where?: OrganizationWhereInput
    data: XOR<OrganizationUpdateWithoutInvoicesInput, OrganizationUncheckedUpdateWithoutInvoicesInput>
  }

  export type OrganizationUpdateWithoutInvoicesInput = {
    org_id?: StringFieldUpdateOperationsInput | string
    sub_id?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    registration_no?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    logo_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
    subscription?: SubscriptionUpdateOneWithoutOrganizationNestedInput
    departments?: DepartmentUpdateManyWithoutOrganizationNestedInput
    employees?: EmployeeUpdateManyWithoutOrganizationNestedInput
    attendances?: AttendanceUpdateManyWithoutOrganizationNestedInput
    leave_requests?: LeaveRequestUpdateManyWithoutOrganizationNestedInput
    petty_cash_requests?: PettyCashRequestUpdateManyWithoutOrganizationNestedInput
  }

  export type OrganizationUncheckedUpdateWithoutInvoicesInput = {
    org_id?: StringFieldUpdateOperationsInput | string
    sub_id?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    registration_no?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    logo_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
    subscription?: SubscriptionUncheckedUpdateOneWithoutOrganizationNestedInput
    departments?: DepartmentUncheckedUpdateManyWithoutOrganizationNestedInput
    employees?: EmployeeUncheckedUpdateManyWithoutOrganizationNestedInput
    attendances?: AttendanceUncheckedUpdateManyWithoutOrganizationNestedInput
    leave_requests?: LeaveRequestUncheckedUpdateManyWithoutOrganizationNestedInput
    petty_cash_requests?: PettyCashRequestUncheckedUpdateManyWithoutOrganizationNestedInput
  }

  export type SubscriptionUpsertWithoutInvoicesInput = {
    update: XOR<SubscriptionUpdateWithoutInvoicesInput, SubscriptionUncheckedUpdateWithoutInvoicesInput>
    create: XOR<SubscriptionCreateWithoutInvoicesInput, SubscriptionUncheckedCreateWithoutInvoicesInput>
    where?: SubscriptionWhereInput
  }

  export type SubscriptionUpdateToOneWithWhereWithoutInvoicesInput = {
    where?: SubscriptionWhereInput
    data: XOR<SubscriptionUpdateWithoutInvoicesInput, SubscriptionUncheckedUpdateWithoutInvoicesInput>
  }

  export type SubscriptionUpdateWithoutInvoicesInput = {
    sub_id?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    renewal_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    billing_cycle?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    auto_renew?: BoolFieldUpdateOperationsInput | boolean
    trial_end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelled_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    payment_method?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
    organization?: OrganizationUpdateOneWithoutSubscriptionNestedInput
    plan?: PlanUpdateOneWithoutSubscriptionsNestedInput
  }

  export type SubscriptionUncheckedUpdateWithoutInvoicesInput = {
    sub_id?: StringFieldUpdateOperationsInput | string
    org_id?: NullableStringFieldUpdateOperationsInput | string | null
    plan_id?: NullableStringFieldUpdateOperationsInput | string | null
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    renewal_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    billing_cycle?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    auto_renew?: BoolFieldUpdateOperationsInput | boolean
    trial_end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelled_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    payment_method?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrganizationCreateWithoutAttendancesInput = {
    org_id?: string
    sub_id?: string | null
    name: string
    industry?: string | null
    registration_no?: string | null
    address?: string | null
    email: string
    password: string
    phone?: string | null
    logo_url?: string | null
    created_at?: Date | string
    update_at?: Date | string
    subscription?: SubscriptionCreateNestedOneWithoutOrganizationInput
    invoices?: InvoiceCreateNestedManyWithoutOrganizationInput
    departments?: DepartmentCreateNestedManyWithoutOrganizationInput
    employees?: EmployeeCreateNestedManyWithoutOrganizationInput
    leave_requests?: LeaveRequestCreateNestedManyWithoutOrganizationInput
    petty_cash_requests?: PettyCashRequestCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationUncheckedCreateWithoutAttendancesInput = {
    org_id?: string
    sub_id?: string | null
    name: string
    industry?: string | null
    registration_no?: string | null
    address?: string | null
    email: string
    password: string
    phone?: string | null
    logo_url?: string | null
    created_at?: Date | string
    update_at?: Date | string
    subscription?: SubscriptionUncheckedCreateNestedOneWithoutOrganizationInput
    invoices?: InvoiceUncheckedCreateNestedManyWithoutOrganizationInput
    departments?: DepartmentUncheckedCreateNestedManyWithoutOrganizationInput
    employees?: EmployeeUncheckedCreateNestedManyWithoutOrganizationInput
    leave_requests?: LeaveRequestUncheckedCreateNestedManyWithoutOrganizationInput
    petty_cash_requests?: PettyCashRequestUncheckedCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationCreateOrConnectWithoutAttendancesInput = {
    where: OrganizationWhereUniqueInput
    create: XOR<OrganizationCreateWithoutAttendancesInput, OrganizationUncheckedCreateWithoutAttendancesInput>
  }

  export type EmployeeCreateWithoutAttendancesInput = {
    emp_id?: string
    employee_number: string
    first_name: string
    last_name: string
    email: string
    password: string
    phone?: string | null
    profile_photo_url?: string | null
    designation?: string | null
    employment_type: string
    join_date?: Date | string | null
    resign_date?: Date | string | null
    status: string
    created_at?: Date | string
    update_at?: Date | string
    organization: OrganizationCreateNestedOneWithoutEmployeesInput
    department?: DepartmentCreateNestedOneWithoutEmployeesInput
    headed_department?: DepartmentCreateNestedOneWithoutHeadInput
    leave_requests?: LeaveRequestCreateNestedManyWithoutEmployeeInput
    approved_leaves?: LeaveRequestCreateNestedManyWithoutApproverInput
    petty_cash_requests?: PettyCashRequestCreateNestedManyWithoutEmployeeInput
    approved_petty_cash?: PettyCashRequestCreateNestedManyWithoutApproverInput
  }

  export type EmployeeUncheckedCreateWithoutAttendancesInput = {
    emp_id?: string
    org_id: string
    dep_id?: string | null
    employee_number: string
    first_name: string
    last_name: string
    email: string
    password: string
    phone?: string | null
    profile_photo_url?: string | null
    designation?: string | null
    employment_type: string
    join_date?: Date | string | null
    resign_date?: Date | string | null
    status: string
    created_at?: Date | string
    update_at?: Date | string
    headed_department?: DepartmentUncheckedCreateNestedOneWithoutHeadInput
    leave_requests?: LeaveRequestUncheckedCreateNestedManyWithoutEmployeeInput
    approved_leaves?: LeaveRequestUncheckedCreateNestedManyWithoutApproverInput
    petty_cash_requests?: PettyCashRequestUncheckedCreateNestedManyWithoutEmployeeInput
    approved_petty_cash?: PettyCashRequestUncheckedCreateNestedManyWithoutApproverInput
  }

  export type EmployeeCreateOrConnectWithoutAttendancesInput = {
    where: EmployeeWhereUniqueInput
    create: XOR<EmployeeCreateWithoutAttendancesInput, EmployeeUncheckedCreateWithoutAttendancesInput>
  }

  export type OrganizationUpsertWithoutAttendancesInput = {
    update: XOR<OrganizationUpdateWithoutAttendancesInput, OrganizationUncheckedUpdateWithoutAttendancesInput>
    create: XOR<OrganizationCreateWithoutAttendancesInput, OrganizationUncheckedCreateWithoutAttendancesInput>
    where?: OrganizationWhereInput
  }

  export type OrganizationUpdateToOneWithWhereWithoutAttendancesInput = {
    where?: OrganizationWhereInput
    data: XOR<OrganizationUpdateWithoutAttendancesInput, OrganizationUncheckedUpdateWithoutAttendancesInput>
  }

  export type OrganizationUpdateWithoutAttendancesInput = {
    org_id?: StringFieldUpdateOperationsInput | string
    sub_id?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    registration_no?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    logo_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
    subscription?: SubscriptionUpdateOneWithoutOrganizationNestedInput
    invoices?: InvoiceUpdateManyWithoutOrganizationNestedInput
    departments?: DepartmentUpdateManyWithoutOrganizationNestedInput
    employees?: EmployeeUpdateManyWithoutOrganizationNestedInput
    leave_requests?: LeaveRequestUpdateManyWithoutOrganizationNestedInput
    petty_cash_requests?: PettyCashRequestUpdateManyWithoutOrganizationNestedInput
  }

  export type OrganizationUncheckedUpdateWithoutAttendancesInput = {
    org_id?: StringFieldUpdateOperationsInput | string
    sub_id?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    registration_no?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    logo_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
    subscription?: SubscriptionUncheckedUpdateOneWithoutOrganizationNestedInput
    invoices?: InvoiceUncheckedUpdateManyWithoutOrganizationNestedInput
    departments?: DepartmentUncheckedUpdateManyWithoutOrganizationNestedInput
    employees?: EmployeeUncheckedUpdateManyWithoutOrganizationNestedInput
    leave_requests?: LeaveRequestUncheckedUpdateManyWithoutOrganizationNestedInput
    petty_cash_requests?: PettyCashRequestUncheckedUpdateManyWithoutOrganizationNestedInput
  }

  export type EmployeeUpsertWithoutAttendancesInput = {
    update: XOR<EmployeeUpdateWithoutAttendancesInput, EmployeeUncheckedUpdateWithoutAttendancesInput>
    create: XOR<EmployeeCreateWithoutAttendancesInput, EmployeeUncheckedCreateWithoutAttendancesInput>
    where?: EmployeeWhereInput
  }

  export type EmployeeUpdateToOneWithWhereWithoutAttendancesInput = {
    where?: EmployeeWhereInput
    data: XOR<EmployeeUpdateWithoutAttendancesInput, EmployeeUncheckedUpdateWithoutAttendancesInput>
  }

  export type EmployeeUpdateWithoutAttendancesInput = {
    emp_id?: StringFieldUpdateOperationsInput | string
    employee_number?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    profile_photo_url?: NullableStringFieldUpdateOperationsInput | string | null
    designation?: NullableStringFieldUpdateOperationsInput | string | null
    employment_type?: StringFieldUpdateOperationsInput | string
    join_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resign_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
    organization?: OrganizationUpdateOneRequiredWithoutEmployeesNestedInput
    department?: DepartmentUpdateOneWithoutEmployeesNestedInput
    headed_department?: DepartmentUpdateOneWithoutHeadNestedInput
    leave_requests?: LeaveRequestUpdateManyWithoutEmployeeNestedInput
    approved_leaves?: LeaveRequestUpdateManyWithoutApproverNestedInput
    petty_cash_requests?: PettyCashRequestUpdateManyWithoutEmployeeNestedInput
    approved_petty_cash?: PettyCashRequestUpdateManyWithoutApproverNestedInput
  }

  export type EmployeeUncheckedUpdateWithoutAttendancesInput = {
    emp_id?: StringFieldUpdateOperationsInput | string
    org_id?: StringFieldUpdateOperationsInput | string
    dep_id?: NullableStringFieldUpdateOperationsInput | string | null
    employee_number?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    profile_photo_url?: NullableStringFieldUpdateOperationsInput | string | null
    designation?: NullableStringFieldUpdateOperationsInput | string | null
    employment_type?: StringFieldUpdateOperationsInput | string
    join_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resign_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
    headed_department?: DepartmentUncheckedUpdateOneWithoutHeadNestedInput
    leave_requests?: LeaveRequestUncheckedUpdateManyWithoutEmployeeNestedInput
    approved_leaves?: LeaveRequestUncheckedUpdateManyWithoutApproverNestedInput
    petty_cash_requests?: PettyCashRequestUncheckedUpdateManyWithoutEmployeeNestedInput
    approved_petty_cash?: PettyCashRequestUncheckedUpdateManyWithoutApproverNestedInput
  }

  export type OrganizationCreateWithoutLeave_requestsInput = {
    org_id?: string
    sub_id?: string | null
    name: string
    industry?: string | null
    registration_no?: string | null
    address?: string | null
    email: string
    password: string
    phone?: string | null
    logo_url?: string | null
    created_at?: Date | string
    update_at?: Date | string
    subscription?: SubscriptionCreateNestedOneWithoutOrganizationInput
    invoices?: InvoiceCreateNestedManyWithoutOrganizationInput
    departments?: DepartmentCreateNestedManyWithoutOrganizationInput
    employees?: EmployeeCreateNestedManyWithoutOrganizationInput
    attendances?: AttendanceCreateNestedManyWithoutOrganizationInput
    petty_cash_requests?: PettyCashRequestCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationUncheckedCreateWithoutLeave_requestsInput = {
    org_id?: string
    sub_id?: string | null
    name: string
    industry?: string | null
    registration_no?: string | null
    address?: string | null
    email: string
    password: string
    phone?: string | null
    logo_url?: string | null
    created_at?: Date | string
    update_at?: Date | string
    subscription?: SubscriptionUncheckedCreateNestedOneWithoutOrganizationInput
    invoices?: InvoiceUncheckedCreateNestedManyWithoutOrganizationInput
    departments?: DepartmentUncheckedCreateNestedManyWithoutOrganizationInput
    employees?: EmployeeUncheckedCreateNestedManyWithoutOrganizationInput
    attendances?: AttendanceUncheckedCreateNestedManyWithoutOrganizationInput
    petty_cash_requests?: PettyCashRequestUncheckedCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationCreateOrConnectWithoutLeave_requestsInput = {
    where: OrganizationWhereUniqueInput
    create: XOR<OrganizationCreateWithoutLeave_requestsInput, OrganizationUncheckedCreateWithoutLeave_requestsInput>
  }

  export type EmployeeCreateWithoutLeave_requestsInput = {
    emp_id?: string
    employee_number: string
    first_name: string
    last_name: string
    email: string
    password: string
    phone?: string | null
    profile_photo_url?: string | null
    designation?: string | null
    employment_type: string
    join_date?: Date | string | null
    resign_date?: Date | string | null
    status: string
    created_at?: Date | string
    update_at?: Date | string
    organization: OrganizationCreateNestedOneWithoutEmployeesInput
    department?: DepartmentCreateNestedOneWithoutEmployeesInput
    headed_department?: DepartmentCreateNestedOneWithoutHeadInput
    attendances?: AttendanceCreateNestedManyWithoutEmployeeInput
    approved_leaves?: LeaveRequestCreateNestedManyWithoutApproverInput
    petty_cash_requests?: PettyCashRequestCreateNestedManyWithoutEmployeeInput
    approved_petty_cash?: PettyCashRequestCreateNestedManyWithoutApproverInput
  }

  export type EmployeeUncheckedCreateWithoutLeave_requestsInput = {
    emp_id?: string
    org_id: string
    dep_id?: string | null
    employee_number: string
    first_name: string
    last_name: string
    email: string
    password: string
    phone?: string | null
    profile_photo_url?: string | null
    designation?: string | null
    employment_type: string
    join_date?: Date | string | null
    resign_date?: Date | string | null
    status: string
    created_at?: Date | string
    update_at?: Date | string
    headed_department?: DepartmentUncheckedCreateNestedOneWithoutHeadInput
    attendances?: AttendanceUncheckedCreateNestedManyWithoutEmployeeInput
    approved_leaves?: LeaveRequestUncheckedCreateNestedManyWithoutApproverInput
    petty_cash_requests?: PettyCashRequestUncheckedCreateNestedManyWithoutEmployeeInput
    approved_petty_cash?: PettyCashRequestUncheckedCreateNestedManyWithoutApproverInput
  }

  export type EmployeeCreateOrConnectWithoutLeave_requestsInput = {
    where: EmployeeWhereUniqueInput
    create: XOR<EmployeeCreateWithoutLeave_requestsInput, EmployeeUncheckedCreateWithoutLeave_requestsInput>
  }

  export type EmployeeCreateWithoutApproved_leavesInput = {
    emp_id?: string
    employee_number: string
    first_name: string
    last_name: string
    email: string
    password: string
    phone?: string | null
    profile_photo_url?: string | null
    designation?: string | null
    employment_type: string
    join_date?: Date | string | null
    resign_date?: Date | string | null
    status: string
    created_at?: Date | string
    update_at?: Date | string
    organization: OrganizationCreateNestedOneWithoutEmployeesInput
    department?: DepartmentCreateNestedOneWithoutEmployeesInput
    headed_department?: DepartmentCreateNestedOneWithoutHeadInput
    attendances?: AttendanceCreateNestedManyWithoutEmployeeInput
    leave_requests?: LeaveRequestCreateNestedManyWithoutEmployeeInput
    petty_cash_requests?: PettyCashRequestCreateNestedManyWithoutEmployeeInput
    approved_petty_cash?: PettyCashRequestCreateNestedManyWithoutApproverInput
  }

  export type EmployeeUncheckedCreateWithoutApproved_leavesInput = {
    emp_id?: string
    org_id: string
    dep_id?: string | null
    employee_number: string
    first_name: string
    last_name: string
    email: string
    password: string
    phone?: string | null
    profile_photo_url?: string | null
    designation?: string | null
    employment_type: string
    join_date?: Date | string | null
    resign_date?: Date | string | null
    status: string
    created_at?: Date | string
    update_at?: Date | string
    headed_department?: DepartmentUncheckedCreateNestedOneWithoutHeadInput
    attendances?: AttendanceUncheckedCreateNestedManyWithoutEmployeeInput
    leave_requests?: LeaveRequestUncheckedCreateNestedManyWithoutEmployeeInput
    petty_cash_requests?: PettyCashRequestUncheckedCreateNestedManyWithoutEmployeeInput
    approved_petty_cash?: PettyCashRequestUncheckedCreateNestedManyWithoutApproverInput
  }

  export type EmployeeCreateOrConnectWithoutApproved_leavesInput = {
    where: EmployeeWhereUniqueInput
    create: XOR<EmployeeCreateWithoutApproved_leavesInput, EmployeeUncheckedCreateWithoutApproved_leavesInput>
  }

  export type OrganizationUpsertWithoutLeave_requestsInput = {
    update: XOR<OrganizationUpdateWithoutLeave_requestsInput, OrganizationUncheckedUpdateWithoutLeave_requestsInput>
    create: XOR<OrganizationCreateWithoutLeave_requestsInput, OrganizationUncheckedCreateWithoutLeave_requestsInput>
    where?: OrganizationWhereInput
  }

  export type OrganizationUpdateToOneWithWhereWithoutLeave_requestsInput = {
    where?: OrganizationWhereInput
    data: XOR<OrganizationUpdateWithoutLeave_requestsInput, OrganizationUncheckedUpdateWithoutLeave_requestsInput>
  }

  export type OrganizationUpdateWithoutLeave_requestsInput = {
    org_id?: StringFieldUpdateOperationsInput | string
    sub_id?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    registration_no?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    logo_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
    subscription?: SubscriptionUpdateOneWithoutOrganizationNestedInput
    invoices?: InvoiceUpdateManyWithoutOrganizationNestedInput
    departments?: DepartmentUpdateManyWithoutOrganizationNestedInput
    employees?: EmployeeUpdateManyWithoutOrganizationNestedInput
    attendances?: AttendanceUpdateManyWithoutOrganizationNestedInput
    petty_cash_requests?: PettyCashRequestUpdateManyWithoutOrganizationNestedInput
  }

  export type OrganizationUncheckedUpdateWithoutLeave_requestsInput = {
    org_id?: StringFieldUpdateOperationsInput | string
    sub_id?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    registration_no?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    logo_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
    subscription?: SubscriptionUncheckedUpdateOneWithoutOrganizationNestedInput
    invoices?: InvoiceUncheckedUpdateManyWithoutOrganizationNestedInput
    departments?: DepartmentUncheckedUpdateManyWithoutOrganizationNestedInput
    employees?: EmployeeUncheckedUpdateManyWithoutOrganizationNestedInput
    attendances?: AttendanceUncheckedUpdateManyWithoutOrganizationNestedInput
    petty_cash_requests?: PettyCashRequestUncheckedUpdateManyWithoutOrganizationNestedInput
  }

  export type EmployeeUpsertWithoutLeave_requestsInput = {
    update: XOR<EmployeeUpdateWithoutLeave_requestsInput, EmployeeUncheckedUpdateWithoutLeave_requestsInput>
    create: XOR<EmployeeCreateWithoutLeave_requestsInput, EmployeeUncheckedCreateWithoutLeave_requestsInput>
    where?: EmployeeWhereInput
  }

  export type EmployeeUpdateToOneWithWhereWithoutLeave_requestsInput = {
    where?: EmployeeWhereInput
    data: XOR<EmployeeUpdateWithoutLeave_requestsInput, EmployeeUncheckedUpdateWithoutLeave_requestsInput>
  }

  export type EmployeeUpdateWithoutLeave_requestsInput = {
    emp_id?: StringFieldUpdateOperationsInput | string
    employee_number?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    profile_photo_url?: NullableStringFieldUpdateOperationsInput | string | null
    designation?: NullableStringFieldUpdateOperationsInput | string | null
    employment_type?: StringFieldUpdateOperationsInput | string
    join_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resign_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
    organization?: OrganizationUpdateOneRequiredWithoutEmployeesNestedInput
    department?: DepartmentUpdateOneWithoutEmployeesNestedInput
    headed_department?: DepartmentUpdateOneWithoutHeadNestedInput
    attendances?: AttendanceUpdateManyWithoutEmployeeNestedInput
    approved_leaves?: LeaveRequestUpdateManyWithoutApproverNestedInput
    petty_cash_requests?: PettyCashRequestUpdateManyWithoutEmployeeNestedInput
    approved_petty_cash?: PettyCashRequestUpdateManyWithoutApproverNestedInput
  }

  export type EmployeeUncheckedUpdateWithoutLeave_requestsInput = {
    emp_id?: StringFieldUpdateOperationsInput | string
    org_id?: StringFieldUpdateOperationsInput | string
    dep_id?: NullableStringFieldUpdateOperationsInput | string | null
    employee_number?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    profile_photo_url?: NullableStringFieldUpdateOperationsInput | string | null
    designation?: NullableStringFieldUpdateOperationsInput | string | null
    employment_type?: StringFieldUpdateOperationsInput | string
    join_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resign_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
    headed_department?: DepartmentUncheckedUpdateOneWithoutHeadNestedInput
    attendances?: AttendanceUncheckedUpdateManyWithoutEmployeeNestedInput
    approved_leaves?: LeaveRequestUncheckedUpdateManyWithoutApproverNestedInput
    petty_cash_requests?: PettyCashRequestUncheckedUpdateManyWithoutEmployeeNestedInput
    approved_petty_cash?: PettyCashRequestUncheckedUpdateManyWithoutApproverNestedInput
  }

  export type EmployeeUpsertWithoutApproved_leavesInput = {
    update: XOR<EmployeeUpdateWithoutApproved_leavesInput, EmployeeUncheckedUpdateWithoutApproved_leavesInput>
    create: XOR<EmployeeCreateWithoutApproved_leavesInput, EmployeeUncheckedCreateWithoutApproved_leavesInput>
    where?: EmployeeWhereInput
  }

  export type EmployeeUpdateToOneWithWhereWithoutApproved_leavesInput = {
    where?: EmployeeWhereInput
    data: XOR<EmployeeUpdateWithoutApproved_leavesInput, EmployeeUncheckedUpdateWithoutApproved_leavesInput>
  }

  export type EmployeeUpdateWithoutApproved_leavesInput = {
    emp_id?: StringFieldUpdateOperationsInput | string
    employee_number?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    profile_photo_url?: NullableStringFieldUpdateOperationsInput | string | null
    designation?: NullableStringFieldUpdateOperationsInput | string | null
    employment_type?: StringFieldUpdateOperationsInput | string
    join_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resign_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
    organization?: OrganizationUpdateOneRequiredWithoutEmployeesNestedInput
    department?: DepartmentUpdateOneWithoutEmployeesNestedInput
    headed_department?: DepartmentUpdateOneWithoutHeadNestedInput
    attendances?: AttendanceUpdateManyWithoutEmployeeNestedInput
    leave_requests?: LeaveRequestUpdateManyWithoutEmployeeNestedInput
    petty_cash_requests?: PettyCashRequestUpdateManyWithoutEmployeeNestedInput
    approved_petty_cash?: PettyCashRequestUpdateManyWithoutApproverNestedInput
  }

  export type EmployeeUncheckedUpdateWithoutApproved_leavesInput = {
    emp_id?: StringFieldUpdateOperationsInput | string
    org_id?: StringFieldUpdateOperationsInput | string
    dep_id?: NullableStringFieldUpdateOperationsInput | string | null
    employee_number?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    profile_photo_url?: NullableStringFieldUpdateOperationsInput | string | null
    designation?: NullableStringFieldUpdateOperationsInput | string | null
    employment_type?: StringFieldUpdateOperationsInput | string
    join_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resign_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
    headed_department?: DepartmentUncheckedUpdateOneWithoutHeadNestedInput
    attendances?: AttendanceUncheckedUpdateManyWithoutEmployeeNestedInput
    leave_requests?: LeaveRequestUncheckedUpdateManyWithoutEmployeeNestedInput
    petty_cash_requests?: PettyCashRequestUncheckedUpdateManyWithoutEmployeeNestedInput
    approved_petty_cash?: PettyCashRequestUncheckedUpdateManyWithoutApproverNestedInput
  }

  export type OrganizationCreateWithoutPetty_cash_requestsInput = {
    org_id?: string
    sub_id?: string | null
    name: string
    industry?: string | null
    registration_no?: string | null
    address?: string | null
    email: string
    password: string
    phone?: string | null
    logo_url?: string | null
    created_at?: Date | string
    update_at?: Date | string
    subscription?: SubscriptionCreateNestedOneWithoutOrganizationInput
    invoices?: InvoiceCreateNestedManyWithoutOrganizationInput
    departments?: DepartmentCreateNestedManyWithoutOrganizationInput
    employees?: EmployeeCreateNestedManyWithoutOrganizationInput
    attendances?: AttendanceCreateNestedManyWithoutOrganizationInput
    leave_requests?: LeaveRequestCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationUncheckedCreateWithoutPetty_cash_requestsInput = {
    org_id?: string
    sub_id?: string | null
    name: string
    industry?: string | null
    registration_no?: string | null
    address?: string | null
    email: string
    password: string
    phone?: string | null
    logo_url?: string | null
    created_at?: Date | string
    update_at?: Date | string
    subscription?: SubscriptionUncheckedCreateNestedOneWithoutOrganizationInput
    invoices?: InvoiceUncheckedCreateNestedManyWithoutOrganizationInput
    departments?: DepartmentUncheckedCreateNestedManyWithoutOrganizationInput
    employees?: EmployeeUncheckedCreateNestedManyWithoutOrganizationInput
    attendances?: AttendanceUncheckedCreateNestedManyWithoutOrganizationInput
    leave_requests?: LeaveRequestUncheckedCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationCreateOrConnectWithoutPetty_cash_requestsInput = {
    where: OrganizationWhereUniqueInput
    create: XOR<OrganizationCreateWithoutPetty_cash_requestsInput, OrganizationUncheckedCreateWithoutPetty_cash_requestsInput>
  }

  export type EmployeeCreateWithoutPetty_cash_requestsInput = {
    emp_id?: string
    employee_number: string
    first_name: string
    last_name: string
    email: string
    password: string
    phone?: string | null
    profile_photo_url?: string | null
    designation?: string | null
    employment_type: string
    join_date?: Date | string | null
    resign_date?: Date | string | null
    status: string
    created_at?: Date | string
    update_at?: Date | string
    organization: OrganizationCreateNestedOneWithoutEmployeesInput
    department?: DepartmentCreateNestedOneWithoutEmployeesInput
    headed_department?: DepartmentCreateNestedOneWithoutHeadInput
    attendances?: AttendanceCreateNestedManyWithoutEmployeeInput
    leave_requests?: LeaveRequestCreateNestedManyWithoutEmployeeInput
    approved_leaves?: LeaveRequestCreateNestedManyWithoutApproverInput
    approved_petty_cash?: PettyCashRequestCreateNestedManyWithoutApproverInput
  }

  export type EmployeeUncheckedCreateWithoutPetty_cash_requestsInput = {
    emp_id?: string
    org_id: string
    dep_id?: string | null
    employee_number: string
    first_name: string
    last_name: string
    email: string
    password: string
    phone?: string | null
    profile_photo_url?: string | null
    designation?: string | null
    employment_type: string
    join_date?: Date | string | null
    resign_date?: Date | string | null
    status: string
    created_at?: Date | string
    update_at?: Date | string
    headed_department?: DepartmentUncheckedCreateNestedOneWithoutHeadInput
    attendances?: AttendanceUncheckedCreateNestedManyWithoutEmployeeInput
    leave_requests?: LeaveRequestUncheckedCreateNestedManyWithoutEmployeeInput
    approved_leaves?: LeaveRequestUncheckedCreateNestedManyWithoutApproverInput
    approved_petty_cash?: PettyCashRequestUncheckedCreateNestedManyWithoutApproverInput
  }

  export type EmployeeCreateOrConnectWithoutPetty_cash_requestsInput = {
    where: EmployeeWhereUniqueInput
    create: XOR<EmployeeCreateWithoutPetty_cash_requestsInput, EmployeeUncheckedCreateWithoutPetty_cash_requestsInput>
  }

  export type EmployeeCreateWithoutApproved_petty_cashInput = {
    emp_id?: string
    employee_number: string
    first_name: string
    last_name: string
    email: string
    password: string
    phone?: string | null
    profile_photo_url?: string | null
    designation?: string | null
    employment_type: string
    join_date?: Date | string | null
    resign_date?: Date | string | null
    status: string
    created_at?: Date | string
    update_at?: Date | string
    organization: OrganizationCreateNestedOneWithoutEmployeesInput
    department?: DepartmentCreateNestedOneWithoutEmployeesInput
    headed_department?: DepartmentCreateNestedOneWithoutHeadInput
    attendances?: AttendanceCreateNestedManyWithoutEmployeeInput
    leave_requests?: LeaveRequestCreateNestedManyWithoutEmployeeInput
    approved_leaves?: LeaveRequestCreateNestedManyWithoutApproverInput
    petty_cash_requests?: PettyCashRequestCreateNestedManyWithoutEmployeeInput
  }

  export type EmployeeUncheckedCreateWithoutApproved_petty_cashInput = {
    emp_id?: string
    org_id: string
    dep_id?: string | null
    employee_number: string
    first_name: string
    last_name: string
    email: string
    password: string
    phone?: string | null
    profile_photo_url?: string | null
    designation?: string | null
    employment_type: string
    join_date?: Date | string | null
    resign_date?: Date | string | null
    status: string
    created_at?: Date | string
    update_at?: Date | string
    headed_department?: DepartmentUncheckedCreateNestedOneWithoutHeadInput
    attendances?: AttendanceUncheckedCreateNestedManyWithoutEmployeeInput
    leave_requests?: LeaveRequestUncheckedCreateNestedManyWithoutEmployeeInput
    approved_leaves?: LeaveRequestUncheckedCreateNestedManyWithoutApproverInput
    petty_cash_requests?: PettyCashRequestUncheckedCreateNestedManyWithoutEmployeeInput
  }

  export type EmployeeCreateOrConnectWithoutApproved_petty_cashInput = {
    where: EmployeeWhereUniqueInput
    create: XOR<EmployeeCreateWithoutApproved_petty_cashInput, EmployeeUncheckedCreateWithoutApproved_petty_cashInput>
  }

  export type OrganizationUpsertWithoutPetty_cash_requestsInput = {
    update: XOR<OrganizationUpdateWithoutPetty_cash_requestsInput, OrganizationUncheckedUpdateWithoutPetty_cash_requestsInput>
    create: XOR<OrganizationCreateWithoutPetty_cash_requestsInput, OrganizationUncheckedCreateWithoutPetty_cash_requestsInput>
    where?: OrganizationWhereInput
  }

  export type OrganizationUpdateToOneWithWhereWithoutPetty_cash_requestsInput = {
    where?: OrganizationWhereInput
    data: XOR<OrganizationUpdateWithoutPetty_cash_requestsInput, OrganizationUncheckedUpdateWithoutPetty_cash_requestsInput>
  }

  export type OrganizationUpdateWithoutPetty_cash_requestsInput = {
    org_id?: StringFieldUpdateOperationsInput | string
    sub_id?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    registration_no?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    logo_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
    subscription?: SubscriptionUpdateOneWithoutOrganizationNestedInput
    invoices?: InvoiceUpdateManyWithoutOrganizationNestedInput
    departments?: DepartmentUpdateManyWithoutOrganizationNestedInput
    employees?: EmployeeUpdateManyWithoutOrganizationNestedInput
    attendances?: AttendanceUpdateManyWithoutOrganizationNestedInput
    leave_requests?: LeaveRequestUpdateManyWithoutOrganizationNestedInput
  }

  export type OrganizationUncheckedUpdateWithoutPetty_cash_requestsInput = {
    org_id?: StringFieldUpdateOperationsInput | string
    sub_id?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    registration_no?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    logo_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
    subscription?: SubscriptionUncheckedUpdateOneWithoutOrganizationNestedInput
    invoices?: InvoiceUncheckedUpdateManyWithoutOrganizationNestedInput
    departments?: DepartmentUncheckedUpdateManyWithoutOrganizationNestedInput
    employees?: EmployeeUncheckedUpdateManyWithoutOrganizationNestedInput
    attendances?: AttendanceUncheckedUpdateManyWithoutOrganizationNestedInput
    leave_requests?: LeaveRequestUncheckedUpdateManyWithoutOrganizationNestedInput
  }

  export type EmployeeUpsertWithoutPetty_cash_requestsInput = {
    update: XOR<EmployeeUpdateWithoutPetty_cash_requestsInput, EmployeeUncheckedUpdateWithoutPetty_cash_requestsInput>
    create: XOR<EmployeeCreateWithoutPetty_cash_requestsInput, EmployeeUncheckedCreateWithoutPetty_cash_requestsInput>
    where?: EmployeeWhereInput
  }

  export type EmployeeUpdateToOneWithWhereWithoutPetty_cash_requestsInput = {
    where?: EmployeeWhereInput
    data: XOR<EmployeeUpdateWithoutPetty_cash_requestsInput, EmployeeUncheckedUpdateWithoutPetty_cash_requestsInput>
  }

  export type EmployeeUpdateWithoutPetty_cash_requestsInput = {
    emp_id?: StringFieldUpdateOperationsInput | string
    employee_number?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    profile_photo_url?: NullableStringFieldUpdateOperationsInput | string | null
    designation?: NullableStringFieldUpdateOperationsInput | string | null
    employment_type?: StringFieldUpdateOperationsInput | string
    join_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resign_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
    organization?: OrganizationUpdateOneRequiredWithoutEmployeesNestedInput
    department?: DepartmentUpdateOneWithoutEmployeesNestedInput
    headed_department?: DepartmentUpdateOneWithoutHeadNestedInput
    attendances?: AttendanceUpdateManyWithoutEmployeeNestedInput
    leave_requests?: LeaveRequestUpdateManyWithoutEmployeeNestedInput
    approved_leaves?: LeaveRequestUpdateManyWithoutApproverNestedInput
    approved_petty_cash?: PettyCashRequestUpdateManyWithoutApproverNestedInput
  }

  export type EmployeeUncheckedUpdateWithoutPetty_cash_requestsInput = {
    emp_id?: StringFieldUpdateOperationsInput | string
    org_id?: StringFieldUpdateOperationsInput | string
    dep_id?: NullableStringFieldUpdateOperationsInput | string | null
    employee_number?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    profile_photo_url?: NullableStringFieldUpdateOperationsInput | string | null
    designation?: NullableStringFieldUpdateOperationsInput | string | null
    employment_type?: StringFieldUpdateOperationsInput | string
    join_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resign_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
    headed_department?: DepartmentUncheckedUpdateOneWithoutHeadNestedInput
    attendances?: AttendanceUncheckedUpdateManyWithoutEmployeeNestedInput
    leave_requests?: LeaveRequestUncheckedUpdateManyWithoutEmployeeNestedInput
    approved_leaves?: LeaveRequestUncheckedUpdateManyWithoutApproverNestedInput
    approved_petty_cash?: PettyCashRequestUncheckedUpdateManyWithoutApproverNestedInput
  }

  export type EmployeeUpsertWithoutApproved_petty_cashInput = {
    update: XOR<EmployeeUpdateWithoutApproved_petty_cashInput, EmployeeUncheckedUpdateWithoutApproved_petty_cashInput>
    create: XOR<EmployeeCreateWithoutApproved_petty_cashInput, EmployeeUncheckedCreateWithoutApproved_petty_cashInput>
    where?: EmployeeWhereInput
  }

  export type EmployeeUpdateToOneWithWhereWithoutApproved_petty_cashInput = {
    where?: EmployeeWhereInput
    data: XOR<EmployeeUpdateWithoutApproved_petty_cashInput, EmployeeUncheckedUpdateWithoutApproved_petty_cashInput>
  }

  export type EmployeeUpdateWithoutApproved_petty_cashInput = {
    emp_id?: StringFieldUpdateOperationsInput | string
    employee_number?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    profile_photo_url?: NullableStringFieldUpdateOperationsInput | string | null
    designation?: NullableStringFieldUpdateOperationsInput | string | null
    employment_type?: StringFieldUpdateOperationsInput | string
    join_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resign_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
    organization?: OrganizationUpdateOneRequiredWithoutEmployeesNestedInput
    department?: DepartmentUpdateOneWithoutEmployeesNestedInput
    headed_department?: DepartmentUpdateOneWithoutHeadNestedInput
    attendances?: AttendanceUpdateManyWithoutEmployeeNestedInput
    leave_requests?: LeaveRequestUpdateManyWithoutEmployeeNestedInput
    approved_leaves?: LeaveRequestUpdateManyWithoutApproverNestedInput
    petty_cash_requests?: PettyCashRequestUpdateManyWithoutEmployeeNestedInput
  }

  export type EmployeeUncheckedUpdateWithoutApproved_petty_cashInput = {
    emp_id?: StringFieldUpdateOperationsInput | string
    org_id?: StringFieldUpdateOperationsInput | string
    dep_id?: NullableStringFieldUpdateOperationsInput | string | null
    employee_number?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    profile_photo_url?: NullableStringFieldUpdateOperationsInput | string | null
    designation?: NullableStringFieldUpdateOperationsInput | string | null
    employment_type?: StringFieldUpdateOperationsInput | string
    join_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resign_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
    headed_department?: DepartmentUncheckedUpdateOneWithoutHeadNestedInput
    attendances?: AttendanceUncheckedUpdateManyWithoutEmployeeNestedInput
    leave_requests?: LeaveRequestUncheckedUpdateManyWithoutEmployeeNestedInput
    approved_leaves?: LeaveRequestUncheckedUpdateManyWithoutApproverNestedInput
    petty_cash_requests?: PettyCashRequestUncheckedUpdateManyWithoutEmployeeNestedInput
  }

  export type InvoiceCreateManySubscriptionInput = {
    invoice_id?: string
    org_id: string
    amount: number
    currency: string
    renewal_date?: Date | string | null
    issue_date: Date | string
    due_date: Date | string
    paid_date?: Date | string | null
    receipt?: string | null
    status: string
    cancelled_at?: Date | string | null
    payment_method?: string | null
    created_at?: Date | string
    update_at?: Date | string
  }

  export type InvoiceUpdateWithoutSubscriptionInput = {
    invoice_id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    renewal_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    issue_date?: DateTimeFieldUpdateOperationsInput | Date | string
    due_date?: DateTimeFieldUpdateOperationsInput | Date | string
    paid_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    receipt?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    cancelled_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    payment_method?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
    organization?: OrganizationUpdateOneRequiredWithoutInvoicesNestedInput
  }

  export type InvoiceUncheckedUpdateWithoutSubscriptionInput = {
    invoice_id?: StringFieldUpdateOperationsInput | string
    org_id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    renewal_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    issue_date?: DateTimeFieldUpdateOperationsInput | Date | string
    due_date?: DateTimeFieldUpdateOperationsInput | Date | string
    paid_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    receipt?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    cancelled_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    payment_method?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvoiceUncheckedUpdateManyWithoutSubscriptionInput = {
    invoice_id?: StringFieldUpdateOperationsInput | string
    org_id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    renewal_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    issue_date?: DateTimeFieldUpdateOperationsInput | Date | string
    due_date?: DateTimeFieldUpdateOperationsInput | Date | string
    paid_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    receipt?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    cancelled_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    payment_method?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DepartmentCreateManyParent_departmentInput = {
    dep_id?: string
    org_id: string
    name: string
    head_id?: string | null
    created_at?: Date | string
    update_at?: Date | string
  }

  export type EmployeeCreateManyDepartmentInput = {
    emp_id?: string
    org_id: string
    employee_number: string
    first_name: string
    last_name: string
    email: string
    password: string
    phone?: string | null
    profile_photo_url?: string | null
    designation?: string | null
    employment_type: string
    join_date?: Date | string | null
    resign_date?: Date | string | null
    status: string
    created_at?: Date | string
    update_at?: Date | string
  }

  export type DepartmentUpdateWithoutParent_departmentInput = {
    dep_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
    organization?: OrganizationUpdateOneRequiredWithoutDepartmentsNestedInput
    sub_departments?: DepartmentUpdateManyWithoutParent_departmentNestedInput
    head?: EmployeeUpdateOneWithoutHeaded_departmentNestedInput
    employees?: EmployeeUpdateManyWithoutDepartmentNestedInput
  }

  export type DepartmentUncheckedUpdateWithoutParent_departmentInput = {
    dep_id?: StringFieldUpdateOperationsInput | string
    org_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    head_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
    sub_departments?: DepartmentUncheckedUpdateManyWithoutParent_departmentNestedInput
    employees?: EmployeeUncheckedUpdateManyWithoutDepartmentNestedInput
  }

  export type DepartmentUncheckedUpdateManyWithoutParent_departmentInput = {
    dep_id?: StringFieldUpdateOperationsInput | string
    org_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    head_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmployeeUpdateWithoutDepartmentInput = {
    emp_id?: StringFieldUpdateOperationsInput | string
    employee_number?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    profile_photo_url?: NullableStringFieldUpdateOperationsInput | string | null
    designation?: NullableStringFieldUpdateOperationsInput | string | null
    employment_type?: StringFieldUpdateOperationsInput | string
    join_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resign_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
    organization?: OrganizationUpdateOneRequiredWithoutEmployeesNestedInput
    headed_department?: DepartmentUpdateOneWithoutHeadNestedInput
    attendances?: AttendanceUpdateManyWithoutEmployeeNestedInput
    leave_requests?: LeaveRequestUpdateManyWithoutEmployeeNestedInput
    approved_leaves?: LeaveRequestUpdateManyWithoutApproverNestedInput
    petty_cash_requests?: PettyCashRequestUpdateManyWithoutEmployeeNestedInput
    approved_petty_cash?: PettyCashRequestUpdateManyWithoutApproverNestedInput
  }

  export type EmployeeUncheckedUpdateWithoutDepartmentInput = {
    emp_id?: StringFieldUpdateOperationsInput | string
    org_id?: StringFieldUpdateOperationsInput | string
    employee_number?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    profile_photo_url?: NullableStringFieldUpdateOperationsInput | string | null
    designation?: NullableStringFieldUpdateOperationsInput | string | null
    employment_type?: StringFieldUpdateOperationsInput | string
    join_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resign_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
    headed_department?: DepartmentUncheckedUpdateOneWithoutHeadNestedInput
    attendances?: AttendanceUncheckedUpdateManyWithoutEmployeeNestedInput
    leave_requests?: LeaveRequestUncheckedUpdateManyWithoutEmployeeNestedInput
    approved_leaves?: LeaveRequestUncheckedUpdateManyWithoutApproverNestedInput
    petty_cash_requests?: PettyCashRequestUncheckedUpdateManyWithoutEmployeeNestedInput
    approved_petty_cash?: PettyCashRequestUncheckedUpdateManyWithoutApproverNestedInput
  }

  export type EmployeeUncheckedUpdateManyWithoutDepartmentInput = {
    emp_id?: StringFieldUpdateOperationsInput | string
    org_id?: StringFieldUpdateOperationsInput | string
    employee_number?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    profile_photo_url?: NullableStringFieldUpdateOperationsInput | string | null
    designation?: NullableStringFieldUpdateOperationsInput | string | null
    employment_type?: StringFieldUpdateOperationsInput | string
    join_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resign_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttendanceCreateManyEmployeeInput = {
    att_id?: string
    org_id: string
    date: Date | string
    check_in_time?: Date | string | null
    check_in_location?: string | null
    check_out_time?: Date | string | null
    check_out_location?: string | null
    work_hours?: number | null
    status: string
    created_at?: Date | string
    update_at?: Date | string
  }

  export type LeaveRequestCreateManyEmployeeInput = {
    leave_id?: string
    org_id: string
    leave_type: string
    start_date: Date | string
    end_date: Date | string
    reason?: string | null
    attachments?: string | null
    approved_by?: string | null
    approved_date?: Date | string | null
    status: string
    created_at?: Date | string
    update_at?: Date | string
  }

  export type LeaveRequestCreateManyApproverInput = {
    leave_id?: string
    org_id: string
    emp_id: string
    leave_type: string
    start_date: Date | string
    end_date: Date | string
    reason?: string | null
    attachments?: string | null
    approved_date?: Date | string | null
    status: string
    created_at?: Date | string
    update_at?: Date | string
  }

  export type PettyCashRequestCreateManyEmployeeInput = {
    pet_id?: string
    org_id: string
    amount: number
    currency: string
    reason?: string | null
    request_date: Date | string
    request_type: string
    attachments?: string | null
    approved_date?: Date | string | null
    approved_by?: string | null
    status: string
    created_at?: Date | string
    update_at?: Date | string
  }

  export type PettyCashRequestCreateManyApproverInput = {
    pet_id?: string
    org_id: string
    emp_id: string
    amount: number
    currency: string
    reason?: string | null
    request_date: Date | string
    request_type: string
    attachments?: string | null
    approved_date?: Date | string | null
    status: string
    created_at?: Date | string
    update_at?: Date | string
  }

  export type AttendanceUpdateWithoutEmployeeInput = {
    att_id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    check_in_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    check_in_location?: NullableStringFieldUpdateOperationsInput | string | null
    check_out_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    check_out_location?: NullableStringFieldUpdateOperationsInput | string | null
    work_hours?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
    organization?: OrganizationUpdateOneRequiredWithoutAttendancesNestedInput
  }

  export type AttendanceUncheckedUpdateWithoutEmployeeInput = {
    att_id?: StringFieldUpdateOperationsInput | string
    org_id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    check_in_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    check_in_location?: NullableStringFieldUpdateOperationsInput | string | null
    check_out_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    check_out_location?: NullableStringFieldUpdateOperationsInput | string | null
    work_hours?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttendanceUncheckedUpdateManyWithoutEmployeeInput = {
    att_id?: StringFieldUpdateOperationsInput | string
    org_id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    check_in_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    check_in_location?: NullableStringFieldUpdateOperationsInput | string | null
    check_out_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    check_out_location?: NullableStringFieldUpdateOperationsInput | string | null
    work_hours?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeaveRequestUpdateWithoutEmployeeInput = {
    leave_id?: StringFieldUpdateOperationsInput | string
    leave_type?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    attachments?: NullableStringFieldUpdateOperationsInput | string | null
    approved_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
    organization?: OrganizationUpdateOneRequiredWithoutLeave_requestsNestedInput
    approver?: EmployeeUpdateOneWithoutApproved_leavesNestedInput
  }

  export type LeaveRequestUncheckedUpdateWithoutEmployeeInput = {
    leave_id?: StringFieldUpdateOperationsInput | string
    org_id?: StringFieldUpdateOperationsInput | string
    leave_type?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    attachments?: NullableStringFieldUpdateOperationsInput | string | null
    approved_by?: NullableStringFieldUpdateOperationsInput | string | null
    approved_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeaveRequestUncheckedUpdateManyWithoutEmployeeInput = {
    leave_id?: StringFieldUpdateOperationsInput | string
    org_id?: StringFieldUpdateOperationsInput | string
    leave_type?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    attachments?: NullableStringFieldUpdateOperationsInput | string | null
    approved_by?: NullableStringFieldUpdateOperationsInput | string | null
    approved_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeaveRequestUpdateWithoutApproverInput = {
    leave_id?: StringFieldUpdateOperationsInput | string
    leave_type?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    attachments?: NullableStringFieldUpdateOperationsInput | string | null
    approved_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
    organization?: OrganizationUpdateOneRequiredWithoutLeave_requestsNestedInput
    employee?: EmployeeUpdateOneRequiredWithoutLeave_requestsNestedInput
  }

  export type LeaveRequestUncheckedUpdateWithoutApproverInput = {
    leave_id?: StringFieldUpdateOperationsInput | string
    org_id?: StringFieldUpdateOperationsInput | string
    emp_id?: StringFieldUpdateOperationsInput | string
    leave_type?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    attachments?: NullableStringFieldUpdateOperationsInput | string | null
    approved_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeaveRequestUncheckedUpdateManyWithoutApproverInput = {
    leave_id?: StringFieldUpdateOperationsInput | string
    org_id?: StringFieldUpdateOperationsInput | string
    emp_id?: StringFieldUpdateOperationsInput | string
    leave_type?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    attachments?: NullableStringFieldUpdateOperationsInput | string | null
    approved_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PettyCashRequestUpdateWithoutEmployeeInput = {
    pet_id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    request_date?: DateTimeFieldUpdateOperationsInput | Date | string
    request_type?: StringFieldUpdateOperationsInput | string
    attachments?: NullableStringFieldUpdateOperationsInput | string | null
    approved_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
    organization?: OrganizationUpdateOneRequiredWithoutPetty_cash_requestsNestedInput
    approver?: EmployeeUpdateOneWithoutApproved_petty_cashNestedInput
  }

  export type PettyCashRequestUncheckedUpdateWithoutEmployeeInput = {
    pet_id?: StringFieldUpdateOperationsInput | string
    org_id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    request_date?: DateTimeFieldUpdateOperationsInput | Date | string
    request_type?: StringFieldUpdateOperationsInput | string
    attachments?: NullableStringFieldUpdateOperationsInput | string | null
    approved_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approved_by?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PettyCashRequestUncheckedUpdateManyWithoutEmployeeInput = {
    pet_id?: StringFieldUpdateOperationsInput | string
    org_id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    request_date?: DateTimeFieldUpdateOperationsInput | Date | string
    request_type?: StringFieldUpdateOperationsInput | string
    attachments?: NullableStringFieldUpdateOperationsInput | string | null
    approved_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approved_by?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PettyCashRequestUpdateWithoutApproverInput = {
    pet_id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    request_date?: DateTimeFieldUpdateOperationsInput | Date | string
    request_type?: StringFieldUpdateOperationsInput | string
    attachments?: NullableStringFieldUpdateOperationsInput | string | null
    approved_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
    organization?: OrganizationUpdateOneRequiredWithoutPetty_cash_requestsNestedInput
    employee?: EmployeeUpdateOneRequiredWithoutPetty_cash_requestsNestedInput
  }

  export type PettyCashRequestUncheckedUpdateWithoutApproverInput = {
    pet_id?: StringFieldUpdateOperationsInput | string
    org_id?: StringFieldUpdateOperationsInput | string
    emp_id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    request_date?: DateTimeFieldUpdateOperationsInput | Date | string
    request_type?: StringFieldUpdateOperationsInput | string
    attachments?: NullableStringFieldUpdateOperationsInput | string | null
    approved_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PettyCashRequestUncheckedUpdateManyWithoutApproverInput = {
    pet_id?: StringFieldUpdateOperationsInput | string
    org_id?: StringFieldUpdateOperationsInput | string
    emp_id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    request_date?: DateTimeFieldUpdateOperationsInput | Date | string
    request_type?: StringFieldUpdateOperationsInput | string
    attachments?: NullableStringFieldUpdateOperationsInput | string | null
    approved_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvoiceCreateManyOrganizationInput = {
    invoice_id?: string
    sub_id: string
    amount: number
    currency: string
    renewal_date?: Date | string | null
    issue_date: Date | string
    due_date: Date | string
    paid_date?: Date | string | null
    receipt?: string | null
    status: string
    cancelled_at?: Date | string | null
    payment_method?: string | null
    created_at?: Date | string
    update_at?: Date | string
  }

  export type DepartmentCreateManyOrganizationInput = {
    dep_id?: string
    name: string
    head_id?: string | null
    parent_department_id?: string | null
    created_at?: Date | string
    update_at?: Date | string
  }

  export type EmployeeCreateManyOrganizationInput = {
    emp_id?: string
    dep_id?: string | null
    employee_number: string
    first_name: string
    last_name: string
    email: string
    password: string
    phone?: string | null
    profile_photo_url?: string | null
    designation?: string | null
    employment_type: string
    join_date?: Date | string | null
    resign_date?: Date | string | null
    status: string
    created_at?: Date | string
    update_at?: Date | string
  }

  export type AttendanceCreateManyOrganizationInput = {
    att_id?: string
    emp_id: string
    date: Date | string
    check_in_time?: Date | string | null
    check_in_location?: string | null
    check_out_time?: Date | string | null
    check_out_location?: string | null
    work_hours?: number | null
    status: string
    created_at?: Date | string
    update_at?: Date | string
  }

  export type LeaveRequestCreateManyOrganizationInput = {
    leave_id?: string
    emp_id: string
    leave_type: string
    start_date: Date | string
    end_date: Date | string
    reason?: string | null
    attachments?: string | null
    approved_by?: string | null
    approved_date?: Date | string | null
    status: string
    created_at?: Date | string
    update_at?: Date | string
  }

  export type PettyCashRequestCreateManyOrganizationInput = {
    pet_id?: string
    emp_id: string
    amount: number
    currency: string
    reason?: string | null
    request_date: Date | string
    request_type: string
    attachments?: string | null
    approved_date?: Date | string | null
    approved_by?: string | null
    status: string
    created_at?: Date | string
    update_at?: Date | string
  }

  export type InvoiceUpdateWithoutOrganizationInput = {
    invoice_id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    renewal_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    issue_date?: DateTimeFieldUpdateOperationsInput | Date | string
    due_date?: DateTimeFieldUpdateOperationsInput | Date | string
    paid_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    receipt?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    cancelled_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    payment_method?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
    subscription?: SubscriptionUpdateOneRequiredWithoutInvoicesNestedInput
  }

  export type InvoiceUncheckedUpdateWithoutOrganizationInput = {
    invoice_id?: StringFieldUpdateOperationsInput | string
    sub_id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    renewal_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    issue_date?: DateTimeFieldUpdateOperationsInput | Date | string
    due_date?: DateTimeFieldUpdateOperationsInput | Date | string
    paid_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    receipt?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    cancelled_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    payment_method?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvoiceUncheckedUpdateManyWithoutOrganizationInput = {
    invoice_id?: StringFieldUpdateOperationsInput | string
    sub_id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    renewal_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    issue_date?: DateTimeFieldUpdateOperationsInput | Date | string
    due_date?: DateTimeFieldUpdateOperationsInput | Date | string
    paid_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    receipt?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    cancelled_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    payment_method?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DepartmentUpdateWithoutOrganizationInput = {
    dep_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
    parent_department?: DepartmentUpdateOneWithoutSub_departmentsNestedInput
    sub_departments?: DepartmentUpdateManyWithoutParent_departmentNestedInput
    head?: EmployeeUpdateOneWithoutHeaded_departmentNestedInput
    employees?: EmployeeUpdateManyWithoutDepartmentNestedInput
  }

  export type DepartmentUncheckedUpdateWithoutOrganizationInput = {
    dep_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    head_id?: NullableStringFieldUpdateOperationsInput | string | null
    parent_department_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
    sub_departments?: DepartmentUncheckedUpdateManyWithoutParent_departmentNestedInput
    employees?: EmployeeUncheckedUpdateManyWithoutDepartmentNestedInput
  }

  export type DepartmentUncheckedUpdateManyWithoutOrganizationInput = {
    dep_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    head_id?: NullableStringFieldUpdateOperationsInput | string | null
    parent_department_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmployeeUpdateWithoutOrganizationInput = {
    emp_id?: StringFieldUpdateOperationsInput | string
    employee_number?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    profile_photo_url?: NullableStringFieldUpdateOperationsInput | string | null
    designation?: NullableStringFieldUpdateOperationsInput | string | null
    employment_type?: StringFieldUpdateOperationsInput | string
    join_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resign_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
    department?: DepartmentUpdateOneWithoutEmployeesNestedInput
    headed_department?: DepartmentUpdateOneWithoutHeadNestedInput
    attendances?: AttendanceUpdateManyWithoutEmployeeNestedInput
    leave_requests?: LeaveRequestUpdateManyWithoutEmployeeNestedInput
    approved_leaves?: LeaveRequestUpdateManyWithoutApproverNestedInput
    petty_cash_requests?: PettyCashRequestUpdateManyWithoutEmployeeNestedInput
    approved_petty_cash?: PettyCashRequestUpdateManyWithoutApproverNestedInput
  }

  export type EmployeeUncheckedUpdateWithoutOrganizationInput = {
    emp_id?: StringFieldUpdateOperationsInput | string
    dep_id?: NullableStringFieldUpdateOperationsInput | string | null
    employee_number?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    profile_photo_url?: NullableStringFieldUpdateOperationsInput | string | null
    designation?: NullableStringFieldUpdateOperationsInput | string | null
    employment_type?: StringFieldUpdateOperationsInput | string
    join_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resign_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
    headed_department?: DepartmentUncheckedUpdateOneWithoutHeadNestedInput
    attendances?: AttendanceUncheckedUpdateManyWithoutEmployeeNestedInput
    leave_requests?: LeaveRequestUncheckedUpdateManyWithoutEmployeeNestedInput
    approved_leaves?: LeaveRequestUncheckedUpdateManyWithoutApproverNestedInput
    petty_cash_requests?: PettyCashRequestUncheckedUpdateManyWithoutEmployeeNestedInput
    approved_petty_cash?: PettyCashRequestUncheckedUpdateManyWithoutApproverNestedInput
  }

  export type EmployeeUncheckedUpdateManyWithoutOrganizationInput = {
    emp_id?: StringFieldUpdateOperationsInput | string
    dep_id?: NullableStringFieldUpdateOperationsInput | string | null
    employee_number?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    profile_photo_url?: NullableStringFieldUpdateOperationsInput | string | null
    designation?: NullableStringFieldUpdateOperationsInput | string | null
    employment_type?: StringFieldUpdateOperationsInput | string
    join_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resign_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttendanceUpdateWithoutOrganizationInput = {
    att_id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    check_in_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    check_in_location?: NullableStringFieldUpdateOperationsInput | string | null
    check_out_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    check_out_location?: NullableStringFieldUpdateOperationsInput | string | null
    work_hours?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
    employee?: EmployeeUpdateOneRequiredWithoutAttendancesNestedInput
  }

  export type AttendanceUncheckedUpdateWithoutOrganizationInput = {
    att_id?: StringFieldUpdateOperationsInput | string
    emp_id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    check_in_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    check_in_location?: NullableStringFieldUpdateOperationsInput | string | null
    check_out_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    check_out_location?: NullableStringFieldUpdateOperationsInput | string | null
    work_hours?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttendanceUncheckedUpdateManyWithoutOrganizationInput = {
    att_id?: StringFieldUpdateOperationsInput | string
    emp_id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    check_in_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    check_in_location?: NullableStringFieldUpdateOperationsInput | string | null
    check_out_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    check_out_location?: NullableStringFieldUpdateOperationsInput | string | null
    work_hours?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeaveRequestUpdateWithoutOrganizationInput = {
    leave_id?: StringFieldUpdateOperationsInput | string
    leave_type?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    attachments?: NullableStringFieldUpdateOperationsInput | string | null
    approved_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
    employee?: EmployeeUpdateOneRequiredWithoutLeave_requestsNestedInput
    approver?: EmployeeUpdateOneWithoutApproved_leavesNestedInput
  }

  export type LeaveRequestUncheckedUpdateWithoutOrganizationInput = {
    leave_id?: StringFieldUpdateOperationsInput | string
    emp_id?: StringFieldUpdateOperationsInput | string
    leave_type?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    attachments?: NullableStringFieldUpdateOperationsInput | string | null
    approved_by?: NullableStringFieldUpdateOperationsInput | string | null
    approved_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeaveRequestUncheckedUpdateManyWithoutOrganizationInput = {
    leave_id?: StringFieldUpdateOperationsInput | string
    emp_id?: StringFieldUpdateOperationsInput | string
    leave_type?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    attachments?: NullableStringFieldUpdateOperationsInput | string | null
    approved_by?: NullableStringFieldUpdateOperationsInput | string | null
    approved_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PettyCashRequestUpdateWithoutOrganizationInput = {
    pet_id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    request_date?: DateTimeFieldUpdateOperationsInput | Date | string
    request_type?: StringFieldUpdateOperationsInput | string
    attachments?: NullableStringFieldUpdateOperationsInput | string | null
    approved_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
    employee?: EmployeeUpdateOneRequiredWithoutPetty_cash_requestsNestedInput
    approver?: EmployeeUpdateOneWithoutApproved_petty_cashNestedInput
  }

  export type PettyCashRequestUncheckedUpdateWithoutOrganizationInput = {
    pet_id?: StringFieldUpdateOperationsInput | string
    emp_id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    request_date?: DateTimeFieldUpdateOperationsInput | Date | string
    request_type?: StringFieldUpdateOperationsInput | string
    attachments?: NullableStringFieldUpdateOperationsInput | string | null
    approved_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approved_by?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PettyCashRequestUncheckedUpdateManyWithoutOrganizationInput = {
    pet_id?: StringFieldUpdateOperationsInput | string
    emp_id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    request_date?: DateTimeFieldUpdateOperationsInput | Date | string
    request_type?: StringFieldUpdateOperationsInput | string
    attachments?: NullableStringFieldUpdateOperationsInput | string | null
    approved_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approved_by?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriptionCreateManyPlanInput = {
    sub_id?: string
    org_id?: string | null
    start_date: Date | string
    end_date: Date | string
    renewal_date?: Date | string | null
    billing_cycle: string
    status: string
    auto_renew?: boolean
    trial_end_date?: Date | string | null
    cancelled_at?: Date | string | null
    payment_method?: string | null
    created_at?: Date | string
    update_at?: Date | string
  }

  export type SubscriptionUpdateWithoutPlanInput = {
    sub_id?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    renewal_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    billing_cycle?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    auto_renew?: BoolFieldUpdateOperationsInput | boolean
    trial_end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelled_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    payment_method?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
    organization?: OrganizationUpdateOneWithoutSubscriptionNestedInput
    invoices?: InvoiceUpdateManyWithoutSubscriptionNestedInput
  }

  export type SubscriptionUncheckedUpdateWithoutPlanInput = {
    sub_id?: StringFieldUpdateOperationsInput | string
    org_id?: NullableStringFieldUpdateOperationsInput | string | null
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    renewal_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    billing_cycle?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    auto_renew?: BoolFieldUpdateOperationsInput | boolean
    trial_end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelled_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    payment_method?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
    invoices?: InvoiceUncheckedUpdateManyWithoutSubscriptionNestedInput
  }

  export type SubscriptionUncheckedUpdateManyWithoutPlanInput = {
    sub_id?: StringFieldUpdateOperationsInput | string
    org_id?: NullableStringFieldUpdateOperationsInput | string | null
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    renewal_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    billing_cycle?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    auto_renew?: BoolFieldUpdateOperationsInput | boolean
    trial_end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelled_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    payment_method?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeatureUpdateWithoutPlansInput = {
    fet_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeatureUncheckedUpdateWithoutPlansInput = {
    fet_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeatureUncheckedUpdateManyWithoutPlansInput = {
    fet_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlanUpdateWithoutFeaturesInput = {
    plan_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price_monthly?: NullableFloatFieldUpdateOperationsInput | number | null
    price_annual?: NullableFloatFieldUpdateOperationsInput | number | null
    currency?: StringFieldUpdateOperationsInput | string
    max_employees?: NullableIntFieldUpdateOperationsInput | number | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
    subscriptions?: SubscriptionUpdateManyWithoutPlanNestedInput
  }

  export type PlanUncheckedUpdateWithoutFeaturesInput = {
    plan_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price_monthly?: NullableFloatFieldUpdateOperationsInput | number | null
    price_annual?: NullableFloatFieldUpdateOperationsInput | number | null
    currency?: StringFieldUpdateOperationsInput | string
    max_employees?: NullableIntFieldUpdateOperationsInput | number | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
    subscriptions?: SubscriptionUncheckedUpdateManyWithoutPlanNestedInput
  }

  export type PlanUncheckedUpdateManyWithoutFeaturesInput = {
    plan_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price_monthly?: NullableFloatFieldUpdateOperationsInput | number | null
    price_annual?: NullableFloatFieldUpdateOperationsInput | number | null
    currency?: StringFieldUpdateOperationsInput | string
    max_employees?: NullableIntFieldUpdateOperationsInput | number | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}