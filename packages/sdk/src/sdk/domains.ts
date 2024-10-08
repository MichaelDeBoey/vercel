/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { domainsBuy } from "../funcs/domainsBuy.js";
import { domainsCheckPrice } from "../funcs/domainsCheckPrice.js";
import { domainsCheckStatus } from "../funcs/domainsCheckStatus.js";
import { domainsCreate } from "../funcs/domainsCreate.js";
import { domainsCreateOrTransfer } from "../funcs/domainsCreateOrTransfer.js";
import { domainsDelete } from "../funcs/domainsDelete.js";
import { domainsGet } from "../funcs/domainsGet.js";
import { domainsGetConfig } from "../funcs/domainsGetConfig.js";
import { domainsGetTransfer } from "../funcs/domainsGetTransfer.js";
import { domainsList } from "../funcs/domainsList.js";
import { domainsListByProject } from "../funcs/domainsListByProject.js";
import { domainsUpdate } from "../funcs/domainsUpdate.js";
import { domainsVerify } from "../funcs/domainsVerify.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import {
  AddProjectDomainRequest,
  AddProjectDomainResponseBody,
} from "../models/operations/addprojectdomain.js";
import {
  BuyDomainRequest,
  BuyDomainResponse,
} from "../models/operations/buydomain.js";
import {
  CheckDomainPriceRequest,
  CheckDomainPriceResponseBody,
} from "../models/operations/checkdomainprice.js";
import {
  CheckDomainStatusRequest,
  CheckDomainStatusResponseBody,
} from "../models/operations/checkdomainstatus.js";
import {
  CreateOrTransferDomainRequest,
  CreateOrTransferDomainResponseBody,
} from "../models/operations/createortransferdomain.js";
import {
  DeleteDomainRequest,
  DeleteDomainResponseBody,
} from "../models/operations/deletedomain.js";
import {
  GetDomainRequest,
  GetDomainResponseBody,
} from "../models/operations/getdomain.js";
import {
  GetDomainConfigRequest,
  GetDomainConfigResponseBody,
} from "../models/operations/getdomainconfig.js";
import {
  GetDomainsRequest,
  GetDomainsResponse,
} from "../models/operations/getdomains.js";
import {
  GetDomainTransferRequest,
  GetDomainTransferResponseBody,
} from "../models/operations/getdomaintransfer.js";
import {
  GetProjectDomainsRequest,
  GetProjectDomainsResponse,
} from "../models/operations/getprojectdomains.js";
import {
  PatchDomainRequest,
  PatchDomainResponseBody,
} from "../models/operations/patchdomain.js";
import {
  VerifyProjectDomainRequest,
  VerifyProjectDomainResponseBody,
} from "../models/operations/verifyprojectdomain.js";
import { unwrapAsync } from "../types/fp.js";
import { PageIterator, unwrapResultIterator } from "../types/operations.js";

export class Domains extends ClientSDK {
  /**
   * Purchase a domain
   *
   * @remarks
   * Allows to purchase the specified domain.
   */
  async buy(
    request: BuyDomainRequest,
    options?: RequestOptions,
  ): Promise<BuyDomainResponse> {
    return unwrapAsync(domainsBuy(
      this,
      request,
      options,
    ));
  }

  /**
   * Check the price for a domain
   *
   * @remarks
   * Check the price to purchase a domain and how long a single purchase period is.
   */
  async checkPrice(
    request: CheckDomainPriceRequest,
    options?: RequestOptions,
  ): Promise<CheckDomainPriceResponseBody> {
    return unwrapAsync(domainsCheckPrice(
      this,
      request,
      options,
    ));
  }

  /**
   * Check a Domain Availability
   *
   * @remarks
   * Check if a domain name is available for purchase.
   */
  async checkStatus(
    request: CheckDomainStatusRequest,
    options?: RequestOptions,
  ): Promise<CheckDomainStatusResponseBody> {
    return unwrapAsync(domainsCheckStatus(
      this,
      request,
      options,
    ));
  }

  /**
   * Get domain transfer info.
   *
   * @remarks
   * Fetch domain transfer availability or transfer status if a transfer is in progress.
   */
  async getTransfer(
    request: GetDomainTransferRequest,
    options?: RequestOptions,
  ): Promise<GetDomainTransferResponseBody> {
    return unwrapAsync(domainsGetTransfer(
      this,
      request,
      options,
    ));
  }

  /**
   * Get a Domain's configuration
   *
   * @remarks
   * Get a Domain's configuration.
   */
  async getConfig(
    request: GetDomainConfigRequest,
    options?: RequestOptions,
  ): Promise<GetDomainConfigResponseBody> {
    return unwrapAsync(domainsGetConfig(
      this,
      request,
      options,
    ));
  }

  /**
   * Get Information for a Single Domain
   *
   * @remarks
   * Get information for a single domain in an account or team.
   */
  async get(
    request: GetDomainRequest,
    options?: RequestOptions,
  ): Promise<GetDomainResponseBody> {
    return unwrapAsync(domainsGet(
      this,
      request,
      options,
    ));
  }

  /**
   * List all the domains
   *
   * @remarks
   * Retrieves a list of domains registered for the authenticated user or team. By default it returns the last 20 domains if no limit is provided.
   */
  async list(
    request: GetDomainsRequest,
    options?: RequestOptions,
  ): Promise<PageIterator<GetDomainsResponse>> {
    return unwrapResultIterator(domainsList(
      this,
      request,
      options,
    ));
  }

  /**
   * Register or transfer-in a new Domain
   *
   * @remarks
   * This endpoint is used for adding a new apex domain name with Vercel for the authenticating user. Can also be used for initiating a domain transfer request from an external Registrar to Vercel.
   */
  async createOrTransfer(
    request: CreateOrTransferDomainRequest,
    options?: RequestOptions,
  ): Promise<CreateOrTransferDomainResponseBody> {
    return unwrapAsync(domainsCreateOrTransfer(
      this,
      request,
      options,
    ));
  }

  /**
   * Update or move apex domain
   *
   * @remarks
   * Update or move apex domain.
   */
  async update(
    request: PatchDomainRequest,
    options?: RequestOptions,
  ): Promise<PatchDomainResponseBody> {
    return unwrapAsync(domainsUpdate(
      this,
      request,
      options,
    ));
  }

  /**
   * Remove a domain by name
   *
   * @remarks
   * Delete a previously registered domain name from Vercel. Deleting a domain will automatically remove any associated aliases.
   */
  async delete(
    request: DeleteDomainRequest,
    options?: RequestOptions,
  ): Promise<DeleteDomainResponseBody> {
    return unwrapAsync(domainsDelete(
      this,
      request,
      options,
    ));
  }

  /**
   * Retrieve project domains by project by id or name
   *
   * @remarks
   * Retrieve the domains associated with a given project by passing either the project `id` or `name` in the URL.
   */
  async listByProject(
    request: GetProjectDomainsRequest,
    options?: RequestOptions,
  ): Promise<PageIterator<GetProjectDomainsResponse>> {
    return unwrapResultIterator(domainsListByProject(
      this,
      request,
      options,
    ));
  }

  /**
   * Add a domain to a project
   *
   * @remarks
   * Add a domain to the project by passing its domain name and by specifying the project by either passing the project `id` or `name` in the URL. If the domain is not yet verified to be used on this project, the request will return `verified = false`, and the domain will need to be verified according to the `verification` challenge via `POST /projects/:idOrName/domains/:domain/verify`. If the domain already exists on the project, the request will fail with a `400` status code.
   */
  async create(
    request: AddProjectDomainRequest,
    options?: RequestOptions,
  ): Promise<AddProjectDomainResponseBody> {
    return unwrapAsync(domainsCreate(
      this,
      request,
      options,
    ));
  }

  /**
   * Verify project domain
   *
   * @remarks
   * Attempts to verify a project domain with `verified = false` by checking the correctness of the project domain's `verification` challenge.
   */
  async verify(
    request: VerifyProjectDomainRequest,
    options?: RequestOptions,
  ): Promise<VerifyProjectDomainResponseBody> {
    return unwrapAsync(domainsVerify(
      this,
      request,
      options,
    ));
  }
}
